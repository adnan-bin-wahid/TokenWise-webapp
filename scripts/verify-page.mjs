import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";

const edgePath =
  process.env.EDGE_PATH ||
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const url = process.env.VERIFY_URL || "http://localhost:3000";
const root = process.cwd();
const outDir = path.join(root, ".tmp");

const viewports = [
  { name: "desktop", width: 1440, height: 1000, mobile: false, deviceScaleFactor: 1 },
  { name: "mobile", width: 390, height: 844, mobile: true, deviceScaleFactor: 2 },
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function readDevToolsPort(profileDir) {
  const portFile = path.join(profileDir, "DevToolsActivePort");

  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (existsSync(portFile)) {
      const [port] = (await readFile(portFile, "utf8")).trim().split(/\r?\n/);
      return port;
    }

    await delay(125);
  }

  throw new Error("Timed out waiting for DevToolsActivePort");
}

async function createTarget(port, targetUrl) {
  const encoded = encodeURIComponent(targetUrl);
  let response = await fetch(`http://127.0.0.1:${port}/json/new?${encoded}`, {
    method: "PUT",
  });

  if (!response.ok) {
    response = await fetch(`http://127.0.0.1:${port}/json/new?${encoded}`);
  }

  if (!response.ok) {
    throw new Error(`Unable to create browser target: ${response.status}`);
  }

  return response.json();
}

function createCdpClient(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = new Map();

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);

    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);

      if (message.error) {
        reject(new Error(message.error.message));
      } else {
        resolve(message.result || {});
      }

      return;
    }

    if (message.method && listeners.has(message.method)) {
      for (const listener of listeners.get(message.method)) {
        listener(message.params || {});
      }
    }
  });

  return {
    ready: new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    }),
    on(method, listener) {
      const existing = listeners.get(method) || [];
      existing.push(listener);
      listeners.set(method, existing);
    },
    send(method, params = {}) {
      id += 1;
      const requestId = id;
      socket.send(JSON.stringify({ id: requestId, method, params }));

      return new Promise((resolve, reject) => {
        pending.set(requestId, { resolve, reject });
      });
    },
    close() {
      socket.close();
    },
  };
}

async function verifyViewport(viewport) {
  const profileDir = path.join(outDir, `edge-${viewport.name}`);
  await rm(profileDir, { recursive: true, force: true });
  await mkdir(profileDir, { recursive: true });

  const browser = spawn(
    edgePath,
    [
      "--remote-debugging-port=0",
      `--user-data-dir=${profileDir}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-background-networking",
      `--window-size=${viewport.width},${viewport.height}`,
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true },
  );

  const port = await readDevToolsPort(profileDir);
  const target = await createTarget(port, "about:blank");
  const cdp = createCdpClient(target.webSocketDebuggerUrl);
  const errors = [];

  await cdp.ready;
  cdp.on("Runtime.exceptionThrown", (params) => {
    errors.push(params.exceptionDetails?.text || "Runtime exception");
  });
  cdp.on("Log.entryAdded", (params) => {
    if (params.entry?.level === "error") {
      errors.push(params.entry.text);
    }
  });

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Log.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", viewport);

  const loadPromise = new Promise((resolve) => cdp.on("Page.loadEventFired", resolve));
  await cdp.send("Page.navigate", { url });
  await Promise.race([loadPromise, delay(10000)]);
  await delay(2500);

  const result = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `
      (() => {
        const canvas = document.querySelector("canvas");
        let canvasResult = null;

        if (canvas) {
          const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
          if (gl) {
            const width = gl.drawingBufferWidth;
            const height = gl.drawingBufferHeight;
            const pixel = new Uint8Array(4);
            let nonZero = 0;
            const xStep = Math.max(1, Math.floor(width / 14));
            const yStep = Math.max(1, Math.floor(height / 14));

            for (let y = 0; y < height; y += yStep) {
              for (let x = 0; x < width; x += xStep) {
                gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
                if (pixel[0] || pixel[1] || pixel[2] || pixel[3]) {
                  nonZero += 1;
                }
              }
            }

            canvasResult = { width, height, nonZero };
          }
        }

        return {
          title: document.title,
          textLength: document.body.innerText.trim().length,
          overlay: Boolean(document.querySelector("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay")),
          canvas: canvasResult,
          primaryCta: Boolean([...document.querySelectorAll("a")].some((link) => link.textContent.includes("Install from Marketplace"))),
        };
      })()
    `,
  });

  const screenshot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
  });
  const screenshotPath = path.join(outDir, `${viewport.name}.png`);
  await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));

  await cdp.send("Browser.close").catch(() => undefined);
  cdp.close();

  setTimeout(() => {
    if (!browser.killed) {
      browser.kill();
    }
  }, 1000);

  return {
    viewport: viewport.name,
    screenshot: screenshotPath,
    errors,
    ...result.result.value,
  };
}

await mkdir(outDir, { recursive: true });

const results = [];
for (const viewport of viewports) {
  results.push(await verifyViewport(viewport));
}

console.log(JSON.stringify(results, null, 2));

const failed = results.some(
  (result) =>
    result.overlay ||
    result.errors.length > 0 ||
    result.textLength < 100 ||
    !result.primaryCta ||
    !result.canvas ||
    result.canvas.nonZero < 3,
);

if (failed) {
  process.exitCode = 1;
}

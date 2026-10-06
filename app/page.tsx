import Image from "next/image";
import Link from "next/link";
import { HeroScene } from "@/components/HeroScene";

const vsixDownloadUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/download/v0.6.5/tokenwise-vscode-0.6.5.vsix";
const bundleDownloadUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/download/v0.6.5/TokenWise-0.6.5.zip";
const releaseUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/tag/v0.6.5";
const repositoryUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated";
const guideUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/blob/main/demonstation.md";
const demoReposUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/blob/main/demonstration/tokenwise_demo/README.md";

const specs = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    requirement: "Editor & IDE",
    details: "Antigravity IDE with workspace rules and a command tool enabled.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    requirement: "Python Runtime",
    details: "A 64-bit Python 3.12 installation. Python 3.13/3.14 alone is not sufficient; use official Python Install Manager.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    requirement: "Target Repository",
    details: "A local directory containing Python source files. The project does not need to sit inside any TokenWise checkout.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    requirement: "Network Access",
    details: "Needed only once to download packaging tools and ~1.35 GB pinned weights. All retrieval runs 100% locally afterward.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    requirement: "Disk Storage",
    details: "Allow about 10 GB free space for the private Python virtualenv, cached wheels, and SHA-256 verified model weights.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    requirement: "Hardware & Compute",
    details: "8 GB RAM practical recommendation. Runs purely on CPU; no GPU, no Ollama, and no external MCP server required.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    requirement: "API Billing & Keys",
    details: "TokenWise does not require an API key or external service account. Your Antigravity model billing remains completely separate.",
  },
];

const quickStartSteps = [
  {
    num: "1",
    title: "Install TokenWise VSIX in Antigravity",
    desc: "Download tokenwise-vscode-0.6.5.vsix. In Antigravity: open Extensions view, click the '...' menu, choose 'Install from VSIX...', select the downloaded file, and reload the editor window when prompted.",
    codeLabel: "Antigravity Extensions View",
    code: "# 1. Extensions (Ctrl+Shift+X) > ... menu\n> Install from VSIX... (Select .vsix file)\n# Click 'Reload Window' when prompted",
  },
  {
    num: "2",
    title: "Open Your Local Python Repository",
    desc: "Use File > Open Folder and select your project. The folder can be located anywhere on disk; it does not need to sit inside any TokenWise checkout. Target repository can be configured if desired.",
    codeLabel: "Antigravity Menu",
    code: "File > Open Folder -> C:\\Projects\\my-python-app\n# Target repository runs anywhere on your disk\n# Trust workspace contents when prompted",
  },
  {
    num: "3",
    title: "Enable Automatic Context in Antigravity",
    desc: "Open the Command Palette (Ctrl+Shift+P) and execute 'TokenWise: Enable Automatic Context'. On first setup, select 'Install Managed Backend' to create a private environment and download weights automatically.",
    codeLabel: "Antigravity Command Palette (Ctrl+Shift+P)",
    code: "> TokenWise: Enable Automatic Context\n-> Select: [ Install Managed Backend ]\n# Automated 7-step setup executes in background",
  },
  {
    num: "4",
    title: "Enter Your Normal Coding Prompt",
    desc: "Start a new Antigravity chat and enter your question. The backend starts automatically and injects bounded [TokenWise automatic context] with exact code snippets and tests without asking you to pick files.",
    codeLabel: "Antigravity Agent Chat",
    code: "> Explain login failure handling and related tests\n[TokenWise automatic context] injected\n# Retrieved: auth/service.py & tests/test_auth.py",
  },
];

const setupPipeline = [
  {
    step: "1",
    name: "Prerequisites Verification",
    what: "Finds 64-bit Python 3.12 and verifies bundled distribution files.",
    fix: "Install Python 3.12 with pymanager install 3.12, restart Antigravity. For custom location, set TokenWise > Python Path.",
  },
  {
    step: "2",
    name: "Backend Files Deployment",
    what: "Copies verified backend files into isolated private user storage.",
    fix: "Check free disk space and write permissions for the logged storage path, then click Retry Failed Step.",
  },
  {
    step: "3",
    name: "Environment Creation",
    what: "Creates and configures TokenWise's private Python virtual environment.",
    fix: "Repair Python 3.12 installation if corrupted. Broken environments are automatically recreated; model caches are preserved.",
  },
  {
    step: "4",
    name: "Dependency Installation",
    what: "Installs packaging tools, CPU PyTorch, and backend dependencies.",
    fix: "Verify internet/proxy access to PyPI and download.pytorch.org. Retry automatically reuses validated wheels.",
  },
  {
    step: "5",
    name: "Model Weights & Checksum",
    what: "Downloads ~1.35 GB of pinned weights and verifies SHA-256 hash.",
    fix: "Check access to Hugging Face and available disk space. Partial downloads are resumed when supported.",
  },
  {
    step: "6",
    name: "Self-Verification Test",
    what: "Checks Python imports, tokenizer, and trained carbon artifacts.",
    fix: "Inspect Output > TokenWise Setup error log, resolve reported system/library issue, then click Retry.",
  },
  {
    step: "7",
    name: "Registration & Rules",
    what: "Saves verified backend settings and configures workspace rule hooks.",
    fix: "Ensure settings storage permissions are writable. Existing user rules and context budgets are fully preserved.",
  },
];

const pruningCapabilities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Bounded Context Pruning",
    desc: "Eliminates token bloat by bounding retrieved context to exact relevant definitions, functions, and call sites without dumping noisy full files.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Automatic Repository Discovery",
    desc: "Scans and indexes Python source files, AST symbol trees, dependency graphs, and test suites across the workspace automatically.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "100% Local CPU Execution",
    desc: "Zero external cloud dependencies or server calls. Pruning and retrieval run entirely on your CPU with private model weights.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: "Automatic Carbon & Token Accounting",
    desc: "Measures token reduction and energy footprint directly, ensuring sustainable context utilization across large agent sessions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Antigravity Workspace Isolation",
    desc: "Integrates smoothly via workspace rule hooks without altering application code or corrupting existing IDE settings.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Teacher & Demonstration Suite",
    desc: "Includes a complete Python demonstration project with 20 tests, input-trace, and packet-comparison verification commands for presentations.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation Bar */}
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="#top" aria-label="TokenWise Antigravity Extension Home">
          <Image
            src="/tokenwise_logo.svg"
            alt="TokenWise Official Logo"
            width={34}
            height={34}
            className="brandLogo"
            priority
          />
          <span className="brandName">TokenWise</span>
        </Link>
        <div className="navLinks">
          <Link href="#specs">Specifications</Link>
          <Link href="#quickstart">Quick Start</Link>
          <Link href="#pipeline">Setup Pipeline</Link>
          <Link href="#capabilities">Architecture</Link>
          <Link href={guideUrl} target="_blank" rel="noopener noreferrer">Guide</Link>
          <Link href={repositoryUrl} target="_blank" rel="noopener noreferrer">GitHub</Link>
        </div>
        <a className="navAction" href={vsixDownloadUrl} download>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download .VSIX
        </a>
      </nav>

      {/* Hero Section (Strictly Middle Aligned, 3D Studio Background, White Theme) */}
      <section className="hero" id="top">
        <HeroScene />
        <div className="heroContainer">
          {/* Centered Brand Emblem */}
          <div className="heroLogoWrapper">
            <Image
              src="/tokenwise_logo.svg"
              alt="TokenWise Antigravity Extension Logo"
              width={76}
              height={76}
              priority
              className="heroLogo"
            />
          </div>

          <h1 className="heroTitle">TokenWise</h1>
          <p className="heroSubtitle">Sustainable Context Optimization for Coding Agents</p>
          <p className="heroAuthor">
            Developed by{" "}
            <a
              href="https://github.com/adnan-bin-wahid"
              target="_blank"
              rel="noopener noreferrer"
              className="heroAuthorLink"
            >
              adnan-bin-wahid
            </a>
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href={vsixDownloadUrl} download>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download for Antigravity (.vsix)
            </a>
            <a className="secondaryBtn" href={bundleDownloadUrl} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              Demonstration Bundle (.zip)
            </a>
            <a className="secondaryBtn" href={repositoryUrl} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </div>

          {/* Perfected Antigravity Installation Box with Official Antigravity Logo & Extra Breathing Room */}
          <div className="installHighlightBox" role="region" aria-label="Antigravity installation instructions">
            <div className="installHighlightHeader">
              <div className="antigravityBrandHeading">
                <div className="antigravityLogoWrapper">
                  <Image
                    src="/antigravity_app_icon.png"
                    alt="Antigravity IDE official logo"
                    width={32}
                    height={32}
                    className="antigravityLogoImg"
                    priority
                  />
                </div>
                <h2 className="installHighlightTitle">How to add in Antigravity:</h2>
              </div>
            </div>

            <div className="installStepsGrid">
              {/* Step 1 */}
              <div className="installStepCard">
                <div className="stepCardHeader">
                  <span className="installStepNum">1</span>
                  <span className="stepCardTitle">Download</span>
                </div>
                <p className="stepCardDesc">
                  Download the <a href={vsixDownloadUrl} download className="inlineVsixLink"><code>.vsix</code></a> file to your computer.
                </p>
              </div>

              <div className="stepConnector" aria-hidden="true">→</div>

              {/* Step 2 */}
              <div className="installStepCard">
                <div className="stepCardHeader">
                  <span className="installStepNum">2</span>
                  <span className="stepCardTitle">Open Extensions</span>
                </div>
                <p className="stepCardDesc">
                  In Antigravity: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>
                </p>
              </div>

              <div className="stepConnector" aria-hidden="true">→</div>

              {/* Step 3 */}
              <div className="installStepCard">
                <div className="stepCardHeader">
                  <span className="installStepNum">3</span>
                  <span className="stepCardTitle">Install from VSIX</span>
                </div>
                <p className="stepCardDesc">
                  Click <strong><code>...</code></strong> menu → <strong>Install from VSIX...</strong>
                </p>
              </div>

              <div className="stepConnector" aria-hidden="true">→</div>

              {/* Step 4 */}
              <div className="installStepCard">
                <div className="stepCardHeader">
                  <span className="installStepNum">4</span>
                  <span className="stepCardTitle">Reload Window</span>
                </div>
                <p className="stepCardDesc">
                  Select the file &amp; click <strong>Reload</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="metricsBar" aria-label="Key specifications">
        <div className="metricItem">
          <span className="metricValue">Local CPU</span>
          <span className="metricLabel">No GPU, Ollama, or MCP server required</span>
        </div>
        <div className="metricItem">
          <span className="metricValue">~1.35 GB</span>
          <span className="metricLabel">Model weights verified with SHA-256 hash</span>
        </div>
        <div className="metricItem">
          <span className="metricValue">Zero Picking</span>
          <span className="metricLabel">Automatic retrieval of relevant code &amp; tests</span>
        </div>
        <div className="metricItem">
          <span className="metricValue">Python 3.12</span>
          <span className="metricLabel">Windows-tested beta with managed backend</span>
        </div>
      </section>

      {/* System Requirements & Specifications Matrix */}
      <section className="section sectionWhite" id="specs">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">System Requirements</p>
            <h2 className="sectionTitle">Prerequisites &amp; Environment Matrix</h2>
            <p className="sectionSubtitle">
              TokenWise is built for predictable local execution. Review the requirements and run the quick Python verification check below.
            </p>
          </div>

          {/* PowerShell Python 3.12 Quick Check Callout */}
          <div className="terminalCheckCard">
            <div className="terminalCheckHeader">
              <span className="terminalCheckDot" />
              <span className="terminalCheckTitle">Windows PowerShell: Install or Verify 64-bit Python 3.12</span>
            </div>
            <pre className="terminalCheckCode">
              <code>
                pymanager install 3.12{"\n"}
                py -3.12 -c &quot;import sys,struct; print(sys.version); print(struct.calcsize(&apos;P&apos;)*8); print(sys.executable)&quot;
              </code>
            </pre>
            <div className="terminalCheckNote">
              Output must display <strong>3.12.x</strong>, <strong>64</strong>, and the executable path.
            </div>
          </div>

          <div className="specGrid">
            {specs.map((item) => (
              <div className="specCard" key={item.requirement}>
                <div className="specCardTop">
                  <div className="specIconWrapper">{item.icon}</div>
                </div>
                <h3 className="specCardName">{item.requirement}</h3>
                <p className="specCardDetails">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start 4 Steps */}
      <section className="section sectionLight" id="quickstart">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">Step-by-Step Workflow</p>
            <h2 className="sectionTitle">Get Started in Antigravity in 4 Moves</h2>
            <p className="sectionSubtitle">
              No need to clone repositories, build from source, or press F5. Install the VSIX in Antigravity and prompt normally.
            </p>
          </div>

          <div className="stepsGrid">
            {quickStartSteps.map((step) => (
              <div className="stepCard" key={step.num}>
                <div className="stepCardTop">
                  <div className="stepNumber">0{step.num}</div>
                </div>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepText">{step.desc}</p>
                <div className="codeSnippet">
                  <div className="codeSnippetLabel">{step.codeLabel}</div>
                  <code>{step.code}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Managed Backend Setup Pipeline */}
      <section className="section sectionWhite" id="pipeline">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">Automated Setup Pipeline</p>
            <h2 className="sectionTitle">7-Step Managed Backend Lifecycle</h2>
            <p className="sectionSubtitle">
              Executing &apos;TokenWise: Enable Automatic Context&apos; runs through 7 validated stages to automatically initialize the private Python environment.
            </p>
          </div>

          <div className="pipelineGrid">
            {setupPipeline.map((item) => (
              <div className="pipelineCard" key={item.step}>
                <div className="pipelineHeader">
                  <span className="pipelineStepNum">Stage {item.step}/7</span>
                </div>
                <h3 className="pipelineTitle">{item.name}</h3>
                <p className="pipelineWhat">{item.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Context Architecture & Capabilities */}
      <section className="section sectionLight" id="capabilities">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">Core Engine</p>
            <h2 className="sectionTitle">Sustainable Context Architecture</h2>
            <p className="sectionSubtitle">
              Engineered to prune away noise, respect token budgets, and provide Antigravity agents with accurate code context.
            </p>
          </div>

          <div className="featuresGrid">
            {pruningCapabilities.map((cap) => (
              <div className="featureCard" key={cap.title}>
                <div className="featureIconBox">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Verification Box - Authentic Antigravity Status Indicators */}
          <div className="verifyBox">
            <div className="verifyCard">
              <div className="verifyCardHeader">
                <span className="verifyCardIcon">📋</span>
                <h4>Customizations &gt; Rules</h4>
              </div>
              <p>A TokenWise workspace rule is listed automatically under your active Antigravity workspace rules.</p>
            </div>
            <div className="verifyCard">
              <div className="verifyCardHeader">
                <span className="verifyCardIcon">💬</span>
                <h4>Agent Chat Responses</h4>
              </div>
              <p>The agent executes the context command and displays <code>[TokenWise automatic context]</code> before formulating code solutions.</p>
            </div>
            <div className="verifyCard">
              <div className="verifyCardHeader">
                <span className="verifyCardIcon">🔍</span>
                <h4>Output Log Verification</h4>
              </div>
              <p>Open <code>Output &gt; TokenWise Setup</code> and <code>Output &gt; TokenWise Index</code> to confirm indexed Python files and health status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstration & Teacher Bundle Section */}
      <section className="section sectionWhite" id="demo">
        <div className="container">
          <div className="demonstrationCard">
            <div className="demonstrationContent">
              <h2 className="demonstrationTitle">Demonstration Guide &amp; Test Project</h2>
              <p className="demonstrationDesc">
                TokenWise 0.6.5 provides an official teacher demonstration bundle with a complete Python demo project, 20 tests, input-trace inspection commands, and packet-comparison verification.
              </p>
              <div className="demonstrationLinks">
                <a className="primaryBtn" href={bundleDownloadUrl} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  Download Demonstration Bundle (.zip)
                </a>
                <a className="secondaryBtn" href={guideUrl} target="_blank" rel="noopener noreferrer">
                  View Demonstration Guide
                </a>
                <a className="secondaryBtn" href={demoReposUrl} target="_blank" rel="noopener noreferrer">
                  Demo Project Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Download Call to Action */}
      <section className="section sectionLight">
        <div className="container">
          <div className="ctaCard">
            <h2>Download TokenWise for Antigravity</h2>
            <p>
              Experience bounded context retrieval for your Python repositories. Download the official VSIX file, install in Antigravity, and start coding sustainably.
            </p>
            <div className="ctaActions">
              <a className="ctaBtnPrimary" href={vsixDownloadUrl} download>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download VSIX (.vsix)
              </a>
              <a className="ctaBtnSecondary" href={bundleDownloadUrl} target="_blank" rel="noopener noreferrer">
                Demonstration Bundle (.zip)
              </a>
              <a className="ctaBtnSecondary" href={repositoryUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <Image
              src="/tokenwise_logo.svg"
              alt="TokenWise Logo"
              width={26}
              height={26}
            />
            <span><strong>TokenWise</strong> &bull; Sustainable Context Optimization for Antigravity Coding Agents</span>
          </div>
          <div className="footerLinks">
            <Link href={repositoryUrl} target="_blank" rel="noopener noreferrer">GitHub</Link>
            <Link href={releaseUrl} target="_blank" rel="noopener noreferrer">Release v0.6.5</Link>
            <Link href={guideUrl} target="_blank" rel="noopener noreferrer">Demonstration Guide</Link>
            <Link href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 3.12</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

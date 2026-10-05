import Image from "next/image";
import Link from "next/link";
import { HeroScene } from "@/components/HeroScene";

const vsixDownloadUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/download/v0.6.3/tokenwise-vscode-0.6.3.vsix";
const bundleDownloadUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/download/v0.6.3/TokenWise-0.6.3.zip";
const releaseUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/tag/v0.6.3";
const repositoryUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated";
const guideUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/blob/main/demonstation.md";

const specs = [
  {
    requirement: "Editor",
    details: "Antigravity IDE with workspace rules and a command tool",
  },
  {
    requirement: "Python",
    details: "64-bit Python 3.12 installation (Python 3.13/3.14 alone is not sufficient)",
  },
  {
    requirement: "Repository",
    details: "A local folder containing Python source code",
  },
  {
    requirement: "Internet",
    details: "Needed once for initial dependency and model downloads; retrieval runs locally afterward",
  },
  {
    requirement: "Disk",
    details: "Allow about 10 GB free for the environment, model weights (~1.35 GB), and package caches",
  },
  {
    requirement: "Memory & Compute",
    details: "8 GB RAM recommendation. Runs entirely on CPU; no GPU, Ollama, or MCP server required",
  },
  {
    requirement: "API Keys",
    details: "TokenWise itself does not require an API key. Your Antigravity model access remains separate",
  },
];

const quickStartSteps = [
  {
    num: "1",
    title: "Install TokenWise VSIX",
    text: "Download tokenwise-vscode-0.6.3.vsix. In Antigravity: open Extensions view, click the '...' menu, choose 'Install from VSIX...', select the downloaded file, and reload the editor window when prompted. (F5 is only for extension developers).",
    code: "# Download VSIX directly from GitHub Releases\n# In Antigravity: Extensions > ... > Install from VSIX...",
  },
  {
    num: "2",
    title: "Open Your Python Repository",
    text: "Use File > Open Folder and select your local Python project folder (e.g., C:\\Projects\\my-python-app). The folder does not need to sit inside any TokenWise checkout.",
    code: "# In Antigravity:\nFile > Open Folder -> Select your local Python project",
  },
  {
    num: "3",
    title: "Enable Automatic Context",
    text: "Open the Command Palette (Ctrl+Shift+P) and run 'TokenWise: Enable Automatic Context'. On a new machine, choose 'Install Managed Backend' to create a private Python environment and download pinned weights.",
    code: "# Command Palette (Ctrl+Shift+P):\nTokenWise: Enable Automatic Context\n-> Choose 'Install Managed Backend'",
  },
  {
    num: "4",
    title: "Enter Your Normal Prompt",
    text: "Start a new Antigravity chat and enter your question. The backend automatically injects bounded [TokenWise automatic context] with exact code snippets and tests without asking you to pick files manually.",
    code: "> Explain the login failure handling and its related tests.\n[TokenWise automatic context]\n# Retrieved: auth/service.py, tests/test_auth.py",
  },
];

const setupPipeline = [
  {
    step: "1",
    name: "Prerequisites",
    what: "Finds 64-bit Python 3.12 and verifies bundled files.",
    fix: "Install Python 3.12 with pymanager install 3.12, restart Antigravity. Set TokenWise > Python Path if custom.",
  },
  {
    step: "2",
    name: "Backend files",
    what: "Copies verified backend files into private user storage.",
    fix: "Check free disk space and permissions for storage path, then click Retry Failed Step.",
  },
  {
    step: "3",
    name: "Environment",
    what: "Creates or checks TokenWise's private Python virtual environment.",
    fix: "Repair Python 3.12 installation if needed. A broken private environment is recreated automatically.",
  },
  {
    step: "4",
    name: "Dependencies",
    what: "Installs packaging tools, CPU PyTorch, and backend dependencies.",
    fix: "Check internet connection to PyPI and download.pytorch.org. Retry reuses completed substeps.",
  },
  {
    step: "5",
    name: "Model Weights",
    what: "Downloads ~1.35 GB of pinned weights and verifies SHA-256 checksum.",
    fix: "Check Hugging Face access and disk space. Partial downloads resume when permitted by server.",
  },
  {
    step: "6",
    name: "Verification",
    what: "Checks imports, tokenizer, and trained carbon artifacts.",
    fix: "Read the import error in Output > TokenWise Setup, fix reported system issue, and click Retry.",
  },
  {
    step: "7",
    name: "Registration",
    what: "Saves the verified backend and configures workspace rules and hooks.",
    fix: "Check storage/settings permissions and retry. Verified environment and weights remain intact.",
  },
];

const pruningCapabilities = [
  {
    title: "Bounded Context Pruning",
    desc: "Eliminates token waste by bounding context to exact relevant definitions and call sites, avoiding noisy full-file dumps.",
  },
  {
    title: "Automatic Repository Discovery",
    desc: "Discovers Python source modules, dependency graphs, and test suites automatically across local repositories.",
  },
  {
    title: "100% Local CPU Execution",
    desc: "Retrieval and pruning run locally on your CPU. No GPU, no Ollama, no external MCP server, and no extra API keys required.",
  },
  {
    title: "Automatic Carbon & Token Accounting",
    desc: "Measures token savings and energy efficiency directly, ensuring sustainable context usage for large agent sessions.",
  },
  {
    title: "Antigravity Workspace Integration",
    desc: "Merges seamlessly via workspace rules and command hooks without modifying existing application source files.",
  },
  {
    title: "Teacher & Demonstration Bundle",
    desc: "Includes 4 independent Python demo repositories, input-trace, and packet-comparison verification commands.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation with Brand Logo */}
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="#top" aria-label="TokenWise Home">
          <Image
            src="/tokenwise_logo.svg"
            alt="TokenWise Brand Logo"
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

      {/* Hero Section (Strictly Middle Aligned, 3D Aesthetic Studio Background, White Theme) */}
      <section className="hero" id="top">
        <HeroScene />
        <div className="heroContainer">
          {/* Centered Brand Emblem */}
          <div className="heroLogoWrapper">
            <Image
              src="/tokenwise_logo.svg"
              alt="TokenWise Official Logo"
              width={76}
              height={76}
              priority
              className="heroLogo"
            />
          </div>

          <h1 className="heroTitle">TokenWise</h1>
          <p className="heroSubtitle">Sustainable Context Optimization for Coding Agents</p>

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

          {/* Highlighted and Bold Antigravity Installation Box */}
          <div className="installHighlightBox" role="region" aria-label="Antigravity installation instructions">
            <div className="installHighlightHeader">
              <span className="installHighlightIcon">⚡</span>
              <span className="installHighlightTitle">How to add in Antigravity:</span>
            </div>
            <div className="installHighlightSteps">
              <div className="installStepItem">
                <span className="installStepNum">1</span>
                <span><strong>Download the file</strong> (<code>.vsix</code>)</span>
              </div>
              <span className="stepArrow">→</span>
              <div className="installStepItem">
                <span className="installStepNum">2</span>
                <span>Open <strong>Extensions</strong> (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>)</span>
              </div>
              <span className="stepArrow">→</span>
              <div className="installStepItem">
                <span className="installStepNum">3</span>
                <span>Click <strong>...</strong> menu → <strong>Install from VSIX...</strong></span>
              </div>
              <span className="stepArrow">→</span>
              <div className="installStepItem">
                <span className="installStepNum">4</span>
                <span>Select file &amp; <strong>Reload</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="metricsBar" aria-label="Key specifications">
        <div className="metricItem">
          <span className="metricValue">100% Local CPU</span>
          <span className="metricLabel">No GPU, Ollama, or MCP server required</span>
        </div>
        <div className="metricItem">
          <span className="metricValue">~1.35 GB</span>
          <span className="metricLabel">Pinned model weights verified by SHA-256</span>
        </div>
        <div className="metricItem">
          <span className="metricValue">Zero Manual Picking</span>
          <span className="metricLabel">Automatic retrieval of relevant code & tests</span>
        </div>
        <div className="metricItem">
          <span className="metricValue">Python 3.12</span>
          <span className="metricLabel">Windows-tested beta with managed backend</span>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="section sectionWhite" id="specs">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">System Requirements</p>
            <h2 className="sectionTitle">Prerequisites & System Specifications</h2>
            <p className="sectionSubtitle">
              TokenWise is designed for privacy and predictable local execution. Review the verified environment requirements before starting.
            </p>
          </div>

          <div className="specTableWrapper">
            <table className="specTable">
              <thead>
                <tr>
                  <th scope="col">Requirement</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((item) => (
                  <tr key={item.requirement}>
                    <td className="specRequirement">{item.requirement}</td>
                    <td>{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Start 4 Steps */}
      <section className="section sectionLight" id="quickstart">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">Step-by-Step Guide</p>
            <h2 className="sectionTitle">Get Started in Antigravity in 4 Moves</h2>
            <p className="sectionSubtitle">
              No need to clone repositories, compile extensions, or manually run servers. Install the VSIX and let TokenWise manage the rest.
            </p>
          </div>

          <div className="stepsGrid">
            {quickStartSteps.map((step) => (
              <div className="stepCard" key={step.num}>
                <div className="stepNumber">0{step.num}</div>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepText">{step.text}</p>
                <div className="codeSnippet">
                  <code>{step.code}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Pipeline 7 Steps */}
      <section className="section sectionWhite" id="pipeline">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">Backend Automation</p>
            <h2 className="sectionTitle">7-Step Managed Backend Setup</h2>
            <p className="sectionSubtitle">
              When you run &apos;TokenWise: Enable Automatic Context&apos;, TokenWise handles setup in 7 validated stages. If any step fails, you can retry without starting from scratch.
            </p>
          </div>

          <div className="pipelineGrid">
            {setupPipeline.map((item) => (
              <div className="pipelineCard" key={item.step}>
                <div className="pipelineHeader">
                  <span className="pipelineStepNum">Step {item.step}/7</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.what}</p>
                <div className="pipelineFix">
                  <strong>Recovery:</strong> {item.fix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Capabilities */}
      <section className="section sectionLight" id="capabilities">
        <div className="container">
          <div className="sectionHeader">
            <p className="sectionEyebrow">Core Capabilities</p>
            <h2 className="sectionTitle">Sustainable Context Architecture</h2>
            <p className="sectionSubtitle">
              Engineered to prune away noise, respect token budgets, and provide Antigravity agents with accurate code context.
            </p>
          </div>

          <div className="featuresGrid">
            {pruningCapabilities.map((cap) => (
              <div className="featureCard" key={cap.title}>
                <div className="featureIconBox">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Verification Box */}
          <div className="verifyBox">
            <div className="verifyCard">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 14 14" />
                </svg>
                Customizations &gt; Rules
              </h4>
              <p>A TokenWise workspace rule is listed automatically under your Antigravity customizations.</p>
            </div>
            <div className="verifyCard">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Agent Chat Responses
              </h4>
              <p>The agent runs the context command and displays <code>[TokenWise automatic context]</code> before generating answers.</p>
            </div>
            <div className="verifyCard">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                Output Logs
              </h4>
              <p>Full installation and indexing progress can be checked in <code>Output &gt; TokenWise Setup</code> and <code>TokenWise Index</code>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Download Call to Action */}
      <section className="section sectionWhite">
        <div className="container">
          <div className="ctaCard">
            <h2>Download TokenWise for Antigravity</h2>
            <p>
              Get bounded context retrieval for your Python repositories. Install the 0.6.3 VSIX in Antigravity and start prompting sustainably.
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
                Complete Demonstration Bundle (.zip)
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
            <span><strong>TokenWise</strong> &bull; Sustainable Context Optimization for Coding Agents</span>
          </div>
          <div className="footerLinks">
            <Link href={repositoryUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
            <Link href={releaseUrl} target="_blank" rel="noopener noreferrer">v0.6.3 Release</Link>
            <Link href={guideUrl} target="_blank" rel="noopener noreferrer">Teacher Guide</Link>
            <Link href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 3.12</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

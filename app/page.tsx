import Image from "next/image";
import Link from "next/link";
import { HeroScene } from "@/components/HeroScene";

const marketplaceUrl =
  "https://marketplace.visualstudio.com/items?itemName=tokenwise.tokenwise";
const repositoryUrl =
  "https://github.com/adnan-bin-wahid/Tokenwise-updated/blob/main/README.md";

const highlights = [
  {
    value: "Live",
    label: "status bar token awareness while you write",
  },
  {
    value: "1-click",
    label: "selected prompt analysis and optimization",
  },
  {
    value: "Multi",
    label: "model cost comparison in a focused side panel",
  },
];

const features = [
  {
    title: "Analyze selected prompts",
    body: "Highlight any prompt and run a focused TokenWise analysis from the editor context menu.",
  },
  {
    title: "Compare model costs",
    body: "Review estimated spend across common LLM providers before sending expensive context.",
  },
  {
    title: "Optimize heavy text",
    body: "Rewrite long-winded prompt sections into tighter text while keeping the meaning intact.",
  },
  {
    title: "Stay in flow",
    body: "Token counts and pricing feedback sit inside VS Code, close to the file you are editing.",
  },
];

const workflow = [
  "Select prompt text in VS Code",
  "Run TokenWise from the context menu",
  "Compare token count, model cost, and optimization suggestions",
  "Apply the cleaner prompt back into your workflow",
];

const comparisons = [
  ["Before", "Verbose prompt drafts with hidden token cost"],
  ["During", "Instant count, pricing context, and focused rewrite options"],
  ["After", "Sharper prompts that are easier to review and cheaper to test"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image
          src="/tokenwise_3d_hero_background.webp"
          alt="Abstract TokenWise 3D interface showing code flowing through a token analysis lens"
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
        <HeroScene />
        <div className="heroShade" />

        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="#top" aria-label="TokenWise home">
            <span className="brandMark">TW</span>
            <span>TokenWise</span>
          </Link>
          <div className="navLinks">
            <Link href="#features">Features</Link>
            <Link href="#workflow">Workflow</Link>
            <Link href="#install">Install</Link>
          </div>
          <Link className="navButton" href={marketplaceUrl}>
            Install
          </Link>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">VS Code prompt intelligence</p>
          <h1>TokenWise</h1>
          <p className="heroLead">
            Count tokens, compare LLM costs, and tighten expensive prompts
            directly from your editor before they reach an API bill.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href={marketplaceUrl}>
              Install from Marketplace
            </Link>
            <Link className="secondaryButton" href={repositoryUrl}>
              View repository
            </Link>
          </div>
          <div className="terminal" aria-label="TokenWise extension command preview">
            <div className="terminalTop">
              <span />
              <span />
              <span />
            </div>
            <code>
              TokenWise: Analyze Selected Prompt{"\n"}
              input tokens: 1,842{"\n"}
              suggested savings: 31%{"\n"}
              best next action: Optimize Selected Prompt
            </code>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="TokenWise highlights">
        {highlights.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section split" id="features">
        <div className="sectionIntro">
          <p className="eyebrow">Built for prompt iteration</p>
          <h2>Everything a serious extension page needs to communicate.</h2>
          <p>
            TokenWise is positioned as a focused developer utility: clear value,
            fast install path, and enough product detail to earn confidence
            before a user opens VS Code.
          </p>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <span className="featureIcon" aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <div className="sectionIntro narrow">
          <p className="eyebrow">Editor-native flow</p>
          <h2>From rough prompt to cost-aware text in four moves.</h2>
        </div>
        <div className="steps">
          {workflow.map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section productBand">
        <div className="glassPanel">
          <div>
            <p className="eyebrow">Cost clarity</p>
            <h2>Make token usage visible before it becomes spend.</h2>
          </div>
          <div className="comparisonList">
            {comparisons.map(([label, body]) => (
              <div className="comparison" key={label}>
                <strong>{label}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section install" id="install">
        <div>
          <p className="eyebrow">Ready for Vercel</p>
          <h2>Install TokenWise, then keep improving prompts from VS Code.</h2>
          <p>
            The website is built as a clean Next.js application with responsive
            layout, WebGL visual polish, SEO metadata, and production scripts
            ready for Vercel deployment.
          </p>
        </div>
        <div className="installPanel">
          <code>ext install tokenwise.tokenwise</code>
          <Link className="primaryButton wide" href={marketplaceUrl}>
            Open VS Marketplace
          </Link>
        </div>
      </section>

      <footer className="footer">
        <span>TokenWise</span>
        <div>
          <Link href={repositoryUrl}>GitHub</Link>
          <Link href={marketplaceUrl}>Marketplace</Link>
        </div>
      </footer>
    </main>
  );
}

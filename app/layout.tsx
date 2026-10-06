import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://tokenwise-webapp.vercel.app";
const titleText = "TokenWise Extension for Antigravity IDE | Sustainable Context Optimization";
const descriptionText =
  "Official TokenWise extension for Antigravity IDE. Automatic, bounded Python repository context optimization for coding agents. 100% local CPU, zero API keys.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleText,
    template: "%s | TokenWise Antigravity Extension",
  },
  description: descriptionText,
  applicationName: "TokenWise Antigravity Extension",
  authors: [
    {
      name: "Adnan Bin Wahid",
      url: "https://github.com/adnan-bin-wahid",
    },
  ],
  generator: "Next.js",
  keywords: [
    // Primary query & variants
    "TokenWise",
    "TokenWise extension Antigravity",
    "TokenWise Antigravity extension",
    "TokenWise Antigravity",
    "TokenWise extension",
    "Antigravity extension",
    "Antigravity TokenWise",
    "Antigravity extension TokenWise",
    "Antigravity IDE extension",
    "Antigravity IDE",
    "TokenWise VSIX",
    "TokenWise download",
    "TokenWise vsix download",
    "Antigravity VSIX download",
    "Antigravity coding agent",
    "Antigravity coding agents",
    // Functional & technical keywords
    "sustainable context optimization",
    "bounded context retrieval",
    "context optimization for coding agents",
    "token pruning",
    "token reduction AI",
    "local CPU context retrieval",
    "Python repository context",
    "Python 3.12 Antigravity",
    "Adnan Bin Wahid",
    "adnan-bin-wahid",
  ],
  creator: "Adnan Bin Wahid",
  publisher: "Adnan Bin Wahid",
  category: "technology",
  classification: "Developer Tools, IDE Extensions, AI Agent Context Optimization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: titleText,
    description: descriptionText,
    url: siteUrl,
    siteName: "TokenWise Antigravity Extension",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/tokenwise_logo.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "TokenWise Antigravity Extension Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleText,
    description: descriptionText,
    creator: "@adnan_bin_wahid",
    images: [
      {
        url: "/tokenwise_logo.png",
        alt: "TokenWise Antigravity Extension Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/tokenwise_logo.svg", type: "image/svg+xml" },
    ],
    apple: "/tokenwise_logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
  colorScheme: "light",
};

// Comprehensive Schema.org Structured Data graph for maximum Google SERP rich snippets
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. WebSite Schema
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "TokenWise Antigravity Extension",
      description: descriptionText,
      publisher: {
        "@type": "Person",
        "@id": `${siteUrl}/#author`,
        name: "Adnan Bin Wahid",
        url: "https://github.com/adnan-bin-wahid",
      },
      inLanguage: "en-US",
    },
    // 2. SoftwareApplication Schema (Extension)
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "TokenWise Antigravity Extension",
      alternateName: [
        "TokenWise",
        "TokenWise Extension",
        "TokenWise for Antigravity",
        "tokenwise-vscode",
      ],
      description:
        "Official TokenWise extension for Antigravity IDE. Automatically optimizes and bounds Python repository context for coding agents, running 100% locally on CPU without external API keys.",
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "IDE Extension",
      operatingSystem: "Windows, macOS, Linux",
      softwareVersion: "0.6.5",
      fileFormat: "application/vsix",
      url: siteUrl,
      downloadUrl:
        "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/download/v0.6.5/tokenwise-vscode-0.6.5.vsix",
      releaseNotes:
        "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/tag/v0.6.5",
      requirements: "Antigravity IDE, 64-bit Python 3.12",
      memoryRequirements: "8 GB RAM recommended",
      storageRequirements: "10 GB free space for weights and virtual environment",
      author: {
        "@type": "Person",
        "@id": `${siteUrl}/#author`,
        name: "Adnan Bin Wahid",
        url: "https://github.com/adnan-bin-wahid",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      image: `${siteUrl}/tokenwise_logo.png`,
    },
    // 3. HowTo Schema (Antigravity Installation steps)
    {
      "@type": "HowTo",
      "@id": `${siteUrl}/#howto-install`,
      name: "How to Install TokenWise Extension in Antigravity IDE",
      description:
        "A 4-step guide to installing and activating the TokenWise VSIX extension in Antigravity IDE.",
      totalTime: "PT2M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Download the VSIX",
          text: "Download tokenwise-vscode-0.6.5.vsix from the official GitHub release to your local computer.",
          url: "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/download/v0.6.5/tokenwise-vscode-0.6.5.vsix",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Open Extensions in Antigravity",
          text: "Open Antigravity IDE and press Ctrl+Shift+X to open the Extensions view.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Install from VSIX",
          text: "Click the '...' (More Actions) menu at the top of the Extensions view, choose 'Install from VSIX...', and select the downloaded file.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Reload Window",
          text: "Click 'Reload Window' when prompted by Antigravity to activate the extension.",
        },
      ],
    },
    // 4. FAQPage Schema for Rich Snippets Accordions in Google Search
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the TokenWise Antigravity Extension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TokenWise is an official extension for Antigravity IDE that provides automatic, bounded Python repository context retrieval for coding agents. It prevents token waste by extracting exact code and test definitions locally on CPU without external API keys.",
          },
        },
        {
          "@type": "Question",
          name: "How do I install TokenWise in Antigravity IDE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Download the tokenwise-vscode-0.6.5.vsix file, open Antigravity Extensions (Ctrl+Shift+X), click the '...' menu, choose 'Install from VSIX...', select the downloaded file, and reload the window.",
          },
        },
        {
          "@type": "Question",
          name: "Does TokenWise require GPU, Ollama, or external API keys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. TokenWise runs 100% locally on CPU. It does not require a GPU, Ollama, external MCP servers, or API keys. Your Antigravity model billing remains completely separate.",
          },
        },
        {
          "@type": "Question",
          name: "What Python version is required for TokenWise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TokenWise requires a 64-bit Python 3.12 runtime. Python 3.13 or 3.14 alone is not sufficient for the current beta release.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

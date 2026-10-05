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

export const metadata: Metadata = {
  metadataBase: new URL("https://tokenwise-webapp.vercel.app"),
  title: {
    default: "TokenWise Antigravity Extension | Sustainable Context Optimization for Coding Agents",
    template: "%s | TokenWise Antigravity Extension",
  },
  description:
    "Official TokenWise extension for Antigravity IDE. Automatic, bounded Python repository context retrieval for coding agents without manual file selection or token waste. Runs 100% locally on CPU.",
  keywords: [
    "TokenWise",
    "TokenWise extension Antigravity",
    "TokenWise Antigravity",
    "TokenWise extension",
    "TokenWise Antigravity extension",
    "Antigravity extension",
    "Antigravity IDE",
    "Antigravity coding agent",
    "TokenWise VSIX",
    "Antigravity VSIX download",
    "Antigravity IDE extension",
    "context optimization",
    "token pruning",
    "sustainable AI",
    "Python repository context",
    "bounded context pruning",
    "Adnan Bin Wahid",
  ],
  authors: [{ name: "Adnan Bin Wahid", url: "https://github.com/adnan-bin-wahid" }],
  creator: "Adnan Bin Wahid",
  alternates: {
    canonical: "https://tokenwise-webapp.vercel.app",
  },
  openGraph: {
    title: "TokenWise Antigravity Extension | Sustainable Context Optimization for Coding Agents",
    description:
      "Official TokenWise extension for Antigravity IDE. Automatic, bounded Python repository context optimization for coding agents. Zero API keys, 100% local CPU.",
    url: "https://tokenwise-webapp.vercel.app",
    siteName: "TokenWise Antigravity Extension",
    images: [
      {
        url: "/tokenwise_logo.png",
        width: 1024,
        height: 1024,
        alt: "TokenWise Antigravity Extension Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TokenWise Antigravity Extension | Sustainable Context Optimization",
    description:
      "Automatic bounded context retrieval for Antigravity coding agents. Download the official TokenWise Antigravity extension (.vsix).",
    images: ["/tokenwise_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TokenWise Antigravity Extension",
  operatingSystem: "Windows, macOS, Linux",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "IDE Extension",
  description:
    "TokenWise is an official extension for the Antigravity IDE that provides automatic, bounded Python repository context optimization for coding agents.",
  url: "https://tokenwise-webapp.vercel.app",
  downloadUrl:
    "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/download/v0.6.3/tokenwise-vscode-0.6.3.vsix",
  softwareVersion: "0.6.3",
  releaseNotes: "https://github.com/adnan-bin-wahid/Tokenwise-updated/releases/tag/v0.6.3",
  author: {
    "@type": "Person",
    name: "Adnan Bin Wahid",
    url: "https://github.com/adnan-bin-wahid",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  keywords: "TokenWise, TokenWise extension Antigravity, Antigravity IDE, Python context optimization, coding agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

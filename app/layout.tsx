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
    default: "TokenWise - Sustainable Context Optimization for Coding Agents",
    template: "%s | TokenWise",
  },
  description:
    "TokenWise provides automatic, bounded Python repository context for Antigravity coding agents. No manual file picking, bounded token consumption, running 100% locally on CPU.",
  keywords: [
    "TokenWise",
    "Antigravity IDE",
    "Antigravity extension",
    "context optimization",
    "token pruning",
    "Python coding agent",
    "sustainable AI",
    "bounded context",
    "AST pruning",
    "VSIX download",
  ],
  authors: [{ name: "Adnan Bin Wahid" }],
  creator: "Adnan Bin Wahid",
  openGraph: {
    title: "TokenWise - Sustainable Context Optimization for Coding Agents",
    description:
      "Automatic, bounded Python repository context retrieval for Antigravity coding agents. Eliminate manual file selection and context waste.",
    url: "https://tokenwise-webapp.vercel.app",
    siteName: "TokenWise",
    images: [
      {
        url: "/tokenwise_white_hero.jpg",
        width: 1920,
        height: 1080,
        alt: "TokenWise Sustainable Context Optimization Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TokenWise - Sustainable Context Optimization for Coding Agents",
    description:
      "Automatic bounded context retrieval for Antigravity coding agents. Runs 100% locally on CPU without API keys.",
    images: ["/tokenwise_white_hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

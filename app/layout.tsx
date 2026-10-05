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
    default: "TokenWise - Prompt Cost Analyzer for VS Code",
    template: "%s | TokenWise",
  },
  description:
    "TokenWise helps developers count prompt tokens, compare LLM costs, and optimize selected text directly inside VS Code.",
  keywords: [
    "TokenWise",
    "VS Code extension",
    "token counter",
    "prompt optimizer",
    "LLM cost analyzer",
    "AI developer tools",
  ],
  authors: [{ name: "Adnan Bin Wahid" }],
  creator: "Adnan Bin Wahid",
  openGraph: {
    title: "TokenWise - Prompt Cost Analyzer for VS Code",
    description:
      "Analyze selected prompts, compare model costs, and rewrite token-heavy text without leaving the editor.",
    url: "https://tokenwise-webapp.vercel.app",
    siteName: "TokenWise",
    images: [
      {
        url: "/tokenwise_3d_hero_background.webp",
        width: 2400,
        height: 1400,
        alt: "TokenWise 3D prompt analysis interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TokenWise - Prompt Cost Analyzer for VS Code",
    description:
      "Live token counting, cost comparison, and one-click prompt optimization for VS Code.",
    images: ["/tokenwise_3d_hero_background.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06111f",
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

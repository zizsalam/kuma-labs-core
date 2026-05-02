import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import React from "react";
import "./globals.css";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  // --font-sans is the 08-04 variable; layout adds --font-inter for 08-02 components
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  // --font-mono is the 08-04 variable; --font-jbmono for 08-02 components
  // --font-jetbrains-mono is for the papercompute editorial homepage
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuma Labs — Voice ops for labor-constrained West Africa",
  description:
    "A reproducible benchmark of Wolof voice AI across Whisper, Gemini, and Google STT — 104 Senegalese voice samples, 22 documented failure modes. Evaluations and curated corpora for frontier labs and voice-product teams.",
  openGraph: {
    title: "Kuma Labs — Voice ops for labor-constrained West Africa",
    description:
      "A reproducible benchmark of Wolof voice AI across Whisper, Gemini, and Google STT — 104 Senegalese voice samples, 22 documented failure modes. Evaluations and curated corpora for frontier labs and voice-product teams.",
    type: "website",
    url: "https://www.kuma-labs.com/",
    images: [
      {
        url: "https://www.kuma-labs.com/og/home-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Kuma Labs — voice ops for labor-constrained West Africa.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuma Labs — Voice ops for labor-constrained West Africa",
    description:
      "A reproducible benchmark of Wolof voice AI. Evaluations, curated corpora, and integration primitives for frontier labs and voice-product teams.",
    images: ["https://www.kuma-labs.com/og/home-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased flex flex-col min-h-screen bg-paper-bg`}
        style={{
          // Expose aliases for 08-02 component compatibility
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ["--font-inter" as any]: "var(--font-sans)",
          ["--font-jbmono" as any]: "var(--font-mono)",
          // Expose --font-jetbrains-mono for papercompute components
          ["--font-jetbrains-mono" as any]: "var(--font-mono)",
        } as React.CSSProperties}
      >
        <SiteNav />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

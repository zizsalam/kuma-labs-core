import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuma Labs — Voice ops for West Africa",
  description:
    "One API call turns spoken Wolof or French into structured merchant-transaction data. Voice infrastructure for financial apps serving informal merchants.",
  openGraph: {
    title: "Kuma Labs — Voice ops for West Africa",
    description:
      "One API call turns spoken Wolof or French into structured merchant-transaction data.",
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
    title: "Kuma Labs — Voice ops for West Africa",
    description:
      "One API call turns spoken Wolof or French into structured merchant-transaction data.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} bg-kuma-bg font-sans text-kuma-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

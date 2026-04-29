import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "kuma-bg":             "#FAFAF7",
        "kuma-white":          "#FFFFFF",
        "kuma-accent":         "#E8C547",
        "kuma-destructive":    "#DC2626",
        "kuma-text-primary":   "#0F172A",
        "kuma-text-secondary": "#475569",
        "kuma-text-muted":     "#64748B",
        "kuma-border":         "#E2E8F0",
        "kuma-border-focus":   "#E8C547",
        "kuma-tint-remittance":"#E8C547",
        "kuma-tint-bnpl":      "#D97706",
        "kuma-tint-merchant":  "#F59E0B",
        "kuma-tint-agri":      "#A3A847",
        "kuma-tint-kyc":       "#B45309",
        "kuma-json-key":       "#0369A1",
        "kuma-json-string":    "#15803D",
        "kuma-json-number":    "#B45309",
        "kuma-json-null":      "#7C3AED",
      },
      spacing: {
        xs:    "4px",
        sm:    "8px",
        md:    "16px",
        lg:    "24px",
        xl:    "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      fontSize: {
        body:    ["16px", { lineHeight: "1.5" }],
        label:   ["14px", { lineHeight: "1.43", fontWeight: "600" }],
        heading: ["24px", { lineHeight: "1.25", fontWeight: "600" }],
        display: ["40px", { lineHeight: "1.1",  fontWeight: "600" }],
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        md: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

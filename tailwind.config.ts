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
        // ── papercompute editorial tokens (homepage, cream ground) ──
        "paper-bg":            "#F2EBDF",
        "paper-ink":           "#1A1A1A",
        "paper-ink-mid":       "rgba(26,26,26,0.62)",
        "paper-ink-light":     "rgba(26,26,26,0.40)",
        "paper-rule":          "rgba(26,26,26,0.12)",
        "paper-accent":        "#1D9E75",
        // ── gold/Inter tokens (demos hub — do not remove) ──────────
        "kuma-bg":             "#FAFAF7",
        "kuma-surface":        "#FFFFFF",
        "kuma-white":          "#FFFFFF",
        "kuma-accent":         "#E8C547",
        "kuma-destructive":    "#DC2626",
        "kuma-text-primary":   "#0F172A",
        "kuma-text-secondary": "#475569",
        "kuma-text-muted":     "#64748B",
        "kuma-border":         "#E2E8F0",
        "kuma-border-focus":   "#E8C547",
        // Per-vertical tints (08-04 names preserved + 08-02 alias names added)
        "kuma-tint-remittance":"#E8C547",
        "kuma-tint-bnpl":      "#D97706",
        "kuma-tint-merchant":  "#F59E0B",
        "kuma-tint-agri":      "#A3A847",
        "kuma-tint-kyc":       "#B45309",
        // Per-vertical tints by 08-02 plan names (amber/honey/olive/bronze)
        "kuma-tint-amber":     "#D97706",
        "kuma-tint-honey":     "#F59E0B",
        "kuma-tint-olive":     "#A3A847",
        "kuma-tint-bronze":    "#B45309",
        // JSON viewer syntax colors (kuma-prefixed names from 08-04)
        "kuma-json-key":       "#0369A1",
        "kuma-json-string":    "#15803D",
        "kuma-json-number":    "#B45309",
        "kuma-json-null":      "#7C3AED",
        // JSON viewer syntax colors (un-prefixed for component use per plan)
        "json-key":            "#0369A1",
        "json-string":         "#15803D",
        "json-number":         "#B45309",
        "json-null":           "#7C3AED",
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
        // Instrument Serif — papercompute editorial homepage
        serif: ["var(--font-instrument-serif)", "Georgia", "Times New Roman", "serif"],
        // --font-inter is the alias set in 08-02 plan; --font-sans is from 08-04 layout.tsx
        sans: ["var(--font-inter)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        // JetBrains Mono — shared across paper + demos
        // --font-jbmono is the alias set in 08-02 plan; --font-mono is from 08-04 layout.tsx
        mono: ["var(--font-jetbrains-mono)", "var(--font-jbmono)", "var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
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

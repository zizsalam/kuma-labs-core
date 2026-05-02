// LiveExample — 3-card layout: input → Whisper failure → Kuma fix.
// "Sample" not "Live" — we don't call a real API from the homepage.
// Mounted between DeremCardSection and HeadlineChartSection.

"use client";

import Link from "next/link";
import { useReveal } from "@/lib/hooks/useReveal";

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "inherit", // JetBrains Mono via font-mono class applied on wrapper
  fontSize: "0.78rem",
  color: "rgba(26,26,26,0.55)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  marginBottom: "0.6rem",
};

const PHRASE_STYLE: React.CSSProperties = {
  fontStyle: "italic",
  fontSize: "1.15rem",
  color: "#1A1A1A",
  lineHeight: 1.45,
  marginBottom: "0.5rem",
};

const ANNOTATION_STYLE: React.CSSProperties = {
  fontSize: "0.85rem",
  color: "rgba(26,26,26,0.62)",
  lineHeight: 1.5,
  marginBottom: "0.5rem",
};

const VERDICT_FAIL_STYLE: React.CSSProperties = {
  fontSize: "0.85rem",
  color: "#A04040",
  lineHeight: 1.5,
};

const VERDICT_PASS_STYLE: React.CSSProperties = {
  fontSize: "0.85rem",
  color: "#1D9E75",
  lineHeight: 1.5,
};

export function LiveExample() {
  const { ref: rowRef, revealed } = useReveal<HTMLDivElement>(0.12);

  return (
    <section
      style={{
        padding: "5.5rem 0",
        borderTop: "1px solid rgba(26,26,26,0.10)",
        background: "#F2EBDF",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "960px" }}>
        {/* Section heading */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-3"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.4rem)",
            lineHeight: "1.2",
          }}
        >
          Sample: a single utterance, the failure, the fix.
        </h2>
        <p
          className="font-serif mb-8"
          style={{
            fontSize: "0.95rem",
            fontStyle: "italic",
            color: "rgba(26,26,26,0.62)",
            lineHeight: 1.6,
            maxWidth: "60ch",
          }}
        >
          Pulled from the 104-sample corpus. Whisper hears the number; the
          dërëm &times; 5 conversion never fires. Kuma&apos;s parser surfaces
          both interpretations and asks for confirmation.
        </p>

        {/* Row 1 — Input card, full width */}
        <div
          ref={rowRef}
          style={{ display: "flex", flexDirection: "column", gap: "0" }}
        >
          <div
            className={`paper-card reveal-target${revealed ? " is-revealed" : ""}`}
            style={{
              padding: "24px",
              marginBottom: "0",
              transitionDelay: "0ms",
            }}
          >
            <div className="font-mono" style={LABEL_STYLE}>
              Sample &nbsp;·&nbsp; payment-UTT-005 &nbsp;·&nbsp; Wolof voice
            </div>
            <div className="font-serif" style={PHRASE_STYLE}>
              &ldquo;Awa jënd na ñaar junni&rdquo;
            </div>
            <div className="font-mono" style={{ ...ANNOTATION_STYLE, marginBottom: 0 }}>
              Original utterance · payment context
            </div>
          </div>

          {/* Connector row 1 → 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 0",
              gap: "0",
            }}
          >
            {/* Desktop: side-by-side arrows; Mobile: down arrow */}
            <div
              className="hidden sm:flex"
              style={{
                flex: 1,
                justifyContent: "center",
                fontSize: "1.25rem",
                color: "rgba(26,26,26,0.35)",
              }}
            >
              <span
                style={{
                  animation: "kuma-pulse 2s ease-in-out infinite",
                }}
              >
                &darr;
              </span>
            </div>
            <div
              className="sm:hidden"
              style={{
                fontSize: "1.25rem",
                color: "rgba(26,26,26,0.35)",
                padding: "4px 0",
              }}
            >
              &#8595;
            </div>
          </div>

          {/* Row 2 — Whisper + Kuma side by side (desktop) / stacked (mobile) */}
          <div
            style={{
              display: "flex",
              gap: "0",
              flexWrap: "wrap" as const,
              alignItems: "stretch",
            }}
          >
            {/* Card 2 — Whisper failure */}
            <div
              className={`paper-card reveal-target${revealed ? " is-revealed" : ""}`}
              style={{
                padding: "24px",
                flex: 1,
                minWidth: "260px",
                transitionDelay: "100ms",
              }}
            >
              <div className="font-mono" style={LABEL_STYLE}>
                Whisper gpt-4o-transcribe &nbsp;·&nbsp; raw output
              </div>
              <div className="font-serif" style={PHRASE_STYLE}>
                &ldquo;Awa jënd na ñaar junni.&rdquo;
              </div>
              <div className="font-mono" style={ANNOTATION_STYLE}>
                WER 0.0 &nbsp;·&nbsp; numeral parsed as 1,000 (&times;5 short)
                &nbsp;·&nbsp; expected 2,000 CFA
              </div>
              <div className="font-mono" style={VERDICT_FAIL_STYLE}>
                &times; Numeral underflow &mdash; the dërëm gap
              </div>
            </div>

            {/* Connector card 2 → 3 */}
            <div
              style={{
                padding: "0 16px",
                fontSize: "1.25rem",
                lineHeight: 1,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                color: "rgba(26,26,26,0.35)",
              }}
            >
              <span className="hidden sm:inline" style={{ animation: "kuma-pulse 2s ease-in-out infinite" }}>&rarr;</span>
              <span className="sm:hidden" style={{ display: "block" }}>&#8595;</span>
            </div>

            {/* Card 3 — Kuma fix */}
            <div
              className={`paper-card reveal-target${revealed ? " is-revealed" : ""}`}
              style={{
                padding: "24px",
                flex: 1,
                minWidth: "260px",
                transitionDelay: "200ms",
                borderLeft: "3px solid #1D9E75",
              }}
            >
              <div className="font-mono" style={LABEL_STYLE}>
                Kuma stack &nbsp;·&nbsp; processed
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  color: "#1A1A1A",
                  marginBottom: "0.5rem",
                  background: "rgba(26,26,26,0.04)",
                  borderRadius: "4px",
                  padding: "10px 12px",
                }}
              >
                amount: 10,000 XOF (implicit dërëm — confidence 0.6)<br />
                alt: 2,000 XOF (direct CFA — confidence 0.4)<br />
                needs_confirmation: true
              </div>
              <div className="font-mono" style={VERDICT_PASS_STYLE}>
                &#10003; Both interpretations surfaced &mdash; flagged for confirmation
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes kuma-pulse {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.75; }
          }
        `}</style>

        {/* CTA */}
        <div style={{ marginTop: "1.75rem" }}>
          <Link
            href="/research/state-of-wolof-voice-ai-2026.html#s5"
            className="font-mono transition-colors"
            style={{
              fontSize: "0.85rem",
              color: "#1A1A1A",
              textDecoration: "none",
              borderBottom: "1px solid #1D9E75",
              paddingBottom: "1px",
            }}
          >
            See all 22 numbered failures &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

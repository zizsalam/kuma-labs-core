// LiveExample — "model → transcript + verdict" two-card layout.
// Reframes legacy demo section to show a real corpus failure: the dërëm gap.
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

const VERDICT_STYLE: React.CSSProperties = {
  fontSize: "0.85rem",
  color: "#A04040",
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
          Live: a single sample, six systems, the same gap.
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
          Pulled from the 104-sample corpus. Every system hears the number; none
          applies the dërëm &times; 5 conversion.
        </p>

        {/* Two-card layout with connector */}
        <div
          ref={rowRef}
          style={{
            display: "flex",
            gap: "0",
            flexWrap: "wrap" as const,
            alignItems: "center",
          }}
        >
          {/* Card A — input */}
          <div
            className={`paper-card reveal-target${revealed ? " is-revealed" : ""}`}
            style={{
              padding: "24px",
              flex: 1,
              minWidth: "260px",
              transitionDelay: "0ms",
            }}
          >
            <div className="font-mono" style={LABEL_STYLE}>
              Live &nbsp;·&nbsp; Whisper gpt-4o-transcribe
              <br />
              Wolof sample &middot; payment-UTT-005
            </div>
            <div className="font-serif" style={PHRASE_STYLE}>
              &ldquo;Awa jënd na ñaar junni&rdquo;
            </div>
            <div className="font-mono" style={{ ...ANNOTATION_STYLE, marginBottom: 0 }}>
              Original utterance · payment context
            </div>
          </div>

          {/* Connector — arrow on desktop, chevron on mobile */}
          <div
            className="connector"
            style={{
              padding: "0 16px",
              fontSize: "1.25rem",
              lineHeight: 1,
              flexShrink: 0,
              textAlign: "center" as const,
              width: "56px",
            }}
          >
            {/* Desktop: → / Mobile (via media query workaround): handled below */}
            <span className="hidden sm:inline">&rarr;</span>
            <span className="sm:hidden" style={{ display: "block" }}>&#8595;</span>
          </div>

          {/* Card B — output + verdict */}
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
              Transcript out
            </div>
            <div className="font-serif" style={PHRASE_STYLE}>
              &ldquo;Awa jënd na ñaar junni.&rdquo;
            </div>
            <div className="font-mono" style={ANNOTATION_STYLE}>
              WER 0.0 &nbsp;·&nbsp; numeral parsed as 1,000 (&times;5 short)
              &nbsp;·&nbsp; expected 2,000 CFA
            </div>
            <div className="font-mono" style={VERDICT_STYLE}>
              &times; Numeral underflow &mdash; the dërëm gap
            </div>
          </div>
        </div>

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

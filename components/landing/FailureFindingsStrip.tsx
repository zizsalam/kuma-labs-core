"use client";

import { useReveal } from "@/lib/hooks/useReveal";

const findings = [
  {
    title: "Whisper-1 echoes the prompt on near-silent Wolof audio",
    elaboration:
      "When input is ambient-noise or silence, Whisper-1 reproduces its own system prompt verbatim rather than returning an empty transcript.",
    href: "/research/state-of-wolof-voice-ai-2026.html#cat-prompt",
  },
  {
    title: "Chirp 2 silently accepts wo-SN and returns garbage",
    elaboration:
      "Google STT Chirp 2 accepts the Wolof locale code without error, then returns incoherent output on native Wolof speech — no failure signal surfaced.",
    href: "/research/state-of-wolof-voice-ai-2026.html#cat-language",
  },
  {
    title: "Intent recall: 43% corpus-faithful · 73% schema-restricted",
    elaboration:
      "Without a restricted schema, intent extraction drops to 43% on real Wolof utterances. Schema constraints lift that to 73% — the difference is the ops layer.",
    href: "/research/state-of-wolof-voice-ai-2026.html#cat-intent",
  },
  {
    title: "The dërëm convention: same numeral, two amounts, same language",
    elaboration:
      "A bare Wolof numeral can refer to CFA francs or to dërëm units (1 dërëm = 5 CFA). No commercial ASR resolves this disambiguation by default.",
    href: "/research/state-of-wolof-voice-ai-2026.html#cat-numeral",
  },
];

const STAGGER_DELAYS = [0, 200, 400, 600];

export function FailureFindingsStrip() {
  const { ref: gridRef, revealed } = useReveal<HTMLDivElement>(0.10);

  return (
    <section
      className="bg-paper-bg"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(26,26,26,0.10)",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "960px" }}>
        {/* Section header */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-3"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
            lineHeight: "1.1",
          }}
        >
          Specific failures, named.
        </h2>
        <p
          className="font-serif mb-10"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "56ch",
          }}
        >
          Every finding in the benchmark cites the model and the failure mode by
          name.
        </p>

        {/* 2-column card grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {findings.map((finding, i) => (
            <a
              key={i}
              href={finding.href}
              className={`paper-card reveal-target block${revealed ? " is-revealed" : ""}`}
              style={{
                padding: "24px",
                textDecoration: "none",
                transitionDelay: `${STAGGER_DELAYS[i]}ms`,
              }}
            >
              <div
                className="font-serif text-paper-ink mb-3"
                style={{ fontSize: "1.05rem", lineHeight: "1.35" }}
              >
                &ldquo;{finding.title}&rdquo;
              </div>
              <div
                className="font-serif"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  color: "rgba(26,26,26,0.62)",
                }}
              >
                {finding.elaboration}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

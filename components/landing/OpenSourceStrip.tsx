"use client";

import { useReveal } from "@/lib/hooks/useReveal";

const modules = [
  {
    name: "wolof-numbers",
    license: "Apache-2.0",
    venue: "PyPI",
    description:
      "1 to 1 billion. CFA / dërëm / loanword handling. Compound forms, genitive constructions, the dërëm convention.",
    href: "https://pypi.org/project/wolof-numbers/",
  },
  {
    name: "wolof-ner",
    license: "source-available",
    venue: "in progress",
    description:
      "Named-entity recognition tuned for Wolof voice transcripts: person names, place names, financial terms.",
    href: "https://github.com/zizsalam/kuma-labs/tree/main/packages/wolof-ner",
  },
  {
    name: "state-of-wolof-2026 harness",
    license: "Apache-2.0",
    venue: "GitHub",
    description:
      "The eval harness reproducing every table in the report. 104-sample matrix, 6 system configurations, reproducible from source.",
    href: "https://github.com/zizsalam/kuma-labs/tree/main/scripts/eval/state_of_wolof_2026",
  },
];

const STAGGER_DELAYS = [0, 200, 400];

export function OpenSourceStrip() {
  const { ref: listRef, revealed } = useReveal<HTMLDivElement>(0.10);

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
          Show, don&apos;t claim.
        </h2>
        <p
          className="font-serif mb-10"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "52ch",
          }}
        >
          The moat is open-source. Use it, fork it, run it on your own data.
        </p>

        {/* Module rows */}
        <div ref={listRef} className="flex flex-col gap-4">
          {modules.map((mod, i) => (
            <a
              key={i}
              href={mod.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`paper-card reveal-target group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6${revealed ? " is-revealed" : ""}`}
              style={{
                padding: "20px 24px",
                textDecoration: "none",
                transitionDelay: `${STAGGER_DELAYS[i]}ms`,
              }}
            >
              {/* Left col: name + license */}
              <div
                className="flex-shrink-0"
                style={{ minWidth: "240px" }}
              >
                <div
                  className="font-mono text-paper-ink"
                  style={{ fontSize: "0.93rem", lineHeight: "1.3", marginBottom: "4px" }}
                >
                  {mod.name}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "0.74rem",
                    color: "rgba(26,26,26,0.40)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {mod.license} &middot; {mod.venue}
                </div>
              </div>

              {/* Right col: description */}
              <div
                className="font-serif"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  color: "rgba(26,26,26,0.62)",
                  flex: 1,
                }}
              >
                {mod.description}
              </div>

              {/* External link marker */}
              <div
                className="flex-shrink-0 font-mono self-center"
                style={{ fontSize: "0.8rem", color: "#1D9E75" }}
              >
                &nearr;
              </div>
            </a>
          ))}
        </div>

        <p
          className="font-serif italic text-paper-ink-mid"
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.5",
            marginTop: "2.5rem",
            textAlign: "center",
            color: "rgba(26,26,26,0.55)",
          }}
        >
          Built from real-world mobile money and field operations in Senegal.
        </p>
      </div>
    </section>
  );
}

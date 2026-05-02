"use client";

import { useReveal } from "@/lib/hooks/useReveal";

export function DeremCardSection() {
  const { ref: sectionRef, revealed } = useReveal<HTMLDivElement>(0.12);

  return (
    <section className="bg-paper-bg" style={{ padding: "5.5rem 0" }}>
      <div className="max-w-[720px] mx-auto px-6">
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-[1.8rem]"
          style={{ fontSize: "clamp(2.1rem, 3.9vw, 3.3rem)", lineHeight: "1.08", maxWidth: "22ch" }}
        >
          The same number word can mean two different amounts.
        </h2>

        <p className="font-serif text-paper-ink" style={{ lineHeight: "1.6", marginBottom: "1.1em" }}>
          Senegalese market merchants quote prices in <em>dërëm</em> without
          saying the word.{" "}
          <code
            className="font-mono"
            style={{ fontSize: "0.86em", letterSpacing: "-0.01em" }}
          >
            &quot;ñaar junni&quot;
          </code>{" "}
          can mean 2,000 CFA (direct reading) or 2,000 dërëm = 10,000 CFA
          (implicit-dërëm reading, Guérin 2021 §2.6). There is no universally
          correct default.
        </p>

        <p className="font-serif text-paper-ink" style={{ lineHeight: "1.6", marginBottom: "2.5em" }}>
          Our parser returns both interpretations and flags the field for human
          confirmation. This is a core design decision, not a bug.
        </p>

        {/* Disambiguation card — paper-card-tech for mono content contrast */}
        <div
          ref={sectionRef}
          className="paper-card-tech"
          style={{
            margin: "2.5rem 0",
            padding: "1.7rem 1.9rem",
          }}
        >
          {/* Row 1 */}
          <div
            className={`derem-block${revealed ? " is-revealed" : ""}`}
            style={{
              padding: "0.4rem 0 1.1rem",
              borderBottom: "1px solid rgba(26,26,26,0.10)",
              transitionDelay: "0ms",
            }}
          >
            <div className="font-mono kl mb-2">
              Ambiguous · bare commerce numeral
            </div>
            <div className="font-mono text-[0.95rem] text-paper-ink mb-[0.55rem]">
              &quot;ñaar junni&quot;
            </div>
            <div className="font-mono text-[0.85rem]" style={{ lineHeight: "1.75" }}>
              <span className="derem-line" style={{ transitionDelay: "80ms" }}>
                <span className="kn">amount</span>:{" "}
                <span className="knum">10,000</span>{" "}
                <span className="ks">XOF</span>{" "}
                <span className="kc">(implicit dërëm — confidence 0.6)</span>
              </span>
              <span className="derem-line" style={{ transitionDelay: "140ms" }}>
                <span className="kn">alt</span>:{" "}
                <span className="knum">2,000</span>{" "}
                <span className="ks">XOF</span>{" "}
                <span className="kc">(direct CFA — confidence 0.4)</span>
              </span>
              <span className="derem-line" style={{ transitionDelay: "200ms" }}>
                <span className="kn">needs_confirmation</span>:{" "}
                <span className="kb">true</span>
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className={`derem-block${revealed ? " is-revealed" : ""}`}
            style={{
              padding: "1.1rem 0",
              borderBottom: "1px solid rgba(26,26,26,0.10)",
              transitionDelay: "250ms",
            }}
          >
            <div className="font-mono kl mb-2">
              Explicit dërëm · unambiguous
            </div>
            <div className="font-mono text-[0.95rem] text-paper-ink mb-[0.55rem]">
              &quot;dërëm fukk&quot;
            </div>
            <div className="font-mono text-[0.85rem]" style={{ lineHeight: "1.75" }}>
              <span className="derem-line" style={{ transitionDelay: "330ms" }}>
                <span className="kn">amount</span>:{" "}
                <span className="knum">50</span>{" "}
                <span className="ks">XOF</span>{" "}
                <span className="kc">(10 dërëm × 5 — confidence 1.0)</span>
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div
            className={`derem-block${revealed ? " is-revealed" : ""}`}
            style={{
              padding: "1.1rem 0 0.4rem",
              transitionDelay: "500ms",
            }}
          >
            <div className="font-mono kl mb-2">
              Explicit unit marker · unambiguous
            </div>
            <div className="font-mono text-[0.95rem] text-paper-ink mb-[0.55rem]">
              &quot;téeméer francs&quot;
            </div>
            <div className="font-mono text-[0.85rem]" style={{ lineHeight: "1.75" }}>
              <span className="derem-line" style={{ transitionDelay: "580ms" }}>
                <span className="kn">amount</span>:{" "}
                <span className="knum">100</span>{" "}
                <span className="ks">XOF</span>{" "}
                <span className="kc">(direct CFA locked by &quot;francs&quot; — confidence 1.0)</span>
              </span>
            </div>
          </div>
        </div>

        <p className="font-serif text-paper-ink" style={{ lineHeight: "1.6" }}>
          This is what the Wolof number parser does. Open-sourced on PyPI as{" "}
          <code
            className="font-mono"
            style={{ fontSize: "0.86em", letterSpacing: "-0.01em" }}
          >
            wolof-numbers
          </code>{" "}
          — covers compound forms, genitive constructions, the loanword
          boundary, and the dërëm convention from 1 to 1 billion. It exists
          because no commercial ASR resolves any of this on its own.{" "}
          <a
            href="/research/state-of-wolof-voice-ai-2026.html#s5"
            className="text-paper-ink transition-colors"
            style={{ borderBottom: "1px solid #1D9E75", textDecoration: "none" }}
          >
            Full treatment in the report (Failure 7)
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function DeremCardSection() {
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

        {/* Disambiguation card */}
        <div
          style={{
            margin: "2.5rem 0",
            padding: "1.7rem 1.9rem",
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(26,26,26,0.12)",
            borderRadius: "3px",
          }}
        >
          {/* Row 1 */}
          <div
            style={{
              padding: "0.4rem 0 1.1rem",
              borderBottom: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            <div
              className="font-mono text-[0.7rem] tracking-[0.06em] uppercase mb-2"
              style={{ color: "rgba(26,26,26,0.40)" }}
            >
              Ambiguous · bare commerce numeral
            </div>
            <div
              className="font-mono text-[0.95rem] text-paper-ink mb-[0.55rem]"
            >
              &quot;ñaar junni&quot;
            </div>
            <div
              className="font-mono text-[0.85rem]"
              style={{ color: "rgba(26,26,26,0.62)", lineHeight: "1.75" }}
            >
              amount: <strong className="text-paper-ink font-medium">10,000</strong> XOF{" "}
              <span style={{ color: "rgba(26,26,26,0.40)" }}>(implicit dërëm — confidence 0.6)</span>
              <br />
              alt: <strong className="text-paper-ink font-medium">2,000</strong> XOF{" "}
              <span style={{ color: "rgba(26,26,26,0.40)" }}>(direct CFA — confidence 0.4)</span>
              <br />
              <span style={{ color: "#1D9E75" }}>needs_confirmation: true</span>
            </div>
          </div>

          {/* Row 2 */}
          <div
            style={{
              padding: "1.1rem 0",
              borderBottom: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            <div
              className="font-mono text-[0.7rem] tracking-[0.06em] uppercase mb-2"
              style={{ color: "rgba(26,26,26,0.40)" }}
            >
              Explicit dërëm · unambiguous
            </div>
            <div
              className="font-mono text-[0.95rem] text-paper-ink mb-[0.55rem]"
            >
              &quot;dërëm fukk&quot;
            </div>
            <div
              className="font-mono text-[0.85rem]"
              style={{ color: "rgba(26,26,26,0.62)", lineHeight: "1.75" }}
            >
              amount: <strong className="text-paper-ink font-medium">50</strong> XOF{" "}
              <span style={{ color: "rgba(26,26,26,0.40)" }}>(10 dërëm × 5 — confidence 1.0)</span>
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ padding: "1.1rem 0 0.4rem" }}>
            <div
              className="font-mono text-[0.7rem] tracking-[0.06em] uppercase mb-2"
              style={{ color: "rgba(26,26,26,0.40)" }}
            >
              Explicit unit marker · unambiguous
            </div>
            <div
              className="font-mono text-[0.95rem] text-paper-ink mb-[0.55rem]"
            >
              &quot;téeméer francs&quot;
            </div>
            <div
              className="font-mono text-[0.85rem]"
              style={{ color: "rgba(26,26,26,0.62)", lineHeight: "1.75" }}
            >
              amount: <strong className="text-paper-ink font-medium">100</strong> XOF{" "}
              <span style={{ color: "rgba(26,26,26,0.40)" }}>(direct CFA locked by &quot;francs&quot; — confidence 1.0)</span>
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

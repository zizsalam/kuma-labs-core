export function InsightSection() {
  return (
    <section
      className="bg-paper-bg"
      style={{ padding: "5.5rem 0" }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-[1.8rem]"
          style={{
            fontSize: "clamp(2.1rem, 3.9vw, 3.3rem)",
            lineHeight: "1.08",
            maxWidth: "22ch",
          }}
        >
          Talking is faster. At high transaction volumes, typing becomes a throughput ceiling.
        </h2>

        <p
          className="font-serif text-paper-ink"
          style={{ lineHeight: "1.6", marginBottom: "1.1em" }}
        >
          Wolof is spoken by 12 million people across Senegal, Gambia, and Mauritania, almost always code-switched with French. It is also a language no commercial ASR ships production-ready: every benchmarked system fails on numerals, code-switching, and the silent prompt-echo failure mode we documented.
        </p>

        <p
          className="font-serif text-paper-ink"
          style={{ lineHeight: "1.6", marginBottom: "1.1em" }}
        >
          Frontier labs and voice-product teams shipping Wolof and French code-switched voice come to Kuma for three things: a reproducible benchmark to measure their model against, a curated Wolof corpus tuned for production conditions, and the engineering primitives — wolof-numbers, wolof-ner, dërëm parsing — that fix the failure modes raw ASR cannot.
        </p>

        <p
          className="font-serif text-paper-ink"
          style={{ lineHeight: "1.6", marginBottom: "1.1em" }}
        >
          We constrain outputs, validate numerics, and enforce schema before results reach production systems. WER measures whether you got the words; we measure whether you got the transaction. With structured output and schema validation, the right metric is intent recall — and the gap there is <strong>43% raw vs 73% with our ops layer</strong>.
        </p>

        <p
          className="font-serif italic"
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.55",
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(26,26,26,0.12)",
            color: "rgba(26,26,26,0.62)",
          }}
        >
          Field-tested. We pitched two Senegalese MFIs in March 2026; both said no. Six weeks of conversation taught us the operator-led wedge wasn&apos;t the moat — the lab-grade evaluation work is.
        </p>
      </div>
    </section>
  );
}

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
          For a fintech field agent, an agri-extension worker, or a merchant
          logging thirty transactions a day, the keyboard isn&apos;t friction —
          it&apos;s a throughput ceiling. Voice removes it. But only if the
          voice layer actually works in Wolof, which is where most production
          stacks quietly fail.
        </p>

        <p
          className="font-serif text-paper-ink"
          style={{ lineHeight: "1.6", marginBottom: "1.1em" }}
        >
          Kuma is the ops layer you bolt on top of a commercial ASR so its
          failure modes don&apos;t reach your ledger. Built specifically for
          labor-constrained operators at scale across Wolof-speaking West Africa.
        </p>

        <p
          className="font-serif text-paper-ink"
          style={{ lineHeight: "1.6", marginBottom: "1.1em" }}
        >
          We constrain outputs, validate numerics, and enforce schema before results reach production systems.
        </p>
      </div>
    </section>
  );
}

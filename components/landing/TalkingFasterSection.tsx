export function TalkingFasterSection() {
  const stats = [
    {
      num: "50",
      label: "Senegalese voice samples benchmarked across 5 provider configurations",
    },
    {
      num: "20",
      label:
        "documented production failure modes with audio and downstream impact",
    },
    {
      num: "4",
      label:
        "metrics per row — WER, numeral accuracy, intent, code-switch preservation",
    },
    {
      num: "CC-BY",
      label: "corpus + Apache-2.0 harness — reproducible end-to-end",
    },
  ];

  return (
    <section className="bg-kuma-bg py-3xl">
      <div className="max-w-5xl mx-auto px-md">
        <div className="grid grid-cols-1 gap-xl md:grid-cols-2 md:gap-2xl items-start">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
              The insight
            </p>
            <h2 className="text-heading font-semibold text-kuma-text-primary mb-md leading-tight">
              Talking is faster. Typing is the bottleneck.
            </h2>
            <p className="text-body text-kuma-text-secondary leading-relaxed">
              For a fintech field agent, an agri-extension worker, or a merchant
              logging thirty transactions a day, the keyboard isn&apos;t friction
              — it&apos;s a throughput ceiling. Voice removes it. But only if the
              voice layer actually works in Wolof.
            </p>
            <p className="mt-md text-body text-kuma-text-secondary leading-relaxed">
              Kuma is what you bolt on top of a commercial ASR so the
              ASR&apos;s failure modes don&apos;t reach your ledger. Built
              specifically for labor-constrained West African operators at scale.
            </p>
          </div>

          {/* Right: stats */}
          <div className="flex flex-col gap-lg">
            {stats.map(({ num, label }) => (
              <div
                key={num}
                className="flex items-start gap-md border-l-2 border-kuma-accent pl-md"
              >
                <span className="text-2xl font-bold text-kuma-text-primary font-mono flex-shrink-0 min-w-[3rem]">
                  {num}
                </span>
                <span className="text-sm text-kuma-text-secondary leading-5">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ROADMAP_PHASES = [
  {
    when: "NOW",
    title: "State of Wolof Voice AI 2026",
    body: "Public benchmark across Whisper, Gemini, and Google STT on 50 Senegalese voice samples. 20-failure catalogue. Open corpus + harness. Research is the trust cost we pay up front.",
    tag: "Published",
    active: true,
  },
  {
    when: "NEXT",
    title: "Open-source primitives",
    body: "wolof-numbers (live on PyPI) and wolof-ner (shipping soon) — the parsers that turn ASR output into structured fields. Anyone can build on top of these.",
    tag: "In progress",
    active: false,
  },
  {
    when: "THEN",
    title: "The ops layer",
    body: "The full Kuma stack — language router, number parser, intent classifier, validator, HITL — as a product. Labor-constrained operators ship voice UX that works.",
    tag: "Pilots open",
    active: false,
  },
];

export function ResearchCalloutSection() {
  return (
    <section className="bg-white py-3xl" id="roadmap">
      <div className="max-w-5xl mx-auto px-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
          Roadmap
        </p>
        <h2 className="text-heading font-semibold text-kuma-text-primary mb-sm leading-tight">
          Research first. Product on top.
        </h2>
        <p className="text-body text-kuma-text-secondary leading-relaxed mb-2xl max-w-2xl">
          We publish the benchmarks, we open-source the primitives, we ship the
          ops layer. Each piece makes the next one credible.
        </p>

        {/* Roadmap phases */}
        <div className="grid grid-cols-1 gap-lg sm:grid-cols-3 mb-3xl">
          {ROADMAP_PHASES.map(({ when, title, body, tag, active }) => (
            <div
              key={when}
              className={`rounded-md border p-lg ${
                active
                  ? "border-kuma-accent bg-kuma-bg"
                  : "border-kuma-border bg-white"
              }`}
            >
              <p className="text-xs font-mono font-semibold text-kuma-text-muted mb-sm">
                {when}
              </p>
              <h3 className="text-base font-semibold text-kuma-text-primary mb-xs">
                {title}
              </h3>
              <p className="text-sm text-kuma-text-secondary leading-5 mb-md">
                {body}
              </p>
              <span
                className={`text-xs font-semibold border rounded px-sm py-xs ${
                  active
                    ? "border-kuma-accent bg-kuma-accent text-kuma-text-primary"
                    : "border-kuma-border text-kuma-text-muted"
                }`}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Big CTA card */}
        <div className="rounded-md border border-kuma-border bg-kuma-bg p-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
            Get started
          </p>
          <h2 className="text-heading font-semibold text-kuma-text-primary mb-sm leading-tight">
            Start with the report.
            <br />
            Then tell us your numbers.
          </h2>
          <p className="text-body text-kuma-text-secondary leading-relaxed mb-xl max-w-xl mx-auto">
            If you&apos;re running voice-captured ops at scale in Wolof-speaking
            West Africa and the throughput matters, we&apos;d like to hear what
            yours looks like today. First five partner conversations after
            publication get 90 days of free integration support on their own
            corpus.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <a
              href="/research/state-of-wolof-voice-ai-2026.html"
              className="bg-kuma-accent text-kuma-text-primary px-xl py-sm font-semibold rounded-md hover:brightness-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
            >
              Read the full report →
            </a>
            <a
              href="mailto:hello@kumalabs.ai"
              className="border border-kuma-border text-kuma-text-primary px-xl py-sm font-semibold rounded-md hover:border-kuma-border-focus transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

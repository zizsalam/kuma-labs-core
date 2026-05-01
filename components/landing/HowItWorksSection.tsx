const STEPS = [
  {
    num: "01",
    title: "Push to talk",
    body: "One tap. The merchant speaks naturally in Wolof, French, or a mix — exactly how they talk in the market.",
    code: "audio capture → base64",
  },
  {
    num: "02",
    title: "Speech recognition",
    body: "Cloud-based multilingual ASR transcribes French, English, and code-switched audio. Wolof elements are extracted by our domain-specific parser downstream.",
    code: "multilingual ASR + domain parsing",
  },
  {
    num: "03",
    title: "Wolof parsing",
    body: "Our custom Wolof number parser (Guérin 2021) extracts numerals from 1 to 1B, resolves compound and genitive forms, and surfaces both readings when a bare commerce numeral is structurally ambiguous between direct-CFA and implicit-dërëm.",
    code: 'parse("ñaar junni") → {primary: 10000, alt: 2000, flag: HITL}',
  },
  {
    num: "04",
    title: "Intent classification",
    body: "Gemini 2.5 Flash classifies merchant intent with strict JSON output — sale, credit, customer lookup, or reminder. No keyword matching.",
    code: "credit · confidence: 0.94",
  },
  {
    num: "05",
    title: "Business validation",
    body: "Rules run before any write. Amount > 0? Client identified? Permission valid? The LLM never executes directly.",
    code: "validate() → { valid: true }",
  },
  {
    num: "06",
    title: "Merchant confirms",
    body: "The confirmation screen shows what was understood. The merchant validates — then Kuma writes to your API. Always human-in-the-loop.",
    code: "→ your_app.record_transaction()",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-white py-3xl" id="how">
      <div className="max-w-5xl mx-auto px-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
          How it works
        </p>
        <h2 className="text-heading font-semibold text-kuma-text-primary mb-sm leading-tight">
          Voice in. Structured data out.
        </h2>
        <p className="text-body text-kuma-text-secondary leading-relaxed mb-2xl max-w-2xl">
          Six steps, under 3 seconds. Every word spoken becomes a validated,
          structured transaction — no keyboard, no menu navigation, no friction.
        </p>

        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-md border border-kuma-border bg-kuma-bg p-lg"
            >
              <div className="text-xs font-mono font-semibold text-kuma-accent mb-sm">
                {step.num}
              </div>
              <h3 className="text-base font-semibold text-kuma-text-primary mb-xs">
                {step.title}
              </h3>
              <p className="text-sm text-kuma-text-secondary leading-5 mb-md">
                {step.body}
              </p>
              <code className="text-xs font-mono text-kuma-text-muted bg-white border border-kuma-border rounded px-xs py-xs block truncate">
                {step.code}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

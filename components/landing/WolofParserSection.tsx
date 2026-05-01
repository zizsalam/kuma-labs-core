const NUMBER_CARDS = [
  { wo: "benn", val: "1", note: "One · determinative" },
  { wo: "ñaar", val: "2", note: "Two" },
  { wo: "juróom fukk", val: "50", note: "Five × ten" },
  { wo: "fukk ak juróom ñaar", val: "17", note: "Ten + five + two · additive" },
  { wo: "fanweer", val: "30", note: '"Jour-lune" · lunar-month word' },
  { wo: "téeméer", val: "100", note: "One hundred" },
  { wo: "ñaar junni", val: "2,000", note: "Two × thousand" },
  {
    wo: "juróom-benn-i junni",
    val: "6,000",
    note: "Genitive construction · (5+1)×1000",
  },
];

const DISAMBIGUATION_EXAMPLES = [
  {
    label: "Ambiguous · bare commerce numeral",
    input: '"ñaar junni"',
    output: [
      'amount: 10,000 XOF  (implicit dërëm, primary — confidence 0.6)',
      'alt: 2,000 XOF  (direct CFA — confidence 0.4)',
      'needs_confirmation: true',
    ],
  },
  {
    label: "Explicit dërëm · unambiguous",
    input: '"dërëm fukk"',
    output: [
      'amount: 50 XOF  (10 dërëm × 5 — confidence 1.0)',
      'needs_confirmation: false',
    ],
  },
  {
    label: 'Explicit unit marker · unambiguous',
    input: '"téeméer francs"',
    output: [
      'amount: 100 XOF  (direct CFA locked by "francs" — confidence 1.0)',
      'needs_confirmation: false',
    ],
  },
];

export function WolofParserSection() {
  return (
    <section className="bg-kuma-bg py-3xl">
      <div className="max-w-5xl mx-auto px-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
          The technology
        </p>
        <h2 className="text-heading font-semibold text-kuma-text-primary mb-md leading-tight">
          We built the Wolof number parser.
        </h2>
        <p className="text-body text-kuma-text-secondary leading-relaxed mb-sm max-w-2xl">
          Based on peer-reviewed linguistics research (Guérin 2021), our parser
          covers all Wolof numerals from 1 to 1 billion — compound forms,
          genitive constructions, the commerce-specific{" "}
          <em>dërëm</em> unit (1 dërëm = 5 CFA), and the loanword boundary (
          <em>milyon</em> in; <em>alfu</em> out).
        </p>

        {/* Canonical merchant example (D-23) */}
        <div className="mb-2xl rounded-md border border-kuma-accent bg-white p-lg font-mono text-sm">
          <span className="text-kuma-text-muted text-xs uppercase tracking-widest font-sans block mb-xs">
            Canonical example
          </span>
          <span className="text-kuma-text-primary">
            &quot;Awa jënd na ñaar junni&quot;
          </span>
          <span className="text-kuma-text-muted mx-sm">→</span>
          <span className="text-kuma-text-secondary">
            {`{customer: "Awa", amount: 2000, currency: "XOF"}`}
          </span>
        </div>

        {/* Number grid */}
        <div className="grid grid-cols-2 gap-sm sm:grid-cols-4 mb-2xl">
          {NUMBER_CARDS.map(({ wo, val, note }) => (
            <div
              key={wo}
              className="rounded-md border border-kuma-border bg-white p-md text-center"
            >
              <div className="font-mono text-base font-semibold text-kuma-text-primary mb-xs">
                {wo}
              </div>
              <div className="text-2xl font-bold text-kuma-text-primary mb-xs">
                {val}
              </div>
              <div className="text-xs text-kuma-text-muted leading-4">{note}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-kuma-text-secondary leading-5 mb-2xl border-l-2 border-kuma-border pl-md">
          <strong className="text-kuma-text-primary">
            The cards above are linguistics, not currency.
          </strong>{" "}
          Wolof number words have fixed arithmetic values. When those words
          appear in a commerce context, translating to CFA francs requires a
          second step — and that step is structurally ambiguous.
        </p>

        {/* Commerce disambiguation */}
        <div className="rounded-md border border-kuma-border bg-white p-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
            Commerce disambiguation
          </p>
          <h3 className="text-base font-semibold text-kuma-text-primary mb-sm">
            The same number word can mean two different amounts.
          </h3>
          <p className="text-sm text-kuma-text-secondary leading-5 mb-lg">
            Senegalese market merchants frequently quote prices in{" "}
            <em>dërëm</em> without saying the word —{" "}
            <span className="font-mono">&quot;ñaar junni&quot;</span> can mean
            2,000 CFA (direct reading) or 2,000 dërëm = 10,000 CFA
            (implicit-dërëm reading, Guérin 2021 §2.6). There is no universally
            correct default. Our parser returns{" "}
            <strong>both interpretations</strong> and flags the field for human
            confirmation.
          </p>

          <div className="flex flex-col gap-sm">
            {DISAMBIGUATION_EXAMPLES.map((ex) => (
              <div
                key={ex.label}
                className="border-l-2 border-kuma-accent bg-kuma-bg rounded-r-md p-md"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-xs">
                  {ex.label}
                </p>
                <p className="font-mono text-sm text-kuma-text-primary font-medium mb-xs">
                  input: {ex.input}
                </p>
                {ex.output.map((line) => (
                  <p
                    key={line}
                    className="font-mono text-xs text-kuma-text-secondary leading-5"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-lg text-sm text-kuma-text-secondary leading-5">
            This is a core design decision, not a bug. Silently picking one
            reading would be wrong for half of Senegalese commerce speech either
            way.{" "}
            <a
              href="/research/state-of-wolof-voice-ai-2026.html#s5"
              className="text-kuma-text-primary underline decoration-kuma-accent underline-offset-2"
            >
              Full treatment in the research report (Failure 7)
            </a>
            .
          </p>
        </div>

        {/* Open-source links */}
        <div className="mt-lg flex flex-wrap gap-md">
          <a
            href="https://github.com/kuma-labs/wolof-numbers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-kuma-text-primary border border-kuma-border rounded-md px-md py-xs hover:border-kuma-border-focus transition-colors"
          >
            GitHub: wolof-numbers
          </a>
          <code className="text-xs font-mono text-kuma-text-secondary border border-kuma-border rounded-md px-md py-xs bg-kuma-bg">
            pip install wolof-numbers
          </code>
        </div>
      </div>
    </section>
  );
}

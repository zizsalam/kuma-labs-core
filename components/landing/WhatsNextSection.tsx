export function WhatsNextSection() {
  const items = [
    {
      when: "Now",
      accent: true,
      title: "State of Wolof Voice AI 2026",
      body: (
        <>
          Public benchmark across Whisper, Gemini, and Google STT on 104
          Senegalese voice samples × 6 system configurations. Open corpus,
          Apache-2.0 harness.{" "}
          <a
            href="/research/state-of-wolof-voice-ai-2026.html"
            className="text-paper-ink transition-colors"
            style={{ borderBottom: "1px solid #1D9E75", textDecoration: "none" }}
          >
            Read it
          </a>
          .
        </>
      ),
    },
    {
      when: "Next",
      accent: false,
      title: "Branded vertical demos",
      body: (
        <>
          Five tryable demos at{" "}
          <a
            href="/demos"
            className="text-paper-ink transition-colors"
            style={{ borderBottom: "1px solid #1D9E75", textDecoration: "none" }}
          >
            /demos
          </a>{" "}
          — BNPL collections, daily sales, agri coordination, remittance
          dispatch, KYC. Each is a 30-second record-and-see-JSON flow on the
          same backend.{" "}
          <a
            href="/demos"
            className="text-paper-ink transition-colors"
            style={{ borderBottom: "1px solid #1D9E75", textDecoration: "none" }}
          >
            Demos live at kuma-labs.com/demos →
          </a>
        </>
      ),
    },
    {
      when: "Soon",
      accent: false,
      title: "Open-source primitives",
      body: (
        <>
          <code
            className="font-mono"
            style={{ fontSize: "0.86em", letterSpacing: "-0.01em" }}
          >
            wolof-numbers
          </code>{" "}
          is live on PyPI.{" "}
          <code
            className="font-mono"
            style={{ fontSize: "0.86em", letterSpacing: "-0.01em" }}
          >
            wolof-ner
          </code>{" "}
          ships next. The parsers that turn ASR output into structured fields,
          published because the moat is data, not code.
        </>
      ),
    },
    {
      when: "Then",
      accent: false,
      title: "The ops layer",
      body: (
        <>
          The full Kuma stack — language router, number parser, intent
          classifier, validator, HITL — as a product, not just an API.{" "}
          <a
            href="mailto:hello@kuma-labs.com"
            className="text-paper-ink transition-colors"
            style={{ borderBottom: "1px solid #1D9E75", textDecoration: "none" }}
          >
            First five partner conversations
          </a>{" "}
          after the report get 90 days of free integration support on their own
          corpus.
        </>
      ),
    },
  ];

  return (
    <section className="bg-paper-bg" style={{ padding: "5.5rem 0" }}>
      <div className="max-w-[720px] mx-auto px-6">
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-[1.8rem]"
          style={{ fontSize: "clamp(2.1rem, 3.9vw, 3.3rem)", lineHeight: "1.08", maxWidth: "22ch" }}
        >
          What&apos;s next.
        </h2>

        <ul style={{ listStyle: "none", marginTop: "2.2rem" }}>
          {items.map((item, i) => (
            <li
              key={item.when}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr",
                gap: "2rem",
                padding: "1.7rem 0",
                borderTop: "1px solid rgba(26,26,26,0.12)",
                borderBottom: i === items.length - 1 ? "1px solid rgba(26,26,26,0.12)" : undefined,
              }}
            >
              <div
                className="font-mono text-[0.78rem] tracking-[0.06em] uppercase pt-[0.45rem]"
                style={{ color: item.accent ? "#1D9E75" : "rgba(26,26,26,0.40)" }}
              >
                {item.when}
              </div>
              <div>
                <h3
                  className="font-serif text-paper-ink tracking-[-0.015em] mb-[0.4rem]"
                  style={{ fontSize: "1.55rem", lineHeight: "1.25" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-serif"
                  style={{ color: "rgba(26,26,26,0.62)", fontSize: "1.05em", lineHeight: "1.6", marginBottom: 0 }}
                >
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

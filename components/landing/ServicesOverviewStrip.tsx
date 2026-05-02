import React from "react";

type Service = {
  title: string;
  description: React.ReactNode;
  price: string;
};

const services: Service[] = [
  {
    title: "Evaluations",
    description:
      "We benchmark your ASR, TTS, or LLM against our Wolof + French test set. Comparative report, failure-mode analysis, production-readiness verdict.",
    price: "From $15,000 · 4–6 weeks",
  },
  {
    title: "Datasets",
    description:
      "Hand-curated Wolof and Bambara voice corpora. Consent-cleared, domain-tuned, delivered with the harness to evaluate them.",
    price: "From $30,000 · 6–12 weeks",
  },
  {
    title: "Integration",
    description: (
      <>
        Integration of{" "}
        <code className="font-mono" style={{ fontSize: "0.85em", background: "rgba(26,26,26,0.06)", padding: "0 3px", borderRadius: "3px" }}>wolof-numbers</code>
        ,{" "}
        <code className="font-mono" style={{ fontSize: "0.85em", background: "rgba(26,26,26,0.06)", padding: "0 3px", borderRadius: "3px" }}>wolof-ner</code>
        , code-switching handlers, and our domain entity dictionaries into your
        existing voice stack. Provider-agnostic; we work alongside Whisper,
        Gemini, Chirp, Cartesia, or your own model.
      </>
    ),
    price: "$10,000 / month · 3-month minimum",
  },
];

export function ServicesOverviewStrip() {
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
          How to engage.
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
          Three ways to work with us. Prices published; the price is the price.
        </p>

        {/* 3-column block grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(26,26,26,0.12)",
                borderRadius: "8px",
                padding: "24px",
                background: "rgba(255,255,255,0.45)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="font-serif text-paper-ink mb-3"
                style={{ fontSize: "1.2rem", lineHeight: "1.2" }}
              >
                {service.title}
              </div>
              <p
                className="font-serif text-paper-ink"
                style={{
                  fontSize: "0.92rem",
                  lineHeight: "1.6",
                  color: "rgba(26,26,26,0.72)",
                  marginBottom: "1.25rem",
                  flex: 1,
                }}
              >
                {service.description}
              </p>
              <div
                className="font-mono"
                style={{
                  fontSize: "0.8rem",
                  color: "#1D9E75",
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {service.price}
              </div>
              <a
                href="/services"
                className="font-serif inline-block transition-colors"
                style={{
                  fontSize: "0.92rem",
                  color: "#1A1A1A",
                  textDecoration: "none",
                  borderBottom: "1px solid #1D9E75",
                  paddingBottom: "1px",
                  alignSelf: "flex-start",
                }}
              >
                Engage &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

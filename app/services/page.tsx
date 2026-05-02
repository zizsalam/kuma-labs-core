import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services & Pricing — Kuma Labs",
  description:
    "Specialist research and integration services for African voice AI. Five engagement tiers with published pricing, founder-led delivery.",
};

type Tier = {
  name: string;
  description: React.ReactNode;
  investment: string;
  timeline: string;
};

const tiers: Tier[] = [
  {
    name: "Benchmark Subscription",
    description:
      "Quarterly evaluation of your ASR/TTS/LLM on rotating Wolof + French + code-switched test sets, with comparative analysis vs commercial alternatives.",
    investment: "$3,000 / month",
    timeline: "Ongoing",
  },
  {
    name: "Evaluation Engagement",
    description:
      "One-off, deeper evaluation: failure-mode analysis, dërëm/code-switching/NER stress tests, production-readiness verdict, written report.",
    investment: "$15,000 – $50,000",
    timeline: "4–6 weeks",
  },
  {
    name: "Custom Dataset",
    description:
      "Domain-specific Wolof or Bambara voice corpus: collection, transcription, validation, consent framework. Sample sizes 1k–50k utterances.",
    investment: "$30,000 – $150,000",
    timeline: "6–12 weeks",
  },
  {
    name: "Integration Retainer",
    description: (
      <>
        Integration of{" "}
        <code style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.88em", background: "rgba(26,26,26,0.06)", padding: "0 3px", borderRadius: "3px" }}>wolof-numbers</code>
        ,{" "}
        <code style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.88em", background: "rgba(26,26,26,0.06)", padding: "0 3px", borderRadius: "3px" }}>wolof-ner</code>
        , code-switching handlers, and our domain entity dictionaries into your
        existing voice stack. Provider-agnostic; we work alongside Whisper,
        Gemini, Chirp, Cartesia, or your own model.
      </>
    ),
    investment: "$10,000 / month",
    timeline: "3-month minimum",
  },
  {
    name: "Productized Licenses",
    description:
      "Commercial license to wolof-numbers Pro, wolof-ner, domain dictionaries, or voice-agent templates.",
    investment: "$5,000 – $50,000",
    timeline: "Same-week",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-paper-bg font-serif text-paper-ink">
      {/* Page header */}
      <div
        className="mx-auto px-6 pt-24 pb-16"
        style={{ maxWidth: "960px", borderBottom: "1px solid rgba(26,26,26,0.12)" }}
      >
        <h1
          className="font-serif text-paper-ink tracking-[-0.02em] mb-5"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", lineHeight: "1.08" }}
        >
          Engage Kuma
        </h1>
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "52ch",
          }}
        >
          Specialist research and integration services for African voice AI.
          Five engagement tiers, prices published, founder-led delivery.
        </p>
      </div>

      {/* Price table — desktop */}
      <div
        className="mx-auto px-6 py-16 hidden sm:block"
        style={{ maxWidth: "960px" }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
          }}
        >
          <colgroup>
            <col style={{ width: "22%" }} />
            <col style={{ width: "50%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>
          <thead>
            <tr
              style={{
                borderBottom: "1px solid rgba(26,26,26,0.18)",
              }}
            >
              <th
                className="font-mono text-left"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.40)",
                  padding: "0 16px 14px 0",
                  fontWeight: 400,
                }}
              >
                Engagement
              </th>
              <th
                className="font-mono text-left"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.40)",
                  padding: "0 16px 14px",
                  fontWeight: 400,
                }}
              >
                What you get
              </th>
              <th
                className="font-mono text-left"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.40)",
                  padding: "0 16px 14px",
                  fontWeight: 400,
                }}
              >
                Investment
              </th>
              <th
                className="font-mono text-left"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.40)",
                  padding: "0 0 14px 16px",
                  fontWeight: 400,
                }}
              >
                Timeline
              </th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: "1px solid rgba(26,26,26,0.10)",
                }}
              >
                <td
                  className="font-serif italic text-paper-ink"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.35",
                    padding: "20px 16px 20px 0",
                    verticalAlign: "top",
                  }}
                >
                  {tier.name}
                </td>
                <td
                  className="font-serif text-paper-ink"
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: "1.55",
                    padding: "20px 16px",
                    verticalAlign: "top",
                    color: "rgba(26,26,26,0.78)",
                  }}
                >
                  {tier.description}
                </td>
                <td
                  className="font-mono text-paper-ink"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: "1.45",
                    padding: "20px 16px",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tier.investment}
                </td>
                <td
                  className="font-serif text-paper-ink"
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: "1.45",
                    padding: "20px 0 20px 16px",
                    verticalAlign: "top",
                    color: "rgba(26,26,26,0.62)",
                  }}
                >
                  {tier.timeline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Price cards — mobile */}
      <div
        className="mx-auto px-6 py-12 sm:hidden"
        style={{ maxWidth: "960px" }}
      >
        <div className="flex flex-col gap-5">
          {tiers.map((tier, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(26,26,26,0.12)",
                borderRadius: "8px",
                padding: "24px",
                background: "rgba(255,255,255,0.45)",
              }}
            >
              <div
                className="font-serif italic text-paper-ink mb-3"
                style={{ fontSize: "1.1rem", lineHeight: "1.3" }}
              >
                {tier.name}
              </div>
              <div
                className="font-serif text-paper-ink mb-4"
                style={{
                  fontSize: "0.92rem",
                  lineHeight: "1.6",
                  color: "rgba(26,26,26,0.78)",
                }}
              >
                {tier.description}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "rgba(26,26,26,0.40)",
                      marginBottom: "2px",
                    }}
                  >
                    Investment
                  </div>
                  <div
                    className="font-mono text-paper-ink"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {tier.investment}
                  </div>
                </div>
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "rgba(26,26,26,0.40)",
                      marginBottom: "2px",
                    }}
                  >
                    Timeline
                  </div>
                  <div
                    className="font-serif text-paper-ink"
                    style={{ fontSize: "0.92rem" }}
                  >
                    {tier.timeline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div
        className="mx-auto px-6 py-16"
        style={{
          maxWidth: "960px",
          borderTop: "1px solid rgba(26,26,26,0.12)",
        }}
      >
        <p
          className="font-serif text-paper-ink mb-5"
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
            lineHeight: "1.6",
            maxWidth: "54ch",
          }}
        >
          Not sure which tier fits? Email Abdul directly with a one-paragraph
          description of your problem. We reply within 48 hours with a
          recommendation.
        </p>
        <a
          href="mailto:hello@kumalabs.ai?subject=Kuma%20engagement%20fit"
          className="font-serif inline-block transition-colors"
          style={{
            color: "#1D9E75",
            fontSize: "1.05rem",
            textDecoration: "none",
            borderBottom: "1px solid #1D9E75",
            paddingBottom: "1px",
          }}
        >
          Email Abdul &rarr;
        </a>
      </div>

      {/* Open-source addendum */}
      <div
        className="mx-auto px-6 pb-24"
        style={{ maxWidth: "960px" }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: "0.93rem",
            lineHeight: "1.7",
            color: "rgba(26,26,26,0.55)",
            maxWidth: "64ch",
          }}
        >
          If you&apos;re not yet ready for an engagement:{" "}
          <a
            href="https://pypi.org/project/wolof-numbers/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(26,26,26,0.65)",
              borderBottom: "1px solid #1D9E75",
              textDecoration: "none",
            }}
          >
            wolof-numbers
          </a>{" "}
          (Apache-2.0 on PyPI),{" "}
          <a
            href="https://github.com/zizsalam/kuma-labs/tree/main/packages/wolof-ner"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(26,26,26,0.65)",
              borderBottom: "1px solid #1D9E75",
              textDecoration: "none",
            }}
          >
            wolof-ner
          </a>{" "}
          (source-available), and the{" "}
          <a
            href="https://github.com/zizsalam/kuma-labs/tree/main/scripts/eval/state_of_wolof_2026"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(26,26,26,0.65)",
              borderBottom: "1px solid #1D9E75",
              textDecoration: "none",
            }}
          >
            benchmark harness
          </a>{" "}
          (Apache-2.0 on GitHub) are free to use, fork, and run on your own data.
        </p>
      </div>
    </div>
  );
}

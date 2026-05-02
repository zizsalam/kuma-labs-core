import type { Metadata } from "next";
import { IntakeForm } from "@/components/engage/IntakeForm";

export const metadata: Metadata = {
  title: "Engage Kuma — Book a call, email, or send intake",
  description:
    "Three ways to start a conversation with Kuma Labs. Founder-led delivery; Abdul Aziz Kane replies within 48 hours.",
};

const mailtoCards = [
  {
    id: "evaluation",
    topic: "Evaluation engagement",
    href: "mailto:hello@kumalabs.ai?subject=Evaluation%20Engagement%20inquiry",
    preview: "I'm evaluating [model] for Wolof/French production deployment...",
  },
  {
    id: "dataset",
    topic: "Custom dataset",
    href: "mailto:hello@kumalabs.ai?subject=Custom%20Dataset%20inquiry",
    preview: "We need a [size]-utterance Wolof/Bambara corpus for...",
  },
  {
    id: "benchmark",
    topic: "Benchmark subscription",
    href: "mailto:hello@kumalabs.ai?subject=Benchmark%20Subscription%20inquiry",
    preview: "We'd like quarterly evaluations against the Wolof test set...",
  },
  {
    id: "discuss",
    topic: "Discuss findings from the report",
    href: "mailto:hello@kumalabs.ai?subject=State%20of%20Wolof%20Voice%20AI%20%E2%80%94%20discussion",
    preview: "I'm working on [model/system] — found [specific failure mode]...",
  },
];

export default function EngagePage() {
  return (
    <div className="bg-paper-bg font-serif text-paper-ink">
      {/* Page header */}
      <div
        className="mx-auto px-6 pt-24 pb-16"
        style={{ maxWidth: "720px", borderBottom: "1px solid rgba(26,26,26,0.12)" }}
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
            fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "640px",
          }}
        >
          Three ways to start a conversation: book a 30-minute scope call,
          email directly, or send a structured intake. Founder-led delivery —
          Abdul Aziz Kane replies within 48 hours.
        </p>
      </div>

      {/* Main content */}
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "720px", paddingTop: "4rem", paddingBottom: "6rem" }}
      >

        {/* ── Section 1: Book a call ── */}
        <section id="book" style={{ marginBottom: "6rem" }}>
          <div className="paper-card" style={{ padding: "2.5rem 2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span className="kl">SECTION 1</span>
              <span style={{ color: "rgba(26,26,26,0.62)" }}>·</span>
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  color: "rgba(26,26,26,0.62)",
                  fontSize: "0.95rem",
                }}
              >
                Recommended for first contact
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.6rem",
                lineHeight: "1.15",
                marginBottom: "1rem",
                color: "#1A1A1A",
              }}
            >
              Book a 30-minute scope call
            </h2>

            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                lineHeight: "1.55",
                marginBottom: "1.5rem",
                maxWidth: "640px",
                color: "#1A1A1A",
              }}
            >
              Direct calendar with Abdul. We&apos;ll cover what you&apos;re building,
              where Wolof or French code-switching shows up in the stack, and which
              engagement tier fits. No pre-meeting questionnaire.
            </p>

            <a
              href="https://cal.com/kuma-labs/founder-demo"
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-block",
                padding: "0.7rem 1.4rem",
                background: "#1D9E75",
                color: "#1A1A1A",
                textDecoration: "none",
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.05rem",
                borderRadius: "6px",
              }}
            >
              Open Cal.com &rarr;
            </a>

            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontSize: "0.85rem",
                color: "rgba(26,26,26,0.62)",
                marginTop: "1rem",
                maxWidth: "640px",
              }}
            >
              If the Cal.com link is unavailable, email{" "}
              <a
                href="mailto:hello@kumalabs.ai?subject=30-minute%20scope%20call"
                style={{
                  color: "#1A1A1A",
                  textDecorationColor: "#1D9E75",
                }}
              >
                hello@kumalabs.ai
              </a>{" "}
              — Abdul replies within 24 hours to schedule.
            </p>
          </div>
        </section>

        {/* ── Section 2: Email directly ── */}
        <section id="email" style={{ marginBottom: "6rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <span className="kl">SECTION 2</span>
              <span style={{ color: "rgba(26,26,26,0.62)" }}>·</span>
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  color: "rgba(26,26,26,0.62)",
                  fontSize: "0.95rem",
                }}
              >
                Context arrives before the email opens
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.6rem",
                lineHeight: "1.15",
                marginBottom: "0.6rem",
                color: "#1A1A1A",
              }}
            >
              Email directly
            </h2>
            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "rgba(26,26,26,0.62)",
                fontSize: "0.95rem",
                lineHeight: "1.55",
                maxWidth: "560px",
              }}
            >
              Pre-populated subject lines so Abdul knows the context before opening
              the message. Click the card that matches your situation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {mailtoCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className="paper-card"
                style={{
                  display: "block",
                  padding: "1.5rem",
                  textDecoration: "none",
                  color: "#1A1A1A",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {/* Mail icon (inline SVG — lucide Mail shape) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D9E75"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "3px" }}
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.05rem",
                      lineHeight: "1.25",
                      color: "#1A1A1A",
                    }}
                  >
                    {card.topic}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: "0.88rem",
                    color: "rgba(26,26,26,0.55)",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  &ldquo;{card.preview}&rdquo;
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ── Section 3: Tier-specific intake ── */}
        <section id="intake">
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <span className="kl">SECTION 3</span>
              <span style={{ color: "rgba(26,26,26,0.62)" }}>·</span>
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  color: "rgba(26,26,26,0.62)",
                  fontSize: "0.95rem",
                }}
              >
                Structured intake — sends via your email client
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.6rem",
                lineHeight: "1.15",
                marginBottom: "0.6rem",
                color: "#1A1A1A",
              }}
            >
              Tier-specific intake
            </h2>
            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "rgba(26,26,26,0.62)",
                fontSize: "0.95rem",
                lineHeight: "1.55",
                maxWidth: "560px",
              }}
            >
              Five fields. No sales funnel, no drip campaigns. Submitting opens your
              default email client with the form pre-filled. Direct contact with the
              founder.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <IntakeForm
              type="evaluation"
              title="Evaluation Engagement"
              description="$50,000–$200,000 · 4–6 weeks · failure-mode analysis + production-readiness verdict"
              fields={[
                {
                  name: "company",
                  label: "Company / Lab",
                  placeholder: "Anthropic, Cohere, OpenAI, etc.",
                  required: true,
                },
                {
                  name: "current_model",
                  label: "Current model",
                  placeholder: "Whisper, Gemini, in-house, etc.",
                  required: true,
                },
                {
                  name: "problem",
                  label: "Problem statement",
                  placeholder: "What you're trying to ship and where Wolof/French shows up.",
                  required: true,
                },
                {
                  name: "language_scope",
                  label: "Language scope",
                  placeholder: "Wolof only, Wolof + French code-switch, Bambara, etc.",
                },
                {
                  name: "timeline",
                  label: "Timeline",
                  placeholder: "Q3 2026, ASAP, exploratory, etc.",
                },
              ]}
            />

            <IntakeForm
              type="dataset"
              title="Custom Dataset"
              description="$100,000–$500,000 · 6–12 weeks · collection, transcription, validation, consent"
              fields={[
                {
                  name: "company",
                  label: "Company / Lab",
                  placeholder: "Anthropic, Cohere, OpenAI, etc.",
                  required: true,
                },
                {
                  name: "domain",
                  label: "Domain",
                  placeholder: "Mobile money, agri-extension, KYC, customer-support, etc.",
                  required: true,
                },
                {
                  name: "problem",
                  label: "What the dataset needs to cover",
                  placeholder: "Sample sizes, dialect mix, code-switching density, acoustic conditions.",
                  required: true,
                },
                {
                  name: "language_scope",
                  label: "Languages",
                  placeholder: "Wolof, Bambara, etc.",
                },
                {
                  name: "timeline",
                  label: "Timeline",
                  placeholder: "Required by Q4 2026, etc.",
                },
              ]}
            />

            <IntakeForm
              type="custom"
              title="Other / custom engagement"
              description="Production integration, benchmark subscription, license inquiry, or anything else."
              fields={[
                {
                  name: "company",
                  label: "Company / Lab",
                  placeholder: "...",
                  required: true,
                },
                {
                  name: "engagement_type",
                  label: "Engagement type",
                  placeholder: "Integration, benchmark subscription, license inquiry, partnership, etc.",
                  required: true,
                },
                {
                  name: "problem",
                  label: "What you'd like to discuss",
                  placeholder: "Brief description.",
                  required: true,
                },
                {
                  name: "language_scope",
                  label: "Language scope",
                  placeholder: "Wolof, French, Bambara, etc.",
                },
                {
                  name: "timeline",
                  label: "Timeline",
                  placeholder: "...",
                },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

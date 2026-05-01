import { Building2, Sprout, ShoppingBag, Bot, Landmark, Mail } from "lucide-react";

const USE_CASES = [
  {
    Icon: Building2,
    title: "Fintech field ops",
    body: "Mobile-money cash-in/cash-out agents, merchant-banking field reps, BNPL collectors. Voice-logged transactions where typing is a throughput ceiling.",
    tag: "Primary ICP",
    tagStyle: "bg-kuma-bg border-kuma-border text-kuma-text-secondary",
  },
  {
    Icon: Sprout,
    title: "Agri extension at scale",
    body: "Field workers capturing harvest, expenses, and inventory across thousands of smallholders. Wolof-first, no literacy floor, no keyboard.",
    tag: "Primary ICP",
    tagStyle: "bg-kuma-bg border-kuma-border text-kuma-text-secondary",
  },
  {
    Icon: ShoppingBag,
    title: "High-volume merchant platforms",
    body: "Merchant-facing apps where the top decile of users processes 30+ transactions a day. Voice-first logging for informal market operators.",
    tag: "Pilot open",
    tagStyle: "bg-kuma-bg border-kuma-border text-kuma-text-secondary",
  },
  {
    Icon: Bot,
    title: "Voice agents / AI platforms",
    body: "Add West African language support to existing voice agents on Retell, VAPI, or custom pipelines. Kuma as the Wolof-aware middleware.",
    tag: "API partner",
    tagStyle: "bg-kuma-bg border-kuma-border text-kuma-text-secondary",
  },
  {
    Icon: Landmark,
    title: "Public-sector ops",
    body: "Census collection, subsidy registration, electoral enrolment. Voice as accessibility — not as novelty.",
    tag: "Design partners",
    tagStyle: "bg-kuma-bg border-kuma-border text-kuma-text-secondary",
  },
  {
    Icon: Mail,
    title: "Your use case",
    body: "If you're running voice-captured ops at scale across Wolof-speaking West Africa and the numbers matter to you, tell us about your throughput.",
    tag: "→ Talk to us",
    tagStyle: "bg-kuma-accent border-kuma-accent text-kuma-text-primary",
    href: "mailto:hello@kumalabs.ai",
  },
];

export function PartnersSection() {
  return (
    <section className="bg-kuma-bg py-3xl" id="partners">
      <div className="max-w-5xl mx-auto px-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
          Who this is for
        </p>
        <h2 className="text-heading font-semibold text-kuma-text-primary mb-sm leading-tight">
          Labor-constrained ops. At scale.
        </h2>
        <p className="text-body text-kuma-text-secondary leading-relaxed mb-2xl max-w-2xl">
          Kuma is for teams where field-staff throughput is capped by typing,
          not by talking. If every extra second per transaction shows up on your
          P&amp;L, you&apos;re in scope. If your operation runs on relationship
          banking with ten customers per agent, you probably aren&apos;t — and
          we&apos;ll tell you so.
        </p>

        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map(({ Icon, title, body, tag, tagStyle, href }) => (
            <div
              key={title}
              className="rounded-md border border-kuma-border bg-white p-lg flex flex-col"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded bg-kuma-bg mb-md flex-shrink-0">
                <Icon className="w-5 h-5 text-kuma-text-secondary" />
              </div>
              <h3 className="text-base font-semibold text-kuma-text-primary mb-xs">
                {title}
              </h3>
              <p className="text-sm text-kuma-text-secondary leading-5 flex-1 mb-md">
                {body}
              </p>
              {href ? (
                <a
                  href={href}
                  className={`self-start text-xs font-semibold border rounded px-sm py-xs ${tagStyle}`}
                >
                  {tag}
                </a>
              ) : (
                <span
                  className={`self-start text-xs font-semibold border rounded px-sm py-xs ${tagStyle}`}
                >
                  {tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

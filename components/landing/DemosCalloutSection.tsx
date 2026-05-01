import Link from "next/link";
import { ArrowRight, ArrowRightLeft, PhoneCall, ShoppingCart, Sprout, IdCard } from "lucide-react";

const DEMO_PREVIEWS = [
  {
    slug: "remittance-dispatch",
    title: "Remittance Dispatch",
    opsPain: "60% of cash-transfer support tickets are navigation questions.",
    Icon: ArrowRightLeft,
    tint: "#E8C547",
  },
  {
    slug: "bnpl-collections",
    title: "BNPL Collections",
    opsPain: "BNPL agents make 200+ calls per day. Voice cuts data entry to zero.",
    Icon: PhoneCall,
    tint: "#D97706",
  },
  {
    slug: "merchant-sales",
    title: "Merchant Sales",
    opsPain: "An informal merchant sells 60+ items per day. Typing each kills adoption.",
    Icon: ShoppingCart,
    tint: "#F59E0B",
  },
  {
    slug: "agri-coordination",
    title: "Agri Coordination",
    opsPain: "Cooperative ops staff transcribe the same notes by hand, every week.",
    Icon: Sprout,
    tint: "#A3A847",
  },
  {
    slug: "kyc-onboarding",
    title: "KYC Onboarding",
    opsPain: "KYC drop-off is 40% on typed forms. One spoken utterance captures it all.",
    Icon: IdCard,
    tint: "#B45309",
  },
];

export function DemosCalloutSection() {
  return (
    <section className="bg-kuma-bg py-3xl">
      <div className="max-w-5xl mx-auto px-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
          Try it live
        </p>
        <h2 className="text-heading font-semibold text-kuma-text-primary mb-sm leading-tight">
          Five verticals. One API. 30 seconds, no signup.
        </h2>
        <p className="text-body text-kuma-text-secondary leading-relaxed mb-2xl max-w-2xl">
          Tap a card, speak Wolof or French, get validated JSON. Each demo
          uses real pre-recorded corpus audio from Senegalese speakers.
        </p>

        {/* Mini demo cards */}
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 mb-2xl">
          {DEMO_PREVIEWS.map(({ slug, title, opsPain, Icon, tint }) => (
            <Link
              key={slug}
              href={`/demos/${slug}`}
              className="group block rounded-md border border-kuma-border bg-white p-md hover:ring-2 hover:ring-kuma-accent transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent"
            >
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded mb-sm"
                style={{ backgroundColor: tint }}
              >
                <Icon className="w-4 h-4 text-kuma-text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-kuma-text-primary mb-xs">
                {title}
              </h3>
              <p className="text-xs text-kuma-text-muted leading-4">
                {opsPain}
              </p>
            </Link>
          ))}

          {/* View all card */}
          <Link
            href="/demos"
            className="group block rounded-md border border-kuma-accent bg-kuma-bg p-md hover:bg-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent flex flex-col items-center justify-center text-center"
          >
            <p className="text-sm font-semibold text-kuma-text-primary mb-xs">
              View all demos
            </p>
            <p className="text-xs text-kuma-text-muted leading-4 mb-sm">
              Full hub with pre-recorded audio examples
            </p>
            <ArrowRight className="w-4 h-4 text-kuma-text-secondary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/demos"
            className="inline-flex items-center gap-sm bg-kuma-accent text-kuma-text-primary px-xl py-sm font-semibold rounded-md hover:brightness-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
          >
            Go to demos hub
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

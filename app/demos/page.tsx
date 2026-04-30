import Link from "next/link";
import {
  ArrowRightLeft,
  PhoneCall,
  ShoppingCart,
  Sprout,
  IdCard,
  ArrowRight,
} from "lucide-react";
import { DEMOS, type DemoSlug } from "@/lib/demos/shapes";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowRightLeft,
  PhoneCall,
  ShoppingCart,
  Sprout,
  IdCard,
};

const JSON_SHAPES: Record<DemoSlug, string> = {
  "remittance-dispatch": '{"type": "CANCEL_TRANSFER", "recipient": "Ousmane"}',
  "bnpl-collections": '{"status": "PAID", "agent": "Cheikh", "amount": 2000}',
  "merchant-sales": '{"customer": "Awa", "amount": 2000, "currency": "XOF"}',
  "agri-coordination": '{"action": "SEND", "amount": 500, "cycle": "current"}',
  "kyc-onboarding":
    '{"name": "Abdoulaziz Kane", "dob": "1995", "cni": "..."}',
};

export default function DemosPage() {
  const demos = Object.values(DEMOS);

  return (
    <div>
      {/* Hero */}
      <div className="mb-2xl">
        <h1 className="text-[40px] font-semibold leading-[1.1] text-kuma-text-primary">
          Live demos — voice-to-JSON, 30 seconds, no signup
        </h1>
        <p className="mt-md text-base text-kuma-text-secondary leading-6">
          Tap a card. Speak Wolof or French. Get validated JSON. Five verticals,
          one API.
        </p>
      </div>

      {/* 5-card grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        {demos.map((demo) => {
          const Icon = ICON_MAP[demo.iconName];
          return (
            <Link
              key={demo.slug}
              href={`/demos/${demo.slug}`}
              className="group block rounded-md border border-kuma-border bg-white p-lg hover:ring-2 hover:ring-kuma-accent transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent"
            >
              {/* Icon with per-vertical tint background */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-md"
                style={{ backgroundColor: demo.tintHex }}
              >
                {Icon && (
                  <Icon className="w-5 h-5 text-kuma-text-primary" />
                )}
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-kuma-text-primary mb-xs">
                {demo.title}
              </h2>

              {/* Ops-pain + JSON shape */}
              <p className="text-sm text-kuma-text-secondary leading-5 mb-sm">
                {demo.opsPain}
              </p>
              <p className="text-xs font-mono text-kuma-text-muted truncate">
                → {JSON_SHAPES[demo.slug]}
              </p>

              {/* Arrow indicator */}
              <div className="mt-md flex items-center gap-xs text-sm font-semibold text-kuma-text-primary group-hover:gap-md transition-all">
                Try this demo{" "}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import { Mic, Search, Bot, BookOpen, FileText, Key, Zap, Database, Cloud, BarChart3, CheckCircle } from "lucide-react";

const VOICE_AI = [
  {
    Icon: Mic,
    name: "Google Cloud STT v2",
    desc: "wo-SN + fr-SN multilingual, code-switching",
    phase: "core",
  },
  {
    Icon: Search,
    name: "Provider-abstracted pipeline",
    desc: "7-stage orchestrator with per-stage timeouts",
    phase: "core",
  },
  {
    Icon: Bot,
    name: "Gemini 2.5 Flash",
    desc: "Strict JSON output only via ML.PREDICT",
    phase: "core",
  },
  {
    Icon: BookOpen,
    name: "Wolof Parser",
    desc: "Based on Guérin (2021) — 1 to 1B",
    phase: "core",
  },
];

const BACKEND = [
  {
    Icon: Zap,
    name: "FastAPI + Python 3.12",
    desc: "Async, Pydantic validation, OpenAPI + Scalar docs",
    phase: "core",
  },
  {
    Icon: Database,
    name: "Cloud SQL Postgres 16",
    desc: "pgvector, async SQLAlchemy, Alembic migrations",
    phase: "core",
  },
  {
    Icon: Cloud,
    name: "Cloud Run (serverless)",
    desc: "Auto-scale, zero infra, pay-per-use",
    phase: "core",
  },
  {
    Icon: BarChart3,
    name: "VoiceLogs → feedback loop",
    desc: "Every API call feeds parser improvement",
    phase: "moat",
  },
];

const DEVEX = [
  {
    Icon: FileText,
    name: "Mintlify docs + Scalar playground",
    desc: "Interactive API reference with pre-filled sandbox key",
    phase: "live",
  },
  {
    Icon: Key,
    name: "Bearer auth + rate limiting",
    desc: "Test/live key split, per-tenant usage metering",
    phase: "live",
  },
];

const HITL = [
  {
    Icon: CheckCircle,
    name: "Human-in-the-loop confirmation",
    desc: "Low-confidence results flagged for merchant review before write",
    phase: "core",
  },
];

type StackItem = {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  desc: string;
  phase: string;
};

function StackGroup({ label, items }: { label: string; items: StackItem[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm mt-2xl first:mt-0">
        {label}
      </p>
      <ul className="flex flex-col gap-sm">
        {items.map(({ Icon, name, desc, phase }) => (
          <li
            key={name}
            className="flex items-start gap-md rounded-md border border-kuma-border bg-white p-md"
          >
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded bg-kuma-bg">
              <Icon className="w-4 h-4 text-kuma-text-secondary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-kuma-text-primary">
                {name}
              </p>
              <p className="text-xs text-kuma-text-muted leading-4 mt-xs">
                {desc}
              </p>
            </div>
            <span className="flex-shrink-0 text-xs font-mono border border-kuma-border rounded px-xs py-xs text-kuma-text-muted bg-kuma-bg">
              {phase}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StackSection() {
  return (
    <section className="bg-white py-3xl" id="stack">
      <div className="max-w-5xl mx-auto px-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
          Technical stack
        </p>
        <h2 className="text-heading font-semibold text-kuma-text-primary mb-sm leading-tight">
          Built on Google Cloud, designed for Africa.
        </h2>
        <p className="text-body text-kuma-text-secondary leading-relaxed mb-2xl">
          Infrastructure that scales from 10,000 to 10 million merchants without
          a refonte.
        </p>

        <div className="grid grid-cols-1 gap-2xl md:grid-cols-2">
          <div>
            <StackGroup label="Voice & AI" items={VOICE_AI} />
            <StackGroup label="Developer experience" items={DEVEX} />
          </div>
          <div>
            <StackGroup label="Backend & Data" items={BACKEND} />
            <StackGroup label="HITL & Trust" items={HITL} />
          </div>
        </div>
      </div>
    </section>
  );
}

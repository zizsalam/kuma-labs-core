"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, Copy, Check } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface JsonViewerProps {
  data: Record<string, unknown> | null;
  confidence?: number;
  loading?: boolean;
}

function getConfidenceStyle(confidence: number): string {
  if (confidence >= 0.85) return "underline decoration-[#E8C547] decoration-solid";
  if (confidence >= 0.6) return "underline decoration-gray-400 decoration-dashed";
  return "underline decoration-red-500 decoration-dashed";
}

function JsonValue({
  value,
  confidence,
}: {
  value: unknown;
  confidence?: number;
}) {
  if (value === null) {
    return <span className="text-json-null">null</span>;
  }
  if (typeof value === "boolean") {
    return <span className="text-json-null">{String(value)}</span>;
  }
  if (typeof value === "number") {
    const style = confidence !== undefined ? getConfidenceStyle(confidence) : "";
    const title =
      confidence !== undefined ? `Confidence: ${(confidence * 100).toFixed(0)}%` : undefined;
    return (
      <span className={`text-json-number ${style}`} title={title}>
        {value}
      </span>
    );
  }
  if (typeof value === "string") {
    const style = confidence !== undefined ? getConfidenceStyle(confidence) : "";
    const title =
      confidence !== undefined ? `Confidence: ${(confidence * 100).toFixed(0)}%` : undefined;
    return (
      <span className={`text-json-string ${style}`} title={title}>
        &quot;{value}&quot;
      </span>
    );
  }
  if (typeof value === "object") {
    return <JsonObject data={value as Record<string, unknown>} />;
  }
  return <span className="text-kuma-text-primary">{String(value)}</span>;
}

function JsonObject({ data }: { data: Record<string, unknown> }) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const entries = Object.entries(data);

  return (
    <span>
      {"{"}
      {entries.map(([key, val], i) => {
        const isObj =
          val !== null && typeof val === "object" && !Array.isArray(val);
        const isCollapsed = collapsed[key];

        return (
          <div key={key} className="ml-md">
            {isObj ? (
              <button
                onClick={() =>
                  setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }))
                }
                className="inline-flex items-center gap-xs text-kuma-text-muted hover:text-kuma-text-primary"
                aria-label={isCollapsed ? `Expand ${key}` : `Collapse ${key}`}
              >
                {isCollapsed ? (
                  <ChevronRight className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>
            ) : null}
            <span className="text-json-key">&quot;{key}&quot;</span>
            <span className="text-kuma-text-muted">: </span>
            {isObj && isCollapsed ? (
              <span className="text-kuma-text-muted">{"{ ... }"}</span>
            ) : (
              <JsonValue value={val} />
            )}
            {i < entries.length - 1 && (
              <span className="text-kuma-text-muted">,</span>
            )}
          </div>
        );
      })}
      {"}"}
    </span>
  );
}

export function JsonViewer({ data, confidence, loading }: JsonViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!data) return;
    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative rounded-md border border-kuma-border bg-white p-md md:p-lg">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        disabled={!data || loading}
        className="absolute top-sm right-sm flex items-center gap-xs text-xs text-kuma-text-muted hover:text-kuma-text-primary disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent rounded"
        aria-label={copied ? "Copied to clipboard" : "Copy JSON"}
      >
        {copied ? (
          <>
            <Check className="w-3 h-3" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            <span>Copy</span>
          </>
        )}
      </button>

      {/* Content */}
      <div className="font-mono text-sm overflow-auto max-h-64">
        {loading ? (
          <div className="space-y-sm">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : data ? (
          <div>
            {confidence !== undefined && (
              <div className="mb-sm text-xs text-kuma-text-muted">
                <span
                  className={getConfidenceStyle(confidence)}
                  title={`Confidence: ${(confidence * 100).toFixed(0)}%`}
                >
                  {(confidence * 100).toFixed(0)}% confidence
                </span>
              </div>
            )}
            <JsonObject data={data} />
          </div>
        ) : (
          <div className="text-kuma-text-muted">
            <p className="text-sm">Your structured output will appear here.</p>
            <p className="text-xs mt-xs">
              Tap the gold mic to record, or pick a pre-recorded example below.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

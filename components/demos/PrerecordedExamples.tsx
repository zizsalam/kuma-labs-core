"use client";

import { useState } from "react";
import { PlayCircle, Loader2 } from "lucide-react";
import { uploadAudio, type DemoResponse } from "@/lib/demos/api-client";
import type { DemoExample, DemoSlug } from "@/lib/demos/shapes";

interface PrerecordedExamplesProps {
  slug: DemoSlug;
  examples: DemoExample[];
  onResult: (result: DemoResponse) => void;
}

export function PrerecordedExamples({
  slug,
  examples,
  onResult,
}: PrerecordedExamplesProps) {
  const [loadingIdx, setLoadingIdx] = useState<number | null>(null);
  const [errorIdx, setErrorIdx] = useState<number | null>(null);

  const handleClick = async (example: DemoExample, idx: number) => {
    if (loadingIdx !== null) return;
    setLoadingIdx(idx);
    setErrorIdx(null);

    try {
      // Play audio feedback if URL available
      if (example.audioUrl) {
        const audio = new Audio(example.audioUrl);
        audio.play().catch(() => {
          // Audio play may fail due to browser policy — silently ignore
        });
      }

      // Fetch blob from URL (or use a fixture if URL is empty)
      let blob: Blob;
      if (example.audioUrl) {
        const response = await fetch(example.audioUrl);
        blob = await response.blob();
      } else {
        // No audio file yet (08-03 wires these); use fixture_id="default" path
        // We create a tiny silent blob to trigger the fixture fallback server-side
        blob = new Blob([], { type: "audio/webm" });
      }

      const result = await uploadAudio({ slug, blob });
      onResult(result);
    } catch {
      setErrorIdx(idx);
    } finally {
      setLoadingIdx(null);
    }
  };

  return (
    <div className="space-y-sm">
      <p className="text-sm font-semibold text-kuma-text-secondary">
        Or try a pre-recorded example:
      </p>
      <div className="flex flex-col gap-sm">
        {examples.map((example, idx) => {
          const isLoading = loadingIdx === idx;
          const isError = errorIdx === idx;

          return (
            <div key={idx} className="flex flex-col gap-xs">
              <button
                onClick={() => handleClick(example, idx)}
                disabled={loadingIdx !== null}
                className={[
                  "flex items-center gap-sm text-left px-md py-sm rounded-md border transition-colors",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent",
                  "disabled:opacity-60 disabled:cursor-not-allowed",
                  isError
                    ? "border-kuma-destructive text-kuma-destructive"
                    : "border-kuma-border hover:border-kuma-accent text-kuma-text-primary",
                ].join(" ")}
                aria-label={`Play example: ${example.wolof}`}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 flex-shrink-0 animate-spin text-kuma-text-muted" />
                ) : (
                  <PlayCircle className="w-4 h-4 flex-shrink-0 text-kuma-text-muted" />
                )}
                <span className="font-mono text-sm italic">
                  &ldquo;{example.wolof}&rdquo;
                </span>
              </button>
              {example.caption && (
                <p className="text-xs text-kuma-text-muted pl-md">
                  {example.caption}
                </p>
              )}
              {example.gloss && (
                <p className="text-xs text-kuma-text-muted pl-md italic">
                  ↳ {example.gloss}
                </p>
              )}
              {isError && (
                <p className="text-xs text-kuma-destructive pl-md">
                  Could not load example. Check your connection.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

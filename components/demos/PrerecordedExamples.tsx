"use client";

import { useState } from "react";
import { PlayCircle, Loader2 } from "lucide-react";
import { uploadAudio, uploadFixture, type DemoResponse } from "@/lib/demos/api-client";
import type { DemoExample, DemoSlug } from "@/lib/demos/shapes";

/**
 * Fetch the audio blob at `audioUrl` and upload it.
 * If the URL is absent, returns a 404, or throws a network error, fall back
 * to fixture replay so the demo works before Phase 08-03 ships audio files.
 */
async function _loadAndUpload({
  slug,
  audioUrl,
}: {
  slug: DemoSlug;
  audioUrl: string;
}): Promise<DemoResponse> {
  if (audioUrl) {
    try {
      const response = await fetch(audioUrl);
      if (response.ok) {
        const blob = await response.blob();
        return uploadAudio({ slug, blob });
      }
      // Non-OK (e.g. 404): fall through to fixture replay
    } catch {
      // Network error: fall through to fixture replay
    }
  }
  // No audioUrl or fetch failed — use server-side fixture replay
  return uploadFixture({ slug, fixtureId: "default" });
}

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
      // Play audio feedback if URL available (failure silently ignored)
      if (example.audioUrl) {
        const audio = new Audio(example.audioUrl);
        audio.play().catch(() => {
          // Audio play may fail due to browser policy or missing file — silently ignore
        });
      }

      // Attempt to fetch audio blob; fall back to fixture replay if unavailable.
      // Phase 08-03 will populate audioUrl values — until then (or when files return
      // 404), fixture replay is the safe fallback so smoke tests work without real audio.
      const result = await _loadAndUpload({ slug, audioUrl: example.audioUrl });
      onResult(result);
    } catch {
      // Both audio fetch and fixture fallback failed
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

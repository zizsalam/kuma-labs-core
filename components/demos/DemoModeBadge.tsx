"use client";

import { Info } from "lucide-react";

/**
 * DemoModeBadge — rendered above <JsonViewer> on every demo sub-page.
 *
 * Discloses that the JSON returned is a fixture, not a live transcription of
 * the visitor's audio (per D-09: live-mode returns 501; sandbox key always
 * triggers fixture replay).
 */
export function DemoModeBadge() {
  return (
    <div
      className="flex items-center gap-xs rounded-full px-sm py-xs bg-kuma-accent/10 w-fit"
      aria-label="Demo mode notice"
      role="note"
    >
      <Info
        className="w-3 h-3 text-kuma-text-secondary flex-shrink-0"
        aria-hidden="true"
      />
      <span className="text-xs text-kuma-text-secondary leading-none">
        Demo mode — example fixture (not transcribed from your audio)
      </span>
    </div>
  );
}

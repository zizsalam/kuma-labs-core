import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Mock api-client — factory must be self-contained (vi.mock is hoisted)
vi.mock("@/lib/demos/api-client", () => ({
  uploadAudio: vi.fn().mockResolvedValue({
    raw_transcript: "x",
    structured_intent: {},
    confidence: 0.9,
  }),
}));

// Mock fetch to return a successful response with a fake blob
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  blob: () => Promise.resolve(new Blob([], { type: "audio/mp4" })),
}) as unknown as typeof fetch;

// Mock HTMLMediaElement play (jsdom doesn't implement it)
Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
  configurable: true,
  value: vi.fn().mockResolvedValue(undefined),
});

import { PrerecordedExamples } from "@/components/demos/PrerecordedExamples";
import { uploadAudio } from "@/lib/demos/api-client";

describe("PrerecordedExamples", () => {
  beforeEach(() => {
    vi.mocked(uploadAudio).mockClear();
  });

  it("calls uploadAudio with the correct slug on tap", async () => {
    const onResult = vi.fn();
    const examples = [{ wolof: "x", gloss: "y", audioUrl: "/a.m4a" }];
    render(
      <PrerecordedExamples
        slug="remittance-dispatch"
        examples={examples}
        onResult={onResult}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /x/ }));

    await waitFor(() => {
      expect(uploadAudio).toHaveBeenCalled();
    });
  });
});

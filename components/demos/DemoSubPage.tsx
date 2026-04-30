"use client";

import { useState } from "react";
import { VoiceRecorder } from "./VoiceRecorder";
import { TranscriptPanel } from "./TranscriptPanel";
import { JsonViewer } from "./JsonViewer";
import { PrerecordedExamples } from "./PrerecordedExamples";
import { FileUpload } from "./FileUpload";
import { PlaygroundLink } from "./PlaygroundLink";
import { BookCallCta } from "./BookCallCta";
import { OpsPainBanner } from "./OpsPainBanner";
import { DemoModeBadge } from "./DemoModeBadge";
import { type DemoShape } from "@/lib/demos/shapes";
import { type DemoResponse } from "@/lib/demos/api-client";

interface DemoSubPageProps {
  demo: DemoShape;
}

export function DemoSubPage({ demo }: DemoSubPageProps) {
  const [result, setResult] = useState<DemoResponse | null>(null);

  return (
    <div className="space-y-xl">
      {/* 4px tinted ribbon + H1 */}
      <div>
        <div
          className="w-full h-1 rounded mb-md"
          style={{ backgroundColor: demo.tintHex }}
          aria-hidden="true"
        />
        <h1 className="text-2xl font-semibold text-kuma-text-primary">
          {demo.title}
        </h1>
      </div>

      {/* Ops-pain banner */}
      <OpsPainBanner pain={demo.opsPain} />

      {/* Recorder — centered */}
      <div className="flex justify-center">
        <VoiceRecorder slug={demo.slug} onResult={setResult} />
      </div>

      {/* Demo mode disclosure badge */}
      <DemoModeBadge />

      {/* Transcript + JSON viewer — side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        <TranscriptPanel transcript={result?.raw_transcript ?? null} />
        <JsonViewer
          data={result?.structured_intent ?? null}
          confidence={result?.confidence}
        />
      </div>

      {/* Pre-recorded examples */}
      <PrerecordedExamples
        slug={demo.slug}
        examples={demo.examples}
        onResult={setResult}
      />

      {/* File upload */}
      <FileUpload slug={demo.slug} onResult={setResult} />

      {/* Playground link */}
      <PlaygroundLink slug={demo.slug} />

      {/* Book call CTA */}
      <BookCallCta />
    </div>
  );
}

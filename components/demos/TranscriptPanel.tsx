interface TranscriptPanelProps {
  transcript: string | null;
}

export function TranscriptPanel({ transcript }: TranscriptPanelProps) {
  if (!transcript) return null;

  return (
    <div className="rounded-md border border-kuma-border bg-white p-md md:p-lg">
      <p className="text-xs font-semibold text-kuma-text-muted uppercase tracking-wider mb-sm">
        Transcript
      </p>
      <p className="text-base text-kuma-text-primary leading-6">{transcript}</p>
    </div>
  );
}

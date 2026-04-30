"use client";

import { useRef, useState, useCallback } from "react";
import { Upload, Loader2 } from "lucide-react";
import { uploadAudio, type DemoResponse } from "@/lib/demos/api-client";
import type { DemoSlug } from "@/lib/demos/shapes";

interface FileUploadProps {
  slug: DemoSlug;
  onResult: (result: DemoResponse) => void;
}

const MAX_DURATION_S = 30;
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

// Broad accept list: user-facing label says OGG/WAV/WEBM but we accept MP4/M4A too
// for mobile Safari (Pitfall 2 from 08-RESEARCH.md)
const ACCEPT =
  "audio/ogg,audio/wav,audio/webm,audio/mp4,audio/x-m4a,video/mp4,.ogg,.wav,.webm,.mp4,.m4a";

export function FileUpload({ slug, onResult }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFile = useCallback(
    async (file: File) => {
      setError(null);

      // Size check
      if (file.size > MAX_SIZE_BYTES) {
        setError("File too large — maximum 5MB.");
        return;
      }

      // Duration check via HTML5 Audio
      const checkDuration = (): Promise<number> =>
        new Promise((resolve, reject) => {
          const audio = document.createElement("audio");
          const url = URL.createObjectURL(file);
          audio.onloadedmetadata = () => {
            URL.revokeObjectURL(url);
            resolve(audio.duration);
          };
          audio.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("Could not read audio duration."));
          };
          audio.src = url;
        });

      try {
        const duration = await checkDuration();
        if (duration > MAX_DURATION_S) {
          setError(
            "Audio over 30 seconds. Trim it down or use the API playground for longer files."
          );
          return;
        }
      } catch {
        // If we can't read duration, proceed anyway — server will validate
      }

      setLoading(true);
      try {
        const blob = new Blob([await file.arrayBuffer()], { type: file.type });
        const result = await uploadAudio({ slug, blob });
        onResult(result);
      } catch (err) {
        const msg =
          err instanceof Error && err.message.includes("API error")
            ? "Couldn't transcribe that one — the audio might be too short or too noisy."
            : "Upload failed. Check your connection and try again.";
        setError(msg);
      } finally {
        setLoading(false);
      }
    },
    [slug, onResult]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
    // Reset so same file can be re-uploaded
    e.target.value = "";
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  return (
    <div className="space-y-sm">
      <p className="text-sm font-semibold text-kuma-text-secondary">
        Or upload your own audio (OGG / WAV / WEBM, ≤30s)
      </p>
      <div
        onClick={() => !loading && inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        role="button"
        tabIndex={0}
        aria-label="Upload audio file"
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !loading) {
            inputRef.current?.click();
          }
        }}
        className={[
          "flex flex-col items-center justify-center gap-sm p-lg rounded-md border-2 border-dashed cursor-pointer transition-colors",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent",
          dragOver
            ? "border-kuma-accent bg-kuma-accent/5"
            : "border-kuma-border hover:border-kuma-accent hover:bg-kuma-accent/5",
          loading ? "pointer-events-none opacity-60" : "",
        ].join(" ")}
      >
        {loading ? (
          <Loader2 className="w-6 h-6 text-kuma-text-muted animate-spin" />
        ) : (
          <Upload className="w-6 h-6 text-kuma-text-muted" />
        )}
        <p className="text-sm text-kuma-text-muted text-center">
          {loading ? "Uploading..." : "Drag & drop or click to browse"}
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        onChange={handleFileChange}
        className="sr-only"
        aria-label="Audio file input"
        tabIndex={-1}
      />
      {error && (
        <p className="text-xs text-kuma-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Mic, Square, Loader2 } from "lucide-react";
import { uploadAudio, type DemoResponse } from "@/lib/demos/api-client";
import type { DemoSlug } from "@/lib/demos/shapes";

type RecorderState =
  | "idle"
  | "permission-prompt"
  | "recording"
  | "recording-stopping"
  | "uploading"
  | "transcribing"
  | "extracting-intent"
  | "success"
  | "error";

interface VoiceRecorderProps {
  slug: DemoSlug;
  onResult: (result: DemoResponse) => void;
}

function formatElapsed(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

const MIME_TYPES = ["audio/mp4", "audio/webm;codecs=opus", "audio/webm"];

const STATE_LABELS: Record<RecorderState, string> = {
  idle: "Tap to record (Wolof or French)",
  "permission-prompt": "Requesting microphone...",
  recording: "Recording... tap to stop",
  "recording-stopping": "Stopping...",
  uploading: "Uploading audio...",
  transcribing: "Transcribing...",
  "extracting-intent": "Extracting intent...",
  success: "Done! Tap to record again",
  error: "Error — tap to try again",
};

export function VoiceRecorder({ slug, onResult }: VoiceRecorderProps) {
  const [state, setState] = useState<RecorderState>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [slowNetwork, setSlowNetwork] = useState<"none" | "slow" | "stuck">(
    "none"
  );

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const elapsedIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const uploadStartRef = useRef<number>(0);
  const slowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stuckTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxDurationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const clearTimers = useCallback(() => {
    if (elapsedIntervalRef.current) {
      clearInterval(elapsedIntervalRef.current);
      elapsedIntervalRef.current = null;
    }
    if (slowTimerRef.current) {
      clearTimeout(slowTimerRef.current);
      slowTimerRef.current = null;
    }
    if (stuckTimerRef.current) {
      clearTimeout(stuckTimerRef.current);
      stuckTimerRef.current = null;
    }
    if (maxDurationTimerRef.current) {
      clearTimeout(maxDurationTimerRef.current);
      maxDurationTimerRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimers();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [clearTimers]);

  const handleError = useCallback(
    (msg: string) => {
      clearTimers();
      setErrorMsg(msg);
      setState("error");
      setSlowNetwork("none");
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
    },
    [clearTimers]
  );

  const processBlob = useCallback(
    async (blob: Blob) => {
      // Min duration check (0.5s)
      if (elapsed < 1) {
        // elapsed in seconds, 0 means < 1s
        // We'll check via blob size heuristic — very small means too short
        if (blob.size < 1000) {
          handleError("Hold a bit longer next time.");
          return;
        }
      }

      setState("uploading");
      uploadStartRef.current = Date.now();
      setSlowNetwork("none");

      abortControllerRef.current = new AbortController();

      // Slow network timers
      slowTimerRef.current = setTimeout(() => {
        setSlowNetwork("slow");
      }, 8000);
      stuckTimerRef.current = setTimeout(() => {
        setSlowNetwork("stuck");
      }, 25000);

      try {
        // Simulate sequential states for UX feedback
        setTimeout(() => {
          if (abortControllerRef.current?.signal.aborted) return;
          setState("transcribing");
        }, 1000);
        setTimeout(() => {
          if (abortControllerRef.current?.signal.aborted) return;
          setState("extracting-intent");
        }, 2000);

        const result = await uploadAudio({ slug, blob });

        clearTimers();
        setSlowNetwork("none");
        setState("success");
        onResult(result);
      } catch (err) {
        if (abortControllerRef.current?.signal.aborted) return;
        const msg =
          err instanceof Error && err.message.includes("API error")
            ? "Couldn't transcribe that one — the audio might be too short or too noisy. Try again or use a pre-recorded example."
            : "Upload failed. Check your connection and tap to retry.";
        handleError(msg);
      }
    },
    [elapsed, handleError, onResult, slug, clearTimers]
  );

  const startRecording = useCallback(async () => {
    setErrorMsg(null);
    setState("permission-prompt");

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      handleError(
        "Microphone access needed to record. Enable it in your browser, or upload an audio file instead."
      );
      return;
    }

    streamRef.current = stream;

    // Mobile Safari mime fallback chain (locked in plan + research)
    const supportedMime = MIME_TYPES.find((m) =>
      MediaRecorder.isTypeSupported(m)
    );
    if (!supportedMime) {
      stream.getTracks().forEach((t) => t.stop());
      handleError(
        "Your browser recorded in a format we couldn't read. Try Chrome on Android, Safari on iOS, or upload a WAV/OGG file."
      );
      return;
    }

    const recorder = new MediaRecorder(stream, { mimeType: supportedMime });
    mediaRecorderRef.current = recorder;
    chunksRef.current = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: supportedMime });
      stream.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      processBlob(blob);
    };

    recorder.start();
    setState("recording");
    setElapsed(0);

    // Elapsed timer
    elapsedIntervalRef.current = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    // Max 30s auto-stop
    maxDurationTimerRef.current = setTimeout(() => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        // Toast-like feedback via error state is not ideal; we stop and show a note
        stopRecording(true);
      }
    }, 30000);
  }, [handleError, processBlob]);

  const stopRecording = useCallback(
    (capped = false) => {
      clearTimers();
      if (capped) {
        // Will show note after processing
      }
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        setState("recording-stopping");
        mediaRecorderRef.current.stop();
      }
    },
    [clearTimers]
  );

  const handleCancelUpload = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    clearTimers();
    setState("idle");
    setSlowNetwork("none");
  }, [clearTimers]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        if (state === "idle" || state === "success" || state === "error") {
          startRecording();
        } else if (state === "recording") {
          stopRecording();
        }
      }
    },
    [state, startRecording, stopRecording]
  );

  const handleClick = useCallback(() => {
    if (state === "idle" || state === "success" || state === "error") {
      startRecording();
    } else if (state === "recording") {
      stopRecording();
    }
  }, [state, startRecording, stopRecording]);

  const isRecording = state === "recording";
  const isLoading = [
    "uploading",
    "transcribing",
    "extracting-intent",
    "recording-stopping",
  ].includes(state);
  const isError = state === "error";

  const buttonSize =
    "w-[88px] h-[88px] md:w-[96px] md:h-[96px] rounded-full flex items-center justify-center cursor-pointer transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent";

  const buttonClasses = [
    buttonSize,
    isError
      ? "bg-kuma-destructive"
      : isRecording
        ? "bg-kuma-accent"
        : isLoading
          ? "bg-kuma-accent/70"
          : "bg-kuma-accent",
    isRecording && "animate-[pulse_1s_ease-in-out_infinite]",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col items-center gap-md">
      {/* Accessible live region for recording state */}
      <div aria-live="polite" className="sr-only">
        {isRecording ? "Recording started" : ""}
      </div>

      {/* Main recorder button */}
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={buttonClasses}
        aria-label={STATE_LABELS[state]}
        disabled={state === "permission-prompt" || state === "recording-stopping"}
        tabIndex={0}
      >
        {isLoading ? (
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        ) : isRecording ? (
          <Square className="w-8 h-8 text-white fill-white" />
        ) : isError ? (
          <Mic className="w-8 h-8 text-white" />
        ) : (
          <Mic className="w-8 h-8 text-white" />
        )}
      </button>

      {/* State label */}
      <div className="text-center">
        <p
          className={[
            "text-sm font-semibold",
            isError ? "text-kuma-destructive" : "text-kuma-text-secondary",
          ].join(" ")}
        >
          {STATE_LABELS[state]}
        </p>

        {isRecording && (
          <p className="text-xs text-kuma-text-muted mt-xs">
            {formatElapsed(elapsed)}
          </p>
        )}

        {errorMsg && isError && (
          <p className="text-xs text-kuma-destructive mt-xs max-w-xs text-center">
            {errorMsg}
          </p>
        )}
      </div>

      {/* Slow network warnings */}
      {slowNetwork === "slow" && (
        <p className="text-xs text-kuma-text-muted italic">
          Slow connection — still uploading...
        </p>
      )}
      {slowNetwork === "stuck" && (
        <div className="flex flex-col items-center gap-xs">
          <p className="text-xs text-kuma-text-muted italic">
            This is taking longer than usual. Tap to cancel.
          </p>
          <button
            onClick={handleCancelUpload}
            className="text-xs text-kuma-destructive underline"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

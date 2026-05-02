import Link from "next/link";
import Image from "next/image";

export function HeadlineChartSection() {
  return (
    <section
      className="bg-paper-bg"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(26,26,26,0.10)",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "800px" }}>
        {/* Section header */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-3"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
            lineHeight: "1.1",
          }}
        >
          What the benchmark shows
        </h2>
        <p
          className="font-serif mb-10"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "56ch",
          }}
        >
          Transcription accuracy, numeral ASR rate, intent top-1 across six
          system configurations.
        </p>

        {/* Chart embed */}
        <div
          style={{
            border: "1px solid rgba(26,26,26,0.12)",
            borderRadius: "8px",
            overflow: "hidden",
            maxWidth: "720px",
          }}
        >
          <Image
            src="/research/figures/headline.png"
            alt="Bar chart comparing transcription accuracy, numeral ASR rate, and intent top-1 across six Wolof voice AI system configurations: Whisper-1, Gemini 2.0 Flash, Google STT Chirp 2, and three Kuma pipeline variants."
            width={720}
            height={432}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>

        {/* Caption */}
        <p
          className="font-serif"
          style={{
            fontSize: "0.88rem",
            lineHeight: "1.6",
            color: "rgba(26,26,26,0.50)",
            marginTop: "1rem",
            maxWidth: "62ch",
          }}
        >
          Higher is better on every bar. Kuma end-to-end leads on numeral ASR
          and intent; raw ASR providers cluster on transcription.{" "}
          <Link
            href="/research/state-of-wolof-voice-ai-2026.html#methodology"
            className="transition-colors"
            style={{
              color: "rgba(26,26,26,0.60)",
              borderBottom: "1px solid #1D9E75",
              textDecoration: "none",
            }}
          >
            Read the methodology in the report &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";

export function Hero() {
  return (
    <header
      className="bg-paper-bg"
      style={{ borderBottom: "1px solid rgba(26,26,26,0.12)" }}
    >
      <div
        className="mx-auto px-6 pt-24 pb-20"
        style={{ maxWidth: "720px" }}
      >
        {/* H1 — two lines */}
        <h1
          className="font-serif text-paper-ink leading-[1.08] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}
        >
          We publish the only public benchmark of{" "}
          <em className="italic">Wolof voice AI</em>.
        </h1>

        {/* Supporting line */}
        <p
          className="font-serif leading-[1.5] mb-10"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            color: "rgba(26,26,26,0.62)",
          }}
        >
          And we help frontier labs and voice products ship production-grade
          Wolof and French code-switched voice.
        </p>

        {/* Stats strip */}
        <p
          className="font-mono leading-[1.6] mb-12"
          style={{
            fontSize: "0.82rem",
            color: "rgba(26,26,26,0.55)",
            letterSpacing: "0.01em",
          }}
        >
          104 Senegalese voice samples{" "}
          <span aria-hidden="true">·</span>{" "}
          6 system configurations{" "}
          <span aria-hidden="true">·</span>{" "}
          Every system above 0.7 mean WER{" "}
          <span aria-hidden="true">·</span>{" "}
          23 of 67 numeral tests reveal the dërëm gap
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/research/state-of-wolof-voice-ai-2026.html"
            className="font-serif inline-block px-6 py-3 text-paper-bg rounded-sm transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#1D9E75",
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Read the benchmark →
          </Link>
          <a
            href="mailto:hello@kumalabs.ai?subject=Kuma%20engagement%20inquiry"
            className="font-serif inline-block px-6 py-3 rounded-sm transition-colors hover:bg-[rgba(29,158,117,0.08)]"
            style={{
              border: "1px solid #1D9E75",
              color: "#1A1A1A",
              backgroundColor: "transparent",
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Engage Kuma →
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const svgGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const group = svgGroupRef.current;
    if (!group) return;

    const N = 60;
    const W = 880, H = 60, BW = 4, GAP = (W - N * BW) / (N - 1);
    const heights = [
      40, 18, 50, 12, 56, 22, 36, 30, 48, 60, 26, 14, 42, 38, 52,
      16, 32, 46, 24, 56, 28, 20, 44, 50, 12, 36, 54, 18, 30, 42,
    ];

    const bars: SVGRectElement[] = [];
    for (let i = 0; i < N; i++) {
      const h = heights[i % heights.length];
      const x = i * (BW + GAP);
      const y = (H - h) / 2;
      const delay = (i * 0.06) % 1.8;

      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x.toFixed(1));
      rect.setAttribute("y", y.toFixed(1));
      rect.setAttribute("width", String(BW));
      rect.setAttribute("height", String(h));
      rect.setAttribute("rx", "1.5");
      rect.setAttribute("fill", "rgba(26,26,26,0.55)");
      rect.style.transformOrigin = "center bottom";
      rect.style.animationName = "waveBarAnim";
      rect.style.animationDuration = "2.4s";
      rect.style.animationTimingFunction = "ease-in-out";
      rect.style.animationIterationCount = "infinite";
      rect.style.animationDelay = `${delay.toFixed(2)}s`;
      bars.push(rect);
      group.appendChild(rect);
    }

    return () => {
      bars.forEach((b) => b.remove());
    };
  }, []);

  return (
    <header className="bg-paper-bg" style={{ borderBottom: "1px solid rgba(26,26,26,0.12)" }}>
      <style>{`
        @keyframes waveBarAnim {
          0%, 100% { transform: scaleY(0.25); }
          50%       { transform: scaleY(1); }
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-scroll {
          display: inline-block;
          animation: tickerScroll 80s linear infinite;
          white-space: nowrap;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-scroll { animation: none; }
        }
      `}</style>

      {/* Hero content */}
      <div className="max-w-[1100px] mx-auto px-6 pt-24 pb-12">
        {/* Byline */}
        <div
          className="font-mono text-[0.78rem] tracking-[0.06em] uppercase mb-8"
          style={{ color: "rgba(26,26,26,0.40)" }}
          aria-label="Location and date"
        >
          Dakar · April 2026
        </div>

        {/* H1 */}
        <h1
          className="font-serif text-paper-ink leading-[0.98] tracking-[-0.025em] mb-9"
          style={{
            fontSize: "clamp(3.4rem, 7vw, 6.8rem)",
            maxWidth: "12ch",
          }}
        >
          Wolof voice,{" "}
          <em className="italic" style={{ color: "#1D9E75" }}>
            measured
          </em>
          .
        </h1>

        {/* Lead paragraph */}
        <p
          className="font-serif leading-[1.4] tracking-[-0.005em]"
          style={{
            fontSize: "1.5em",
            maxWidth: "600px",
            color: "rgba(26,26,26,0.62)",
          }}
        >
          The first public benchmark of Wolof voice AI across Whisper, Gemini,
          and Google STT — 104 Senegalese voice samples, 622 successful calls,
          20 documented production failure modes. Open corpus. Reproducible
          harness.{" "}
          <a
            href="/research/state-of-wolof-voice-ai-2026.html"
            className="text-paper-ink transition-colors"
            style={{ borderBottom: "1px solid #1D9E75", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1D9E75")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
          >
            Read the report →
          </a>
        </p>

        {/* Waveform */}
        <div
          className="mt-14 pointer-events-none"
          style={{ marginBottom: "-1rem", opacity: 0.55 }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 880 60"
            preserveAspectRatio="none"
            height="60"
            style={{ width: "100%", maxWidth: "880px", display: "block" }}
          >
            <g ref={svgGroupRef} />
          </svg>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="overflow-hidden"
        style={{
          padding: "0.9rem 0",
          borderTop: "1px solid rgba(26,26,26,0.12)",
          borderBottom: "1px solid rgba(26,26,26,0.12)",
          background: "#EDE3D0",
        }}
        aria-hidden="true"
      >
        <div className="ticker-scroll font-mono text-[0.78rem] tracking-[0.01em]" style={{ color: "rgba(26,26,26,0.62)" }}>
          {/* Duplicated segments for seamless loop */}
          {[0, 1].map((dup) => (
            <span key={dup}>
              <span className="inline-block px-[1.6rem] text-paper-ink">104 samples × 6 system configurations</span>
              <span className="px-[0.2rem]" style={{ color: "rgba(26,26,26,0.18)" }}>·</span>
              <span className="inline-block px-[1.6rem]">Every system above 0.7 mean WER on Wolof</span>
              <span className="px-[0.2rem]" style={{ color: "rgba(26,26,26,0.18)" }}>·</span>
              <span className="inline-block px-[1.6rem]">The dërëm gap surfaces in 23 of 67 numeral tests</span>
              <span className="px-[0.2rem]" style={{ color: "rgba(26,26,26,0.18)" }}>·</span>
              <span className="inline-block px-[1.6rem]">Whisper-1 echoes the prompt on near-silent audio</span>
              <span className="px-[0.2rem]" style={{ color: "rgba(26,26,26,0.18)" }}>·</span>
              <span className="inline-block px-[1.6rem] text-paper-ink">Open corpus · Apache-2.0 harness</span>
              <span className="px-[0.2rem]" style={{ color: "rgba(26,26,26,0.18)" }}>·</span>
              <span className="inline-block px-[1.6rem]">Chirp 2 silently accepts wo-SN and returns garbage</span>
              <span className="px-[0.2rem]" style={{ color: "rgba(26,26,26,0.18)" }}>·</span>
              <span className="inline-block px-[1.6rem]">Intent recall: 43% corpus-faithful · 73% schema-restricted</span>
              <span className="px-[0.2rem]" style={{ color: "rgba(26,26,26,0.18)" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

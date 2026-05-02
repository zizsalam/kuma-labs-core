"use client";

// Decorative waveform — ported from .legacy-static/index.html waveform JS (lines 940–954)
// Translated to paper palette: accent green at 50% opacity on cream ground

const BAR_COUNT = 32;

// Pre-baked heights so the shape is organic but deterministic (no hydration mismatch)
const heights = [
  40, 18, 50, 12, 56, 22, 36, 30, 48, 60, 26, 14, 42, 38, 52, 16,
  32, 46, 24, 56, 28, 20, 44, 50, 12, 36, 54, 18, 30, 42, 24, 48,
];

const W = 880;
const H = 120;
const BW = 5;
const GAP = (W - BAR_COUNT * BW) / (BAR_COUNT - 1);

const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
  const rawH = heights[i % heights.length] * 2; // scale up for 120px viewBox
  const x = i * (BW + GAP);
  const y = (H - rawH) / 2;
  // Evenly distributed phase offsets for organic but non-random feel
  const delay = -((i * 2.0) / BAR_COUNT).toFixed(2);
  return { x, y, h: rawH, delay };
});

export function HeroWaveform() {
  return (
    <div
      aria-hidden="true"
      style={{
        maxWidth: "720px",
        width: "100%",
        marginTop: "2rem",
        marginBottom: "1.5rem",
        opacity: 0.5,
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes kuma-wave {
          0%, 100% { transform: scaleY(0.2); }
          50%       { transform: scaleY(1); }
        }
        .kuma-wave-bar {
          transform-origin: center 50%;
          animation: kuma-wave 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .kuma-wave-bar {
            animation: none;
            transform: scaleY(0.5);
          }
        }
      `}</style>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", display: "block" }}
      >
        {bars.map((bar, i) => (
          <rect
            key={i}
            className="kuma-wave-bar"
            x={bar.x.toFixed(1)}
            y={bar.y.toFixed(1)}
            width={BW}
            height={bar.h}
            rx="2"
            fill="#1D9E75"
            style={{ animationDelay: `${bar.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

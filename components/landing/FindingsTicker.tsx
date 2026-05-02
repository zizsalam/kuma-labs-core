// CSS-only horizontally-scrolling ticker of specific benchmark findings.
// Ported from .legacy-static/index.html lines 203–231 + 607–623.
// Translated to paper palette. Reduced-motion: pauses, shows first 3 static.

const findings = [
  "Whisper-1 mean WER 1.049 on Wolof",
  "Chirp 2 (wo-SN probe) silently returns unintelligible output",
  "gpt-4o-transcribe echoes the prompt on near-silent audio",
  "Numeral accuracy: 0.328 (Kuma) vs 0.045 (Whisper-1)",
  "Intent recall: 43% corpus-faithful · 73% schema-restricted",
  "Every system above 0.7 mean WER on 104-sample corpus",
];

function FindingsList() {
  return (
    <>
      {findings.map((finding, i) => (
        <span key={i} style={{ display: "inline-block", padding: "0 1.6rem" }}>
          <em style={{ fontStyle: "italic" }}>{finding}</em>
          {i < findings.length - 1 && (
            <span
              aria-hidden="true"
              style={{
                paddingLeft: "1.6rem",
                color: "#1D9E75",
                fontStyle: "normal",
              }}
            >
              ·
            </span>
          )}
        </span>
      ))}
    </>
  );
}

export function FindingsTicker() {
  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid rgba(26,26,26,0.12)",
        borderBottom: "1px solid rgba(26,26,26,0.12)",
        background: "#F2EBDF",
        overflow: "hidden",
        padding: "0.75rem 0",
        whiteSpace: "nowrap",
      }}
    >
      <style>{`
        @keyframes kuma-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .kuma-ticker-inner {
          display: inline-block;
          animation: kuma-ticker 70s linear infinite;
          font-family: inherit;
          font-size: 0.95rem;
          color: rgba(26,26,26,0.62);
          letter-spacing: 0.005em;
        }
        @media (prefers-reduced-motion: reduce) {
          .kuma-ticker-inner {
            animation: none;
          }
          .kuma-ticker-overflow { overflow: visible; }
          .kuma-ticker-dupe { display: none; }
        }
      `}</style>
      {/* Two copies so the loop is seamless — when the first half scrolls off,
          the second is exactly where the first started */}
      <div className="kuma-ticker-inner">
        <FindingsList />
        <span className="kuma-ticker-dupe">
          <FindingsList />
        </span>
      </div>
    </div>
  );
}

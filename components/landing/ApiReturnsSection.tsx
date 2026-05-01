"use client";

import { useEffect, useState } from "react";

type Demo = {
  phrase: string;
  json: React.ReactNode;
};

const demos: Demo[] = [
  {
    phrase: '"Awa jay na dërëm fukk"',
    json: (
      <>
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"{"}</span>
        {"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;intent&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;sale&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;customer&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;Awa&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;amount&quot;</span>:{" "}
        <span style={{ color: "#2A66A6" }}>50</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;currency&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;XOF&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;needs_confirmation&quot;</span>:{" "}
        <span style={{ color: "#1D9E75" }}>false</span>
        {"\n"}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"}"}</span>
      </>
    ),
  },
  {
    phrase: '"Fatou me doit ñaar junni"',
    json: (
      <>
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"{"}</span>
        {"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;intent&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;credit&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;customer&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;Fatou&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;amount&quot;</span>:{" "}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"{"}</span>{" "}
        <span style={{ color: "#1A1A1A" }}>&quot;value&quot;</span>:{" "}
        <span style={{ color: "#2A66A6" }}>10000</span>,{" "}
        <span style={{ color: "#1A1A1A" }}>&quot;alt&quot;</span>:{" "}
        <span style={{ color: "#2A66A6" }}>2000</span>{" "}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"}"}</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;currency&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;XOF&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;needs_confirmation&quot;</span>:{" "}
        <span style={{ color: "#1D9E75" }}>true</span>
        {"\n"}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"}"}</span>
      </>
    ),
  },
  {
    phrase: '"Mamadou a payé juróom junni"',
    json: (
      <>
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"{"}</span>
        {"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;intent&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;credit&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;customer&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;Mamadou&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;amount&quot;</span>:{" "}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"{"}</span>{" "}
        <span style={{ color: "#1A1A1A" }}>&quot;value&quot;</span>:{" "}
        <span style={{ color: "#2A66A6" }}>25000</span>,{" "}
        <span style={{ color: "#1A1A1A" }}>&quot;alt&quot;</span>:{" "}
        <span style={{ color: "#2A66A6" }}>5000</span>{" "}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"}"}</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;currency&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;XOF&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;needs_confirmation&quot;</span>:{" "}
        <span style={{ color: "#1D9E75" }}>true</span>
        {"\n"}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"}"}</span>
      </>
    ),
  },
  {
    phrase: '"Ousmane a acheté pour téeméer francs"',
    json: (
      <>
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"{"}</span>
        {"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;intent&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;sale&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;customer&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;Ousmane&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;amount&quot;</span>:{" "}
        <span style={{ color: "#2A66A6" }}>100</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;currency&quot;</span>:{" "}
        <span style={{ color: "#B9501F" }}>&quot;XOF&quot;</span>,{"\n  "}
        <span style={{ color: "#1A1A1A" }}>&quot;needs_confirmation&quot;</span>:{" "}
        <span style={{ color: "#1D9E75" }}>false</span>
        {"\n"}
        <span style={{ color: "rgba(26,26,26,0.40)" }}>{"}"}</span>
      </>
    ),
  },
];

export function ApiReturnsSection() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % demos.length);
        setVisible(true);
      }, 400);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const current = demos[idx];

  return (
    <section
      style={{
        padding: "5rem 0",
        background: "#EDE3D0",
        borderTop: "1px solid rgba(26,26,26,0.12)",
        borderBottom: "1px solid rgba(26,26,26,0.12)",
      }}
    >
      <style>{`
        @keyframes liveDotPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%       { opacity: 1; transform: scale(1.15); }
        }
        .live-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: #1D9E75;
          border-radius: 50%;
          margin-right: 0.5rem;
          vertical-align: middle;
          animation: liveDotPulse 1.6s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-[960px] mx-auto px-6">
        {/* Intro */}
        <div className="mb-10" style={{ maxWidth: "580px" }}>
          <h2
            className="font-serif text-paper-ink tracking-[-0.015em] mb-[0.7rem]"
            style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)", lineHeight: "1.08" }}
          >
            What the API actually returns.
          </h2>
          <p className="font-mono text-[0.85rem] leading-[1.6]" style={{ color: "rgba(26,26,26,0.62)" }}>
            <span className="live-dot" aria-hidden="true" />
            live response · rotating examples
          </p>
        </div>

        {/* Demo pair */}
        <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Phrase card */}
          <div
            className="flex flex-col"
            style={{
              background: "#F2EBDF",
              border: "1px solid rgba(26,26,26,0.12)",
              padding: "1.6rem 1.7rem",
              borderRadius: "3px",
              minHeight: "220px",
              transition: "opacity 0.4s ease",
              opacity: visible ? 1 : 0,
            }}
          >
            <div
              className="font-mono text-[0.7rem] tracking-[0.06em] uppercase mb-4"
              style={{ color: "rgba(26,26,26,0.40)" }}
            >
              Merchant speaks
            </div>
            <div
              className="font-serif italic text-paper-ink"
              style={{ fontSize: "1.4rem", lineHeight: "1.3" }}
            >
              {current.phrase}
            </div>
          </div>

          {/* JSON card */}
          <div
            className="flex flex-col"
            style={{
              background: "#F2EBDF",
              border: "1px solid rgba(26,26,26,0.12)",
              padding: "1.6rem 1.7rem",
              borderRadius: "3px",
              minHeight: "220px",
              transition: "opacity 0.4s ease",
              opacity: visible ? 1 : 0,
            }}
          >
            <div
              className="font-mono text-[0.7rem] tracking-[0.06em] uppercase mb-4"
              style={{ color: "rgba(26,26,26,0.40)" }}
            >
              JSON out
            </div>
            <pre
              className="font-mono text-[0.85rem] text-paper-ink"
              style={{ lineHeight: "1.75", whiteSpace: "pre-wrap" }}
            >
              {current.json}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

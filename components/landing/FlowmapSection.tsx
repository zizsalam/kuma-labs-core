export function FlowmapSection() {
  return (
    <section className="bg-paper-bg" style={{ padding: "5.5rem 0" }}>
      <style>{`
        @keyframes flowpulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }
        .flow-dot-anim { animation: flowpulse 2.4s ease-in-out infinite; }
        .flow-dot-anim:nth-child(2) { animation-delay: 0.3s; }
        .flow-dot-anim:nth-child(3) { animation-delay: 0.6s; }
        .flow-dot-anim:nth-child(4) { animation-delay: 0.9s; }
        .flow-dot-anim:nth-child(5) { animation-delay: 1.2s; }
        @media (prefers-reduced-motion: reduce) {
          .flow-dot-anim { animation: none; opacity: 1; }
        }
        @media (max-width: 768px) {
          .flowmap-canvas-wrap { display: none; }
          .flow-fallback-wrap { display: block; }
        }
      `}</style>

      <div className="max-w-[1100px] mx-auto px-6">
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-[1.8rem]"
          style={{ fontSize: "clamp(2.1rem, 3.9vw, 3.3rem)", lineHeight: "1.08", maxWidth: "22ch" }}
        >
          From utterance to ledger entry.
        </h2>
        <p className="font-serif text-paper-ink" style={{ lineHeight: "1.6", marginBottom: "1.1em", maxWidth: "720px" }}>
          Every voice input runs the same six-step pipeline. ASR → Wolof parser
          → intent classification → validation → merchant confirmation → write.
          Provider-agnostic at every stage. Always human in the loop. Under
          three seconds end-to-end.
        </p>

        {/* SVG flowmap — desktop */}
        <div
          className="flowmap-canvas-wrap"
          style={{
            margin: "3rem 0 2rem",
            position: "relative",
            background: "rgba(26,26,26,0.025)",
            border: "1px solid rgba(26,26,26,0.12)",
            borderRadius: "3px",
            padding: "1.2rem 1rem 0.8rem",
          }}
        >
          <svg
            viewBox="0 0 1080 360"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "auto", display: "block" }}
            aria-hidden="true"
          >
            <defs>
              <pattern id="dotgrid" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.7" fill="rgba(26,26,26,0.10)" />
              </pattern>
            </defs>

            {/* Dotted background */}
            <rect x="0" y="0" width="1080" height="360" fill="url(#dotgrid)" opacity="0.7" />

            {/* INPUT BAND */}
            <text x="40" y="32" fontFamily="'JetBrains Mono', monospace" fontSize="10" letterSpacing="0.1em" fill="rgba(26,26,26,0.40)">UTTERANCES</text>
            <g fontFamily="'Instrument Serif', Georgia, serif" fontStyle="italic" fontSize="15" fill="rgba(26,26,26,0.62)">
              <text x="40" y="100">&quot;Fatou me doit ñaar junni&quot;</text>
              <text x="40" y="190">&quot;Awa jay na dërëm fukk&quot;</text>
              <text x="40" y="280">&quot;Téeméer francs&quot;</text>
            </g>

            {/* INPUT DOT CLUSTERS */}
            <g fill="#1D9E75">
              {/* Cluster 1 */}
              <circle cx="270" cy="100" r="2.5" />
              <circle cx="278" cy="92" r="2" />
              <circle cx="280" cy="106" r="2.5" />
              <circle cx="288" cy="100" r="2" />
              <circle cx="285" cy="114" r="1.5" />
              <circle cx="296" cy="92" r="2" fill="none" stroke="#1D9E75" strokeWidth="1" />
              <circle cx="298" cy="105" r="1.8" />
              {/* Cluster 2 */}
              <circle cx="270" cy="190" r="2.5" />
              <circle cx="278" cy="182" r="2" />
              <circle cx="280" cy="196" r="2.5" />
              <circle cx="288" cy="190" r="2" />
              <circle cx="285" cy="178" r="1.5" />
              <circle cx="296" cy="194" r="2" fill="none" stroke="#1D9E75" strokeWidth="1" />
              <circle cx="298" cy="186" r="1.8" />
              {/* Cluster 3 */}
              <circle cx="270" cy="280" r="2.5" />
              <circle cx="278" cy="272" r="2" />
              <circle cx="280" cy="286" r="2.5" />
              <circle cx="288" cy="280" r="2" />
              <circle cx="285" cy="292" r="1.5" />
              <circle cx="296" cy="274" r="2" fill="none" stroke="#1D9E75" strokeWidth="1" />
            </g>

            {/* STREAMLINES */}
            <g stroke="rgba(26,26,26,0.20)" fill="none" strokeWidth="0.9">
              <path d="M 305 100 Q 360 110, 410 165" />
              <path d="M 305 100 Q 380 130, 420 180" />
              <path d="M 305 190 L 415 188" />
              <path d="M 305 190 Q 360 195, 420 195" />
              <path d="M 305 280 Q 360 270, 410 200" />
              <path d="M 305 280 Q 380 250, 420 195" />
            </g>

            {/* Convergence indicator */}
            <circle cx="425" cy="185" r="3.5" fill="#1D9E75" />

            {/* STAGE 1: ASR */}
            <text x="455" y="65" fontFamily="'JetBrains Mono', monospace" fontSize="9.5" letterSpacing="0.1em" fill="rgba(26,26,26,0.45)">01 · TRANSCRIBED BY ASR</text>
            <text x="455" y="80" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="11" fill="rgba(26,26,26,0.50)">Whisper · Gemini · Google STT</text>
            <g transform="translate(465, 145)" stroke="rgba(26,26,26,0.55)" strokeWidth="2" strokeLinecap="round">
              <line x1="0" y1="35" x2="0" y2="65" />
              <line x1="9" y1="20" x2="9" y2="80" />
              <line x1="18" y1="30" x2="18" y2="70" />
              <line x1="27" y1="10" x2="27" y2="90" />
              <line x1="36" y1="35" x2="36" y2="65" />
              <line x1="45" y1="25" x2="45" y2="75" />
              <line x1="54" y1="40" x2="54" y2="60" />
              <line x1="63" y1="20" x2="63" y2="80" />
              <line x1="72" y1="35" x2="72" y2="65" />
              <line x1="81" y1="30" x2="81" y2="70" />
            </g>

            {/* Flow dots: stage 1 → stage 2 */}
            <g fill="#1D9E75">
              <circle className="flow-dot-anim" cx="565" cy="185" r="2" />
              <circle className="flow-dot-anim" cx="580" cy="185" r="2.5" />
              <circle className="flow-dot-anim" cx="595" cy="185" r="1.8" />
              <circle className="flow-dot-anim" cx="610" cy="185" r="2" />
            </g>

            {/* STAGE 2: PARSER */}
            <text x="640" y="65" fontFamily="'JetBrains Mono', monospace" fontSize="9.5" letterSpacing="0.1em" fill="rgba(26,26,26,0.45)">02 · PARSED + CLASSIFIED</text>
            <text x="640" y="80" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="11" fill="rgba(26,26,26,0.50)">wolof-numbers · Gemini 2.5 Flash</text>
            <g transform="translate(648, 140)">
              <path d="M 0 25 L -8 25 L -8 75 L 0 75" stroke="rgba(26,26,26,0.55)" strokeWidth="1.6" fill="none" />
              <path d="M 80 25 L 88 25 L 88 75 L 80 75" stroke="rgba(26,26,26,0.55)" strokeWidth="1.6" fill="none" />
              <rect x="6" y="35" width="14" height="12" rx="1.5" fill="rgba(26,26,26,0.30)" />
              <rect x="24" y="35" width="14" height="12" rx="1.5" fill="rgba(26,26,26,0.30)" />
              <rect x="42" y="35" width="14" height="12" rx="1.5" fill="rgba(26,26,26,0.30)" />
              <rect x="60" y="35" width="14" height="12" rx="1.5" fill="rgba(26,26,26,0.30)" />
              <rect x="6" y="53" width="14" height="12" rx="1.5" fill="#1D9E75" opacity="0.55" />
              <rect x="24" y="53" width="14" height="12" rx="1.5" fill="rgba(26,26,26,0.30)" />
              <rect x="42" y="53" width="14" height="12" rx="1.5" fill="rgba(26,26,26,0.30)" />
              <rect x="60" y="53" width="14" height="12" rx="1.5" fill="rgba(26,26,26,0.30)" />
            </g>

            {/* Flow dots: stage 2 → stage 3 */}
            <g fill="#1D9E75">
              <circle className="flow-dot-anim" cx="780" cy="185" r="2" />
              <circle className="flow-dot-anim" cx="795" cy="185" r="2.5" />
              <circle className="flow-dot-anim" cx="810" cy="185" r="1.8" />
              <circle className="flow-dot-anim" cx="825" cy="185" r="2" />
            </g>

            {/* STAGE 3: VALIDATE + HITL */}
            <text x="855" y="65" fontFamily="'JetBrains Mono', monospace" fontSize="9.5" letterSpacing="0.1em" fill="rgba(26,26,26,0.45)">03 · VALIDATED · HITL</text>
            <text x="855" y="80" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="11" fill="rgba(26,26,26,0.50)">Kuma rules · merchant confirms</text>
            <g transform="translate(870, 140)">
              <circle cx="22" cy="50" r="22" stroke="rgba(26,26,26,0.55)" strokeWidth="1.6" fill="none" />
              <path d="M 12 50 L 20 58 L 32 42" stroke="#1D9E75" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="70" cy="40" r="6" stroke="rgba(26,26,26,0.55)" strokeWidth="1.5" fill="none" />
              <path d="M 58 65 Q 70 54, 82 65" stroke="rgba(26,26,26,0.55)" strokeWidth="1.5" fill="none" />
            </g>

            {/* Flow dots: stage 3 → output */}
            <g fill="#1D9E75">
              <circle className="flow-dot-anim" cx="975" cy="185" r="2" />
              <circle className="flow-dot-anim" cx="990" cy="185" r="2.5" />
            </g>

            {/* OUTPUT: LEDGER */}
            <text x="1005" y="65" fontFamily="'JetBrains Mono', monospace" fontSize="9.5" letterSpacing="0.1em" fill="#1D9E75">→ LEDGER</text>
            <text x="1005" y="80" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="11" fill="rgba(26,26,26,0.50)">your_app.record</text>
            <g transform="translate(1005, 140)" stroke="rgba(26,26,26,0.55)" strokeWidth="1.2" fill="none">
              <rect x="0" y="0" width="58" height="14" rx="1" />
              <rect x="0" y="18" width="58" height="14" rx="1" />
              <rect x="0" y="36" width="58" height="14" rx="1" />
              <rect x="0" y="54" width="58" height="14" rx="1" fill="rgba(29,158,117,0.14)" stroke="#1D9E75" />
            </g>
          </svg>
        </div>

        {/* Mobile fallback */}
        <div
          className="flow-fallback-wrap hidden"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.85rem",
            color: "rgba(26,26,26,0.62)",
            lineHeight: "1.7",
            margin: "2rem 0",
            padding: "1.2rem 1.4rem",
            background: "rgba(26,26,26,0.025)",
            border: "1px solid rgba(26,26,26,0.12)",
            borderRadius: "3px",
          }}
        >
          <strong style={{ color: "#1A1A1A" }}>Pipeline:</strong> Utterance →
          ASR (Whisper / Gemini / Google STT) →{" "}
          <code>wolof-numbers</code> parser → Gemini 2.5 Flash intent
          classification → Kuma validation rules → merchant HITL confirmation →
          write to your ledger. Six steps, under three seconds.
        </div>

        <p
          className="font-mono text-[0.78rem] mt-2"
          style={{ color: "rgba(26,26,26,0.40)" }}
        >
          Pipeline detail and per-stage timing in{" "}
          <a
            href="/research/state-of-wolof-voice-ai-2026.html#s3"
            className="text-paper-ink transition-colors"
            style={{ borderBottom: "1px solid #1D9E75", textDecoration: "none" }}
          >
            the methodology section
          </a>{" "}
          of the report.
        </p>
      </div>
    </section>
  );
}

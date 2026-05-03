import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "What we found testing Whisper-1 on Wolof in 2026 — Kuma Labs",
  description:
    "OpenAI's whisper-1 posts 1.05 mean WER on 104 Senegalese voice samples — higher than any other system we tested. Here is what that number looks like in production.",
  openGraph: {
    title: "What we found testing Whisper-1 on Wolof in 2026",
    description:
      "OpenAI's whisper-1 posts 1.05 mean WER on 104 Senegalese voice samples. Specific failures, reproduced, with downstream impact.",
    type: "article",
    url: "https://www.kuma-labs.com/blog/whisper-1-wolof-2026",
    publishedTime: "2026-05-02",
    authors: ["Abdoul Aziz Kane"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What we found testing Whisper-1 on Wolof in 2026",
    description:
      "1.05 mean WER. 4,111 hallucinated tokens against 1,352 reference tokens. One silent clip that produced a $300M phantom transaction.",
  },
};

const REPORT = "/research/state-of-wolof-voice-ai-2026.html";

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono, monospace)",
  fontSize: "0.72rem",
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: "rgba(26,26,26,0.40)",
};

const codeStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono, monospace)",
  fontSize: "0.88em",
  background: "rgba(26,26,26,0.06)",
  padding: "0 4px",
  borderRadius: "3px",
};

const linkStyle: React.CSSProperties = {
  color: "rgba(26,26,26,0.78)",
  borderBottom: "1px solid #1D9E75",
  textDecoration: "none",
};

export default function WhisperOneWolofPost() {
  return (
    <article className="bg-paper-bg font-serif text-paper-ink">
      {/* Header */}
      <header
        className="mx-auto px-6 pt-24 pb-12"
        style={{ maxWidth: "720px", borderBottom: "1px solid rgba(26,26,26,0.12)" }}
      >
        <p style={{ ...labelStyle, marginBottom: "1.25rem" }}>
          <Link href="/blog" style={{ color: "rgba(26,26,26,0.55)", textDecoration: "none" }}>
            ← Field notes
          </Link>
        </p>
        <h1
          className="font-serif text-paper-ink tracking-[-0.02em] mb-5"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: "1.1" }}
        >
          What we found testing <em className="italic">Whisper-1</em> on Wolof in 2026.
        </h1>
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "60ch",
            marginBottom: "1.5rem",
          }}
        >
          OpenAI&apos;s <code style={codeStyle}>whisper-1</code> posts the highest mean WER (1.05)
          of any commercial system in our 104-sample Senegalese voice benchmark.
          Here is what that number looks like in production.
        </p>
        <p style={labelStyle}>
          <time dateTime="2026-05-02">May 2, 2026</time>
          <span aria-hidden="true" style={{ margin: "0 0.6rem" }}>·</span>
          By Abdoul Aziz Kane, Kuma Labs
          <span aria-hidden="true" style={{ margin: "0 0.6rem" }}>·</span>
          8 min read
        </p>
      </header>

      {/* Body */}
      <div
        className="mx-auto px-6 py-12"
        style={{ maxWidth: "680px" }}
      >
        {/* Lede */}
        <p
          className="font-serif"
          style={{
            fontSize: "1.18rem",
            lineHeight: "1.65",
            color: "#1A1A1A",
            marginBottom: "1.4rem",
          }}
        >
          A WER of 1.05 means the model produces, on average, more substituted, inserted,
          or deleted tokens than the reference transcript actually contains. It is the
          structural signature of a model encountering a language it was not trained
          for, and producing the phonetically-nearest output it knows — usually English.
        </p>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.4rem" }}>
          We ran the same six-system matrix —{" "}
          <code style={codeStyle}>whisper-1</code>,{" "}
          <code style={codeStyle}>gpt-4o-transcribe</code>,{" "}
          <code style={codeStyle}>gemini-2.5-flash</code>, Google STT v2 Chirp 2 (
          <code style={codeStyle}>fr-FR</code> and{" "}
          <code style={codeStyle}>wo-SN</code> probe), and Kuma&apos;s end-to-end
          pipeline — across 104 Senegalese voice samples. The full numbers, the
          methodology, and 22 documented failure modes live in the{" "}
          <Link href={REPORT} style={linkStyle}>
            State of Wolof Voice AI 2026
          </Link>{" "}
          report. This post is a closer reading of one row in that table:{" "}
          <code style={codeStyle}>whisper-1</code>.
        </p>

        {/* Section 1 */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em]"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
            lineHeight: "1.2",
            margin: "3rem 0 1rem",
          }}
        >
          1. The headline number
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.2rem" }}>
          <code style={codeStyle}>whisper-1</code> mean WER across the 104-sample corpus:{" "}
          <strong>1.049</strong>. Median: <strong>1.000</strong>. Standard deviation:{" "}
          <strong>0.045</strong>. Zero hard errors — every API call returned a transcript.
          By comparison:
        </p>

        <div className="paper-card-tech" style={{ padding: "1.25rem 1.5rem", marginBottom: "1.6rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono, monospace)", fontSize: "0.88rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(26,26,26,0.12)" }}>
                <th style={{ textAlign: "left", padding: "0 0 0.6rem", fontWeight: 500, color: "rgba(26,26,26,0.55)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.7rem" }}>System</th>
                <th style={{ textAlign: "right", padding: "0 0 0.6rem", fontWeight: 500, color: "rgba(26,26,26,0.55)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.7rem" }}>Mean WER</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "0.45rem 0" }}>Chirp 2 (wo-SN probe)</td><td style={{ textAlign: "right" }}>0.730</td></tr>
              <tr><td style={{ padding: "0.45rem 0" }}>Kuma end-to-end</td><td style={{ textAlign: "right" }}>0.773</td></tr>
              <tr><td style={{ padding: "0.45rem 0" }}>Whisper · gpt-4o-transcribe</td><td style={{ textAlign: "right" }}>0.814</td></tr>
              <tr><td style={{ padding: "0.45rem 0" }}>Gemini 2.5 Flash</td><td style={{ textAlign: "right" }}>0.892</td></tr>
              <tr><td style={{ padding: "0.45rem 0" }}>Chirp 2 (fr-FR)</td><td style={{ textAlign: "right" }}>0.918</td></tr>
              <tr style={{ borderTop: "1px solid rgba(26,26,26,0.18)" }}>
                <td style={{ padding: "0.6rem 0 0", fontWeight: 500 }}>Whisper · whisper-1</td>
                <td style={{ textAlign: "right", padding: "0.6rem 0 0", fontWeight: 500 }}>1.049</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.4rem" }}>
          Every system above 0.7. The story of African voice AI in 2026 is not that
          one provider is solved and one is broken — it is that no off-the-shelf
          system is production-ready for Wolof out of the box. But{" "}
          <code style={codeStyle}>whisper-1</code> is the floor, and the gap between
          it and its sibling{" "}
          <code style={codeStyle}>gpt-4o-transcribe</code> (0.814) is the most
          informative datapoint in the entire matrix: same vendor, same audio,
          quarter-of-a-WER apart.
        </p>

        {/* Section 2 */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em]"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
            lineHeight: "1.2",
            margin: "3rem 0 1rem",
          }}
        >
          2. Where the extra tokens come from
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.2rem" }}>
          The 104 reference transcripts contain <strong>1,352 tokens</strong> in total.{" "}
          <code style={codeStyle}>whisper-1</code> emits{" "}
          <strong>4,111 hypothesis tokens</strong> against them — roughly three
          tokens of model output for every one token actually spoken. The same
          audio fed to <code style={codeStyle}>gpt-4o-transcribe</code> returns
          1,938 hypothesis tokens. Whisper-1 is not failing by giving up. It is
          failing by over-generating.
        </p>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.4rem" }}>
          The pattern is consistent: when the model encounters a Wolof phoneme
          sequence it has no training distribution for, it produces the
          phonetically-nearest English continuation, then keeps going. A
          15-token Wolof utterance becomes a 45-token English-flavoured
          paraphrase of nothing. The transcripts are syntactically valid English
          sentences; they are unrelated to the audio.
        </p>

        {/* Section 3 */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em]"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
            lineHeight: "1.2",
            margin: "3rem 0 1rem",
          }}
        >
          3. The &quot;you&quot; pattern on silence
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.2rem" }}>
          Fed two seconds of near-silent audio — a single click, a breath, a
          microphone pop — <code style={codeStyle}>whisper-1</code> reliably
          emits the single token <code style={codeStyle}>&quot;you&quot;</code>.
          No error flag, no warning, no error code. The API returns 200 OK and
          a structurally valid transcript that contains exactly the wrong word.
        </p>

        <div className="paper-card-tech" style={{ padding: "1.25rem 1.5rem", marginBottom: "1.6rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(26,26,26,0.12)" }}>
                <th style={{ textAlign: "left", padding: "0 0 0.6rem", fontWeight: 500, color: "rgba(26,26,26,0.55)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.7rem" }}>System</th>
                <th style={{ textAlign: "left", padding: "0 0 0.6rem", fontWeight: 500, color: "rgba(26,26,26,0.55)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.7rem" }}>Output on near-silence</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "0.45rem 1rem 0.45rem 0" }}>Whisper · whisper-1</td><td style={{ padding: "0.45rem 0" }}>&quot;you&quot;</td></tr>
              <tr><td style={{ padding: "0.45rem 1rem 0.45rem 0" }}>Whisper · gpt-4o-transcribe</td><td style={{ padding: "0.45rem 0" }}>&quot;Damit&quot; / &quot;Thanks&quot;</td></tr>
              <tr><td style={{ padding: "0.45rem 1rem 0.45rem 0" }}>Gemini 2.5 Flash</td><td style={{ padding: "0.45rem 0" }}>French / German filler</td></tr>
              <tr><td style={{ padding: "0.45rem 1rem 0.45rem 0" }}>Chirp 2 (wo-SN probe)</td><td style={{ padding: "0.45rem 0" }}>Digit sequence</td></tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.4rem" }}>
          None of these outputs are labeled as silence. They arrive as normal
          transcription responses. A fintech integration that does not gate on
          silence at the client will receive plausible-looking transcripts on
          every accidental mic activation, every background-noise burst, every
          button mis-tap. The downstream pipeline parses them as if they were
          real speech.{" "}
          <Link href={`${REPORT}#f-1-1`} style={linkStyle}>
            Failure 1·1
          </Link>{" "}
          in the report walks through the full set of provider-divergent silence
          hallucinations.
        </p>

        {/* Section 4 — prompt echo callout */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em]"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
            lineHeight: "1.2",
            margin: "3rem 0 1rem",
          }}
        >
          4. The prompt-echo trap
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.2rem" }}>
          A standard accuracy lever for Whisper deployments is to pass a custom
          vocabulary prompt at request time — Wolof and French merchant terms
          in our case. Adding a prompt is documented, supported, and recommended.
          It also creates a new failure surface that does not exist without it.
        </p>

        <div className="paper-card" style={{ padding: "1.5rem 1.75rem", marginBottom: "1.6rem", borderLeft: "3px solid #1D9E75" }}>
          <p style={{ ...labelStyle, marginBottom: "0.6rem" }}>What happened</p>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", margin: 0, color: "#1A1A1A" }}>
            Fed near-silent audio with the merchant-vocabulary prompt active,
            Whisper echoed the prompt back into the transcript verbatim:{" "}
            <code style={codeStyle}>
              &quot;jënd jay ñaar junni téeméer milyon dërëm crédit CFA&quot;
            </code>
            . Our number parser then dutifully extracted{" "}
            <code style={codeStyle}>téeméer milyon</code> as an amount:{" "}
            <strong>200,000,000,000 XOF</strong> — roughly $300M USD. It passed
            every automated check. The pipeline returned a structured
            MerchantIntent for a two-hundred-billion-franc transaction.
          </p>
        </div>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.4rem" }}>
          We reproduced this deterministically. A fintech integration that
          writes these records to a ledger without a per-transaction cap check
          would have posted it. The lesson is not &quot;don&apos;t use prompts&quot;
          — prompts are how you get usable Wolof out of Whisper. The lesson is
          that any parser downstream of a prompted ASR must treat the prompt
          vocabulary as untrusted input. We added a configurable per-transaction
          amount cap to our validator the same week. Full mechanism in{" "}
          <Link href={`${REPORT}#f-4-1`} style={linkStyle}>
            Failure 4·1
          </Link>
          .
        </p>

        {/* Section 5 */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em]"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
            lineHeight: "1.2",
            margin: "3rem 0 1rem",
          }}
        >
          5. Where it&apos;s worst — French-accented Wolof
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.2rem" }}>
          The 104-sample corpus is split across three locale tags:{" "}
          <code style={codeStyle}>wo-SN</code> (Wolof),{" "}
          <code style={codeStyle}>fr-SN</code> (French as spoken in Senegal,
          often by Wolof L1 speakers), and{" "}
          <code style={codeStyle}>fr-FR</code> (Senegalese French closer to a
          metropolitan accent). Whisper-1&apos;s segment WER:
        </p>

        <div className="paper-card-tech" style={{ padding: "1.25rem 1.5rem", marginBottom: "1.4rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono, monospace)", fontSize: "0.88rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(26,26,26,0.12)" }}>
                <th style={{ textAlign: "left", padding: "0 0 0.6rem", fontWeight: 500, color: "rgba(26,26,26,0.55)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.7rem" }}>Segment</th>
                <th style={{ textAlign: "right", padding: "0 0 0.6rem", fontWeight: 500, color: "rgba(26,26,26,0.55)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.7rem" }}>Mean WER</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "0.45rem 0" }}>wo-SN (Wolof)</td><td style={{ textAlign: "right" }}>1.134</td></tr>
              <tr><td style={{ padding: "0.45rem 0" }}>fr-FR (Senegalese French)</td><td style={{ textAlign: "right" }}>1.022</td></tr>
              <tr style={{ borderTop: "1px solid rgba(26,26,26,0.18)" }}>
                <td style={{ padding: "0.6rem 0 0", fontWeight: 500 }}>fr-SN (Wolof-L1 French)</td>
                <td style={{ textAlign: "right", padding: "0.6rem 0 0", fontWeight: 500 }}>1.658</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.4rem" }}>
          The model handles Wolof badly (1.13) but it handles{" "}
          <em>French spoken with a Wolof accent</em> dramatically worse (1.66).
          That is the median register of urban Dakar — most users in any
          consumer-facing voice product will speak this way. If you ship in
          Senegal and Whisper-1 is your ASR, the worst-performing segment is
          also the most-spoken one.
        </p>

        {/* Section 6 — what to do */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em]"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
            lineHeight: "1.2",
            margin: "3rem 0 1rem",
          }}
        >
          6. What this means for product teams
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1rem" }}>
          Three concrete things, in order of how cheap they are to ship:
        </p>

        <ol style={{ fontSize: "1rem", lineHeight: "1.75", paddingLeft: "1.25rem", marginBottom: "1.4rem" }}>
          <li style={{ marginBottom: "0.9rem" }}>
            <strong>Gate silence at the client with a VAD before you call the ASR.</strong>{" "}
            Two seconds of WebRTC VAD eliminates the entire silence-hallucination class
            for every provider in the matrix, not just Whisper-1. It is free, deterministic,
            and runs in the browser.
          </li>
          <li style={{ marginBottom: "0.9rem" }}>
            <strong>Treat your ASR prompt as untrusted input downstream.</strong>{" "}
            Custom vocabulary is useful and dangerous. Any parser that consumes
            Whisper output should be tested against the prompt being echoed back
            verbatim. If a 200-billion-franc transaction would pass your validators,
            your validators are the bug.
          </li>
          <li style={{ marginBottom: "0.9rem" }}>
            <strong>Cap business-meaningful values at a plausible business maximum.</strong>{" "}
            The schema you accept is not the cap you should enforce. A merchant-payments
            schema that allows up to 10¹² will eventually receive 10¹¹. Pick a number
            an actual customer could plausibly transact in one utterance, and reject
            anything above it with a clear log line.
          </li>
        </ol>

        {/* Section 7 — closing */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em]"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
            lineHeight: "1.2",
            margin: "3rem 0 1rem",
          }}
        >
          7. Why we still test it
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.2rem" }}>
          <code style={codeStyle}>whisper-1</code> is a 2022 model. The right
          framing is not &quot;is Whisper-1 production-ready for African voice&quot;
          — it isn&apos;t — but rather &quot;how does each new generation move
          the curve&quot;. The 0.23 mean-WER gap between{" "}
          <code style={codeStyle}>whisper-1</code> (1.05) and{" "}
          <code style={codeStyle}>gpt-4o-transcribe</code> (0.81) is what one
          generation of multilingual training did. The next generation will move
          it again, in some direction.
        </p>

        <p style={{ fontSize: "1rem", lineHeight: "1.75", marginBottom: "1.4rem" }}>
          We will rerun the matrix when new versions ship and publish the diff.
          That is the entire job.
        </p>

        {/* CTA strip */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(26,26,26,0.12)",
          }}
        >
          <p
            className="font-serif italic"
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.7",
              color: "rgba(26,26,26,0.62)",
              marginBottom: "1.5rem",
              maxWidth: "60ch",
            }}
          >
            The full 22-failure catalogue, methodology, BibTeX, and per-provider
            breakdowns are in the{" "}
            <Link href={REPORT} style={linkStyle}>
              State of Wolof Voice AI 2026
            </Link>{" "}
            report. Frontier-lab and voice-product teams running Wolof or
            French-Senegalese voice in production can{" "}
            <Link href="/engage" style={linkStyle}>
              engage Kuma directly
            </Link>{" "}
            for an evaluation against your traffic.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={REPORT}
              className="font-serif inline-block px-5 py-2.5 text-paper-bg rounded-sm transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#1D9E75",
                fontSize: "0.95rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Read the full report →
            </Link>
            <Link
              href="/engage"
              className="font-serif inline-block px-5 py-2.5 rounded-sm transition-colors hover:bg-[rgba(29,158,117,0.08)]"
              style={{
                border: "1px solid #1D9E75",
                color: "#1A1A1A",
                backgroundColor: "transparent",
                fontSize: "0.95rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Engage Kuma →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

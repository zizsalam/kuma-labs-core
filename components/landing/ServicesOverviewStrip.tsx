"use client";

import React from "react";
import { useReveal } from "@/lib/hooks/useReveal";

type Service = {
  title: string;
  description: React.ReactNode;
  price: string;
};

const services: Service[] = [
  {
    title: "Evaluations",
    description:
      "We benchmark your ASR, TTS, or LLM against our Wolof + French test set. Comparative report, failure-mode analysis, production-readiness verdict.",
    price: "From $15,000 · 4–6 weeks",
  },
  {
    title: "Datasets",
    description:
      "Hand-curated Wolof and Bambara voice corpora. Consent-cleared, domain-tuned, delivered with the harness to evaluate them.",
    price: "From $30,000 · 6–12 weeks",
  },
];

const STAGGER_DELAYS = [0, 200];

export function ServicesOverviewStrip() {
  const { ref: gridRef, revealed } = useReveal<HTMLDivElement>(0.10);

  return (
    <section
      className="bg-paper-bg"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(26,26,26,0.10)",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "960px" }}>
        {/* Section header */}
        <h2
          className="font-serif text-paper-ink tracking-[-0.015em] mb-3"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
            lineHeight: "1.1",
          }}
        >
          How to engage.
        </h2>
        <p
          className="font-serif mb-10"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "52ch",
          }}
        >
          Two ways to work with us. Prices are published.
        </p>

        {/* 2-column block grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`paper-card reveal-target${revealed ? " is-revealed" : ""}`}
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                transitionDelay: `${STAGGER_DELAYS[i]}ms`,
              }}
            >
              <div
                className="font-serif text-paper-ink mb-3"
                style={{ fontSize: "1.2rem", lineHeight: "1.2" }}
              >
                {service.title}
              </div>
              <p
                className="font-serif text-paper-ink"
                style={{
                  fontSize: "0.92rem",
                  lineHeight: "1.6",
                  color: "rgba(26,26,26,0.72)",
                  marginBottom: "1.25rem",
                  flex: 1,
                }}
              >
                {service.description}
              </p>
              <div
                className="font-mono"
                style={{
                  fontSize: "0.8rem",
                  color: "#1D9E75",
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {service.price}
              </div>
              <a
                href="/services"
                className="font-serif inline-block transition-colors"
                style={{
                  fontSize: "0.92rem",
                  color: "#1A1A1A",
                  textDecoration: "none",
                  borderBottom: "1px solid #1D9E75",
                  paddingBottom: "1px",
                  alignSelf: "flex-start",
                }}
              >
                Engage &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Demoted integration line */}
        <p
          className="font-serif italic text-paper-ink-mid"
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.5",
            marginTop: "2rem",
            maxWidth: "640px",
            color: "rgba(26,26,26,0.62)",
          }}
        >
          Production integration of{" "}
          <code className="font-mono" style={{ fontSize: "0.9em", fontStyle: "normal" }}>wolof-numbers</code>
          ,{" "}
          <code className="font-mono" style={{ fontSize: "0.9em", fontStyle: "normal" }}>wolof-ner</code>
          , and our domain dictionaries into operator voice stacks is engaged case-by-case, typically following an evaluation.{" "}
          Provider-agnostic; we work alongside Whisper, Gemini, Chirp, AssemblyAI, Deepgram, or your own ASR.{" "}
          <a href="/services" style={{ color: "var(--paper-ink, #1A1A1A)", textDecoration: "underline", textDecorationColor: "#1D9E75" }}>See custom engagements &rarr;</a>
        </p>
      </div>
    </section>
  );
}

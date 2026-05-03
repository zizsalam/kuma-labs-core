import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog — Kuma Labs",
  description:
    "Field notes on Wolof and French voice AI — specific models, specific failures, what product teams should do about them.",
};

type Post = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  dateISO: string;
  readTime: string;
};

const posts: Post[] = [
  {
    slug: "whisper-1-wolof-2026",
    title: "What we found testing Whisper-1 on Wolof in 2026",
    dek: "OpenAI's whisper-1 posts the highest mean WER (1.05) of any system in our 104-sample Senegalese voice benchmark. Here is what that number actually looks like in production.",
    date: "May 2, 2026",
    dateISO: "2026-05-02",
    readTime: "8 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-paper-bg font-serif text-paper-ink">
      {/* Page header */}
      <div
        className="mx-auto px-6 pt-24 pb-16"
        style={{ maxWidth: "720px", borderBottom: "1px solid rgba(26,26,26,0.12)" }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.40)",
            marginBottom: "1.25rem",
          }}
        >
          Field notes
        </p>
        <h1
          className="font-serif text-paper-ink tracking-[-0.02em] mb-5"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", lineHeight: "1.08" }}
        >
          State of <em className="italic">African voice AI</em>.
        </h1>
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: "1.55",
            color: "rgba(26,26,26,0.62)",
            maxWidth: "54ch",
          }}
        >
          Monthly notes on what specific models do on specific Wolof and French
          inputs — and what product teams should plan for.
        </p>
      </div>

      {/* Post list */}
      <div className="mx-auto px-6 py-12" style={{ maxWidth: "720px" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: "2.5rem" }}>
              <article>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "rgba(26,26,26,0.40)",
                    marginBottom: "0.6rem",
                  }}
                >
                  <time dateTime={post.dateISO}>{post.date}</time>
                  <span aria-hidden="true" style={{ margin: "0 0.6rem" }}>·</span>
                  {post.readTime}
                </p>
                <h2
                  className="font-serif text-paper-ink tracking-[-0.015em]"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 1.95rem)",
                    lineHeight: "1.18",
                    marginBottom: "0.6rem",
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      color: "#1A1A1A",
                      textDecoration: "none",
                      borderBottom: "1px solid transparent",
                      transition: "border-color 0.15s ease",
                    }}
                    className="hover:!border-b-[#1D9E75]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p
                  className="font-serif"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "rgba(26,26,26,0.72)",
                    marginBottom: "0.75rem",
                    maxWidth: "60ch",
                  }}
                >
                  {post.dek}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-serif"
                  style={{
                    color: "#1D9E75",
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    borderBottom: "1px solid #1D9E75",
                    paddingBottom: "1px",
                  }}
                >
                  Read &rarr;
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer note */}
      <div className="mx-auto px-6 pb-24" style={{ maxWidth: "720px" }}>
        <p
          className="font-serif italic"
          style={{
            fontSize: "0.93rem",
            lineHeight: "1.7",
            color: "rgba(26,26,26,0.55)",
            maxWidth: "60ch",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(26,26,26,0.12)",
          }}
        >
          New post roughly once a month. For the underlying benchmark, see the{" "}
          <Link
            href="/research/state-of-wolof-voice-ai-2026.html"
            style={{
              color: "rgba(26,26,26,0.65)",
              borderBottom: "1px solid #1D9E75",
              textDecoration: "none",
            }}
          >
            State of Wolof Voice AI 2026
          </Link>{" "}
          report.
        </p>
      </div>
    </div>
  );
}

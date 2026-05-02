export function SiteFooter() {
  return (
    <footer
      style={{
        padding: "3rem 0 4rem",
        borderTop: "1px solid rgba(26,26,26,0.12)",
        marginTop: "5rem",
        background: "#F2EBDF",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .site-footer-link {
          font-family: var(--font-jetbrains-mono, 'JetBrains Mono', monospace);
          font-size: 0.78rem;
          color: rgba(26,26,26,0.62);
          text-decoration: none;
          border: none;
          transition: color 0.15s ease;
        }
        .site-footer-link:hover { color: #1A1A1A; }
      ` }} />

      <div className="max-w-[1100px] mx-auto px-6 flex flex-wrap justify-between items-baseline gap-6">
        <div
          className="font-mono text-[0.74rem] tracking-[0.04em]"
          style={{ color: "rgba(26,26,26,0.40)" }}
        >
          Dakar · © 2026 Kuma Labs Inc.
        </div>
        <ul className="flex gap-[1.8rem] list-none">
          <li>
            <a href="/research/state-of-wolof-voice-ai-2026.html" className="site-footer-link">
              research
            </a>
          </li>
          <li>
            <a href="mailto:hello@kumalabs.ai?subject=Kuma%20pricing%20inquiry" className="site-footer-link">
              services
            </a>
          </li>
          <li>
            <a href="mailto:hello@kumalabs.ai?subject=Kuma%20engagement%20inquiry" className="site-footer-link">
              engage
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

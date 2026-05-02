import Link from "next/link";

export function SiteNav() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        padding: "1.4rem 0",
        borderBottom: "1px solid rgba(26,26,26,0.12)",
        background: "rgba(242,235,223,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .site-nav-link {
          color: rgba(26,26,26,0.62);
          text-decoration: none;
          border: none;
          font-family: var(--font-jetbrains-mono, 'JetBrains Mono', monospace);
          font-size: 0.78rem;
          letter-spacing: 0.02em;
          transition: color 0.15s ease;
        }
        .site-nav-link:hover { color: #1A1A1A; }
      ` }} />

      <div className="max-w-[1100px] mx-auto px-6 flex items-baseline justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="site-nav-logo font-serif text-paper-ink"
          style={{
            fontSize: "1.5rem",
            letterSpacing: "-0.015em",
            textDecoration: "none",
            border: "none",
          }}
          aria-label="Kuma Labs home"
        >
          Kuma <em className="italic" style={{ color: "#1D9E75" }}>Labs</em>
        </Link>

        {/* Nav links */}
        <nav className="flex items-baseline gap-[1.8rem]" aria-label="Main navigation">
          <Link
            href="/research/state-of-wolof-voice-ai-2026.html"
            className="site-nav-link"
          >
            research
          </Link>
          <Link
            href="/services"
            className="site-nav-link"
          >
            services
          </Link>
          <Link
            href="/engage"
            className="site-nav-link"
          >
            engage
          </Link>
        </nav>
      </div>
    </header>
  );
}

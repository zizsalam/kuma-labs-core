import Image from "next/image";
import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-kuma-border">
      <div className="max-w-5xl mx-auto px-md py-sm flex items-center justify-between gap-lg">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent rounded"
          aria-label="Kuma Labs home"
        >
          <Image
            src="/logo/kuma-wordmark.svg"
            alt="Kuma Labs"
            width={130}
            height={26}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-lg text-sm font-medium text-kuma-text-secondary">
          <Link
            href="/research/state-of-wolof-voice-ai-2026.html"
            className="hover:text-kuma-text-primary transition-colors"
          >
            Research
          </Link>
          <Link
            href="/demos"
            className="hover:text-kuma-text-primary transition-colors"
          >
            Demos
          </Link>
          <a
            href="https://docs.kuma-labs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kuma-text-primary transition-colors"
          >
            Docs
          </a>
        </nav>

        {/* CTA */}
        <a
          href="/research/state-of-wolof-voice-ai-2026.html"
          className="flex-shrink-0 bg-kuma-accent text-kuma-text-primary px-md py-xs text-sm font-semibold rounded-md hover:brightness-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
        >
          Read the report
        </a>
      </div>
    </header>
  );
}

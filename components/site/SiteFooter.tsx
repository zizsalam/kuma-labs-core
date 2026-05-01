export function SiteFooter() {
  return (
    <footer className="border-t border-kuma-border bg-white">
      <div className="max-w-5xl mx-auto px-md py-2xl">
        <div className="flex flex-col gap-xl md:flex-row md:justify-between md:gap-2xl">
          {/* Brand */}
          <div className="md:max-w-xs">
            <p className="text-sm font-semibold text-kuma-text-primary">
              Kuma Labs
            </p>
            <p className="mt-xs text-sm text-kuma-text-muted leading-5">
              Voice-to-JSON infrastructure for West African operators. Built in
              Dakar.
            </p>
            <p className="mt-md text-xs text-kuma-text-muted">
              © 2026 Kuma Labs · Built in Dakar
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-xl md:gap-2xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
                Research
              </p>
              <ul className="flex flex-col gap-xs text-sm text-kuma-text-secondary">
                <li>
                  <a
                    href="/research/state-of-wolof-voice-ai-2026.html"
                    className="hover:text-kuma-text-primary transition-colors"
                  >
                    State of Wolof Voice AI 2026
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
                Product
              </p>
              <ul className="flex flex-col gap-xs text-sm text-kuma-text-secondary">
                <li>
                  <a href="/demos" className="hover:text-kuma-text-primary transition-colors">
                    Demos
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.kuma-labs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-kuma-text-primary transition-colors"
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
                Legal
              </p>
              <ul className="flex flex-col gap-xs text-sm text-kuma-text-secondary">
                <li>
                  <a
                    href="https://docs.kuma-labs.com/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-kuma-text-primary transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.kuma-labs.com/legal/dpa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-kuma-text-primary transition-colors"
                  >
                    DPA
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-kuma-text-muted mb-sm">
                Contact
              </p>
              <ul className="flex flex-col gap-xs text-sm text-kuma-text-secondary">
                <li>
                  <a
                    href="mailto:hello@kumalabs.ai"
                    className="hover:text-kuma-text-primary transition-colors"
                  >
                    hello@kumalabs.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

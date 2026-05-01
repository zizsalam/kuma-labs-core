export function Hero() {
  return (
    <section className="bg-kuma-bg pt-3xl pb-2xl">
      <div className="max-w-3xl mx-auto px-md text-center">
        {/* Research badge */}
        <div className="inline-flex items-center gap-sm mb-xl text-xs font-medium text-kuma-text-muted border border-kuma-border rounded-full px-md py-xs bg-white">
          <span>Research · April 2026</span>
          <span className="bg-kuma-accent text-kuma-text-primary rounded-full px-sm py-xs font-semibold text-[10px] uppercase tracking-wider">
            New report
          </span>
        </div>

        <h1 className="text-display font-semibold leading-[1.1] text-kuma-text-primary">
          Merchants talk.
          <br />
          Your app receives validated JSON.
        </h1>

        <p className="mt-md text-body text-kuma-text-secondary leading-6 max-w-xl mx-auto">
          One API call turns spoken Wolof or French into structured
          merchant-transaction data. Voice infrastructure for financial apps
          serving informal merchants.
        </p>

        <div className="mt-xl flex gap-md justify-center flex-wrap">
          <a
            href="/demos"
            className="bg-kuma-accent text-kuma-text-primary px-lg py-sm font-semibold rounded-md hover:brightness-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
          >
            Try a live demo →
          </a>
          <a
            href="/research/state-of-wolof-voice-ai-2026.html"
            className="border border-kuma-border text-kuma-text-primary px-lg py-sm font-semibold rounded-md hover:border-kuma-border-focus transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent"
          >
            Read the report
          </a>
        </div>

        {/* Wolof word tag */}
        <div className="mt-2xl inline-flex items-center gap-sm text-sm text-kuma-text-muted border border-kuma-border rounded px-md py-sm bg-white">
          <span className="font-mono font-semibold text-kuma-text-primary">wax</span>
          <span>to speak · in Wolof</span>
        </div>
      </div>
    </section>
  );
}

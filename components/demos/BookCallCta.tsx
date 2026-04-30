// Cal.com URL https://cal.com/kuma-labs/founder-demo returned HTTP 404 during
// task 08-02.4 verification. Using mailto fallback per plan D-20.
const href = "mailto:hello@kumalabs.ai?subject=Demo%20call%20request";

export function BookCallCta() {
  return (
    <div className="flex flex-col items-center gap-sm text-center py-2xl">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-sm bg-kuma-accent text-kuma-text-primary px-xl py-md font-semibold rounded-md hover:bg-kuma-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuma-accent transition-colors"
      >
        Book 20 min with Abdul
      </a>
      <p className="text-sm text-kuma-text-muted">
        Founder demo, no slides, your audio.
      </p>
    </div>
  );
}

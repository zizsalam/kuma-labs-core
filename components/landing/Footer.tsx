export function LandingFooter() {
  return (
    <footer className="border-t border-kuma-border bg-kuma-bg py-lg">
      <div className="max-w-3xl mx-auto px-md flex flex-col sm:flex-row items-center justify-between gap-sm text-label text-kuma-text-muted">
        <span>© 2026 Kuma Labs · Built in Dakar</span>
        <nav className="flex gap-md">
          <a href="https://docs.kuma-labs.com/privacy" className="hover:text-kuma-text-primary">Privacy</a>
          <a href="https://docs.kuma-labs.com/dpa" className="hover:text-kuma-text-primary">DPA</a>
        </nav>
      </div>
    </footer>
  );
}

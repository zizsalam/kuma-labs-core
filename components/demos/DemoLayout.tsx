import Image from "next/image";
import Link from "next/link";
import { DemoNavPills } from "./DemoNavPills";
import { Disclaimer } from "./Disclaimer";

interface DemoLayoutProps {
  children: React.ReactNode;
}

export function DemoLayout({ children }: DemoLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-kuma-bg">
      {/* Header */}
      <header className="bg-white border-b border-kuma-border sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-md py-sm flex flex-col gap-sm md:flex-row md:items-center md:gap-lg">
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent rounded"
            aria-label="Kuma Labs home"
          >
            <Image
              src="/logo/kuma-wordmark.svg"
              alt="Kuma Labs"
              width={120}
              height={24}
              priority
            />
          </Link>
          <DemoNavPills />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-md py-xl">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-kuma-border bg-white">
        <div className="max-w-4xl mx-auto px-md py-lg flex flex-col gap-xs md:flex-row md:items-center md:justify-between">
          <Disclaimer />
          <nav className="flex gap-md text-sm text-kuma-text-muted">
            <a
              href="https://docs.kuma-labs.com/legal/privacy"
              className="hover:text-kuma-text-primary"
            >
              Privacy
            </a>
            <a
              href="https://docs.kuma-labs.com/legal/dpa"
              className="hover:text-kuma-text-primary"
            >
              DPA
            </a>
            <span>© {new Date().getFullYear()} Kuma Labs</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}

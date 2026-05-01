import { DemoNavPills } from "./DemoNavPills";
import { Disclaimer } from "./Disclaimer";

interface DemoLayoutProps {
  children: React.ReactNode;
}

export function DemoLayout({ children }: DemoLayoutProps) {
  return (
    <div className="flex flex-col">
      {/* Demo-specific nav pills (vertical selector) */}
      <div className="bg-white border-b border-kuma-border">
        <div className="max-w-4xl mx-auto px-md py-sm">
          <DemoNavPills />
        </div>
      </div>

      {/* Main demo content */}
      <div className="max-w-3xl mx-auto px-md py-xl w-full">{children}</div>

      {/* Demo-only disclaimer (not in SiteFooter — per D-21, demos pages only) */}
      <div className="border-t border-kuma-border bg-white">
        <div className="max-w-4xl mx-auto px-md py-lg flex flex-col gap-xs md:flex-row md:items-center md:justify-between">
          <Disclaimer />
          <nav className="flex gap-md text-sm text-kuma-text-muted">
            <span>Example flows — not affiliated with the brands referenced.</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

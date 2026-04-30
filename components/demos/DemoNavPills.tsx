"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEMOS, type DemoSlug } from "@/lib/demos/shapes";

const DEMO_SLUGS = Object.keys(DEMOS) as DemoSlug[];

export function DemoNavPills() {
  const pathname = usePathname();

  return (
    <nav
      className="flex overflow-x-auto gap-sm md:gap-md pb-sm md:pb-0 scrollbar-hide"
      aria-label="Demo navigation"
    >
      {DEMO_SLUGS.map((slug) => {
        const demo = DEMOS[slug];
        const isActive = pathname === `/demos/${slug}`;
        return (
          <Link
            key={slug}
            href={`/demos/${slug}`}
            className={[
              "whitespace-nowrap rounded-md px-md py-xs text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent",
              isActive
                ? "bg-kuma-accent text-kuma-text-primary"
                : "border border-kuma-accent text-kuma-text-primary hover:bg-kuma-accent/10",
            ].join(" ")}
            aria-current={isActive ? "page" : undefined}
          >
            {demo.title}
          </Link>
        );
      })}
    </nav>
  );
}

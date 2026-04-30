import type { DemoSlug } from "@/lib/demos/shapes";

interface PlaygroundLinkProps {
  slug: DemoSlug;
}

export function PlaygroundLink({ slug }: PlaygroundLinkProps) {
  const href = `https://api.kuma-labs.com/api-reference?shape=${slug}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-xs text-sm text-kuma-text-primary underline underline-offset-2 hover:text-kuma-text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-kuma-accent rounded"
    >
      Open this in the API playground →
    </a>
  );
}

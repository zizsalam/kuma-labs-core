interface OpsPainBannerProps {
  pain: string;
}

export function OpsPainBanner({ pain }: OpsPainBannerProps) {
  return (
    <p className="italic text-base leading-6 text-kuma-text-secondary">{pain}</p>
  );
}

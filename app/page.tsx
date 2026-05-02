import { Hero } from "@/components/landing/Hero";
import { InsightSection } from "@/components/landing/InsightSection";
import { DeremCardSection } from "@/components/landing/DeremCardSection";

export default function Home() {
  return (
    <div className="bg-paper-bg font-serif text-paper-ink">
      <Hero />
      <InsightSection />
      <DeremCardSection />
    </div>
  );
}

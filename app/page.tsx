import { Hero } from "@/components/landing/Hero";
import { InsightSection } from "@/components/landing/InsightSection";
import { ApiReturnsSection } from "@/components/landing/ApiReturnsSection";
import { FlowmapSection } from "@/components/landing/FlowmapSection";
import { DeremCardSection } from "@/components/landing/DeremCardSection";
import { WhoItsForSection } from "@/components/landing/WhoItsForSection";
import { WhatsNextSection } from "@/components/landing/WhatsNextSection";

export default function Home() {
  return (
    <div className="bg-paper-bg font-serif text-paper-ink">
      <Hero />
      <InsightSection />
      <ApiReturnsSection />
      <FlowmapSection />
      <DeremCardSection />
      <WhoItsForSection />
      <WhatsNextSection />
    </div>
  );
}

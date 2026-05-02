import { Hero } from "@/components/landing/Hero";
import { InsightSection } from "@/components/landing/InsightSection";
import { DeremCardSection } from "@/components/landing/DeremCardSection";
import { HeadlineChartSection } from "@/components/landing/HeadlineChartSection";
import { FailureFindingsStrip } from "@/components/landing/FailureFindingsStrip";
import { ServicesOverviewStrip } from "@/components/landing/ServicesOverviewStrip";
import { OpenSourceStrip } from "@/components/landing/OpenSourceStrip";

export default function Home() {
  return (
    <div className="bg-paper-bg font-serif text-paper-ink">
      <Hero />
      <InsightSection />
      <DeremCardSection />
      <HeadlineChartSection />
      <FailureFindingsStrip />
      <ServicesOverviewStrip />
      <OpenSourceStrip />
    </div>
  );
}

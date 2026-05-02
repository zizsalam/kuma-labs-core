import { Hero } from "@/components/landing/Hero";
import { FindingsTicker } from "@/components/landing/FindingsTicker";
import { InsightSection } from "@/components/landing/InsightSection";
import { DeremCardSection } from "@/components/landing/DeremCardSection";
import { LiveExample } from "@/components/landing/LiveExample";
import { HeadlineChartSection } from "@/components/landing/HeadlineChartSection";
import { FailureFindingsStrip } from "@/components/landing/FailureFindingsStrip";
import { ServicesOverviewStrip } from "@/components/landing/ServicesOverviewStrip";
import { OpenSourceStrip } from "@/components/landing/OpenSourceStrip";

export default function Home() {
  return (
    <div className="bg-paper-bg font-serif text-paper-ink">
      <Hero />
      <FindingsTicker />
      <InsightSection />
      <DeremCardSection />
      <LiveExample />
      <HeadlineChartSection />
      <FailureFindingsStrip />
      <ServicesOverviewStrip />
      <OpenSourceStrip />
    </div>
  );
}

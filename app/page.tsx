import { Hero } from "@/components/landing/Hero";
import { TalkingFasterSection } from "@/components/landing/TalkingFasterSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WolofParserSection } from "@/components/landing/WolofParserSection";
import { StackSection } from "@/components/landing/StackSection";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { ResearchCalloutSection } from "@/components/landing/ResearchCalloutSection";
import { DemosCalloutSection } from "@/components/landing/DemosCalloutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TalkingFasterSection />
      <HowItWorksSection />
      <WolofParserSection />
      <StackSection />
      <PartnersSection />
      <ResearchCalloutSection />
      <DemosCalloutSection />
    </>
  );
}

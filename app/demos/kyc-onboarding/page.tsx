import type { Metadata } from "next";
import { DemoSubPage } from "@/components/demos/DemoSubPage";
import { DEMOS } from "@/lib/demos/shapes";

export const metadata: Metadata = {
  title: "KYC Onboarding — Live Demo | Kuma Labs",
  description: DEMOS["kyc-onboarding"].opsPain,
};

export default function KycOnboardingPage() {
  return <DemoSubPage demo={DEMOS["kyc-onboarding"]} />;
}

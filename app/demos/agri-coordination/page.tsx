import type { Metadata } from "next";
import { DemoSubPage } from "@/components/demos/DemoSubPage";
import { DEMOS } from "@/lib/demos/shapes";

export const metadata: Metadata = {
  title: "Agri Coordination — Live Demo | Kuma Labs",
  description: DEMOS["agri-coordination"].opsPain,
};

export default function AgriCoordinationPage() {
  return <DemoSubPage demo={DEMOS["agri-coordination"]} />;
}

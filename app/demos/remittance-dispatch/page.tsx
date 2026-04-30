import type { Metadata } from "next";
import { DemoSubPage } from "@/components/demos/DemoSubPage";
import { DEMOS } from "@/lib/demos/shapes";

export const metadata: Metadata = {
  title: "Remittance Dispatch — Live Demo | Kuma Labs",
  description: DEMOS["remittance-dispatch"].opsPain,
};

export default function RemittanceDispatchPage() {
  return <DemoSubPage demo={DEMOS["remittance-dispatch"]} />;
}

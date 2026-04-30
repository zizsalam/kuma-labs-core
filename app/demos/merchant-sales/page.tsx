import type { Metadata } from "next";
import { DemoSubPage } from "@/components/demos/DemoSubPage";
import { DEMOS } from "@/lib/demos/shapes";

export const metadata: Metadata = {
  title: "Merchant Sales — Live Demo | Kuma Labs",
  description: DEMOS["merchant-sales"].opsPain,
};

export default function MerchantSalesPage() {
  return <DemoSubPage demo={DEMOS["merchant-sales"]} />;
}

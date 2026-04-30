import type { Metadata } from "next";
import { DemoSubPage } from "@/components/demos/DemoSubPage";
import { DEMOS } from "@/lib/demos/shapes";

export const metadata: Metadata = {
  title: "BNPL Collections — Live Demo | Kuma Labs",
  description: DEMOS["bnpl-collections"].opsPain,
};

export default function BnplCollectionsPage() {
  return <DemoSubPage demo={DEMOS["bnpl-collections"]} />;
}

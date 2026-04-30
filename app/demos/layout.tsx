import type { Metadata } from "next";
import { DemoLayout } from "@/components/demos/DemoLayout";

export const metadata: Metadata = {
  title: "Live demos — Kuma Labs",
  description:
    "Voice-to-JSON, 30 seconds, no signup. Five verticals, one API.",
};

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DemoLayout>{children}</DemoLayout>;
}

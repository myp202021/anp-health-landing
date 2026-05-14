import type { Metadata } from "next";
import DashboardGate from "./DashboardGate";

export const metadata: Metadata = {
  title: "Dashboard — ANP Health Solutions",
  description: "Dashboard de rendimiento Google Ads en tiempo real",
  robots: "noindex, nofollow",
};

export default function DashboardPage() {
  return <DashboardGate />;
}

import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard | ANP Health Solutions",
  description: "Dashboard de rendimiento Google Ads para ANP Health Solutions — metricas US y Latinoamerica.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <DashboardClient />;
}

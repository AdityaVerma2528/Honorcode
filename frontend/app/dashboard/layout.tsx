import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DashboardLogo } from "@/components/dashboard/dashboard-logo";

export default function DashboardRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

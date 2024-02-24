import type { Metadata } from "next";
import DashboardHeader from "./(components)/dashboardheader";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Emnoer Cafe is an Indonesian company engaged in serving food, drinks and snacks",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bg-primary`}>
      <header>
        <DashboardHeader />
      </header>
      <div className="container">{children}</div>
    </div>
  );
}

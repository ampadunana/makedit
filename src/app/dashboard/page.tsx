"use client";

import DashboardLayout from "@/dashboard/components/DashboardLayout";
import HeroCard from "@/dashboard/components/HeroCard";
import ProjectGrid from "@/dashboard/components/ProjectGrid";
import SingleUpload from "@/dashboard/components/SingleUpload";
import Billing from "@/dashboard/components/Billing";
import Settings from "@/dashboard/components/Settings";
import { DashboardProvider, useDashboard } from "@/dashboard/components/DashboardContext";

function DashboardContent() {
  const { currentView } = useDashboard();

  switch (currentView) {
    case "home":
      return (
        <>
          <HeroCard />
          <ProjectGrid />
        </>
      );
    case "single-upload":
      return <SingleUpload />;
    case "billing":
      return <Billing />;
    case "settings":
      return <Settings />;
    // For now, reuse home layout for templates until a dedicated view is added
    case "templates":
      return (
        <>
          <HeroCard />
          <ProjectGrid />
        </>
      );
    default:
      return (
        <>
          <HeroCard />
          <ProjectGrid />
        </>
      );
  }
}

export default function Page() {
  return (
    <DashboardProvider>
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </DashboardProvider>
  );
}
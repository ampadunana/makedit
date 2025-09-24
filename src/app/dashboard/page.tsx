"use client";

import DashboardLayout from "@/dashboard/components/DashboardLayout";
import HeroCard from "@/dashboard/components/HeroCard";
import FilterBar from "@/dashboard/components/FilterBar";
import ProjectGrid from "@/dashboard/components/ProjectGrid";
import SingleUpload from "@/dashboard/components/SingleUpload";
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
    // Add other cases later
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
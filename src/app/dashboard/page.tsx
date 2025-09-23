import DashboardLayout from "@/dashboard/components/DashboardLayout";
import HeroCard from "@/dashboard/components/HeroCard";
import FilterBar from "@/dashboard/components/FilterBar";
import ProjectGrid from "@/dashboard/components/ProjectGrid";

export default function Page() {
  return (
    <DashboardLayout>
      <HeroCard />
      <ProjectGrid />
    </DashboardLayout>
  );
}
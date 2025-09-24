import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useDashboard } from "./DashboardContext";
import type { CSSProperties } from "react";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const { sidebarCollapsed } = useDashboard();

  return (
    <div className="flex min-h-screen w-full bg-[#111114]" style={{ '--sidebar-w': (sidebarCollapsed ? '5rem' : '14rem') } as CSSProperties}>
      {/* Rounded corner overlay */}
      <div
        className="fixed top-0 left-0 h-14 bg-[#0b0b0d] rounded-tl-2xl z-45 overflow-hidden transform-gpu transition-[width] duration-300 ease-in-out"
        style={{ width: 'calc(var(--sidebar-w) + 1px)' }}
      ></div>
      {/* Fixed sidebar */}
      <div
        className="fixed top-0 left-0 h-screen z-46 bg-[#0b0b0d] overflow-hidden transform-gpu transition-[width] duration-300 ease-in-out"
        style={{ width: 'var(--sidebar-w)', willChange: "width", contain: "layout paint" }}
      >
        <Sidebar />
      </div>

      {/* Main */}
      <div
        className="flex-1 flex flex-col transition-[margin-left] duration-300 ease-in-out"
        style={{ marginLeft: 'var(--sidebar-w)', willChange: "margin-left" }}
      >
        <Topbar />
        <main className="mt-14 p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
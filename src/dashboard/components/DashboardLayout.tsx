import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-[#0b0b0d]">
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col ml-64">
        <Topbar />
        <main className="p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
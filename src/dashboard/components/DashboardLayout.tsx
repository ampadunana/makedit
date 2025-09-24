import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-[#111114]">
      {/* Rounded corner overlay */}
      <div className="fixed top-0 left-0 w-56 h-14 bg-[#0b0b0d] rounded-tl-2xl z-45"></div>
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 h-screen w-56 z-46">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col ml-56">
        <Topbar />
        <main className="mt-14 p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
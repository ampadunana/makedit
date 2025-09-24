"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  PanelLeftClose,
  PanelLeftOpen,
  Images,
  Upload,
  Blocks,
  PlugZap,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";
import clsx from "clsx";
import { useDashboard } from "./DashboardContext";

const Item = ({
  active,
  icon: Icon,
  children,
  onClick,
  sidebarCollapsed,
}: {
  active?: boolean;
  icon: React.ElementType;
  children: React.ReactNode;
  onClick?: () => void;
  sidebarCollapsed?: boolean;
}) => (
  <div
    onClick={onClick}
    className={clsx(
      "group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors relative",
      active
        ? "text-white font-semibold bg-white/5"
        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
    )}
  >
    {/* Active indicator */}
    {active && (
      <span className="absolute left-0 top-1 bottom-1 w-1 bg-primary-600 rounded-r" />
    )}
    <Icon
      size={18}
      className={clsx(
        "transition-colors",
        active ? "text-primary-500" : "text-gray-500 group-hover:text-gray-300"
      )}
    />
    {!sidebarCollapsed && <span className="text-sm">{children}</span>}
  </div>
);

export default function Sidebar() {
  const [open, setOpen] = useState(true); // studio dropdown
  const { currentView, setCurrentView, sidebarCollapsed, setSidebarCollapsed } = useDashboard();

  // Close Studio dropdown only when collapsing (avoid layout bounce on expand)
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (sidebarCollapsed) {
      setOpen(false);
    }
  }, [sidebarCollapsed]);

  return (
    <aside
      className={clsx(
        "h-screen bg-[#0b0b0d] flex flex-col overflow-hidden transform-gpu transition-[width] duration-300 ease-in-out",
        sidebarCollapsed ? "w-20" : "w-56"
      )}
      style={{ willChange: "width", contain: "layout paint" }}
    >
      {/* Brand */}
      <div className="px-4 pt-5 pb-4 flex items-center gap-3 shrink-0">
        <img src="/logo.png" alt="Makedit" className="h-6 w-6" />
        {!sidebarCollapsed && (
          <div className="font-bold text-lg text-white">Makedit</div>
        )}
      </div>

      <nav className="px-2 pt-6 flex-1 min-h-0 overflow-y-auto overflow-x-hidden space-y-1" style={{ scrollbarGutter: "stable" }}>
        {/* Collapse Toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="flex items-center justify-start w-full px-4 py-2 mb-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
        >
          {sidebarCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
        </button>

        {/* Studio Dropdown */}
        <button
          onClick={() => setOpen(!open)}
          className={clsx(
            "flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition",
            sidebarCollapsed && "justify-start"
          )}
        >
          <span className="flex items-center gap-2">
            <Images size={18} />
            {!sidebarCollapsed && <span className="text-sm">Studio</span>}
          </span>
          {!sidebarCollapsed && (open ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
        </button>

        <div
          className={clsx(
            "ml-8 mt-1 space-y-1 overflow-hidden transition-[max-height,opacity] duration-300",
            !sidebarCollapsed && open
              ? "max-h-40 opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
          aria-hidden={!(!sidebarCollapsed && open)}
        >
          <Item
            icon={Upload}
            active={currentView === "single-upload"}
            onClick={() => setCurrentView("single-upload")}
          >
            Single Upload
          </Item>
          <Item
            icon={Blocks}
            active={currentView === "bulk-upload"}
            onClick={() => setCurrentView("bulk-upload")}
          >
            Bulk Upload
          </Item>
          <Item
            icon={PlugZap}
            active={currentView === "api-integrations"}
            onClick={() => setCurrentView("api-integrations")}
          >
            API Integrations
          </Item>
        </div>

        {/* Standalone */}
        <Item
          icon={FileText}
          active={currentView === "templates"}
          onClick={() => setCurrentView("templates")}
          sidebarCollapsed={sidebarCollapsed}
        >
          Templates
        </Item>
        <Item
          icon={CreditCard}
          active={currentView === "billing"}
          onClick={() => setCurrentView("billing")}
          sidebarCollapsed={sidebarCollapsed}
        >
          Billing
        </Item>
        <Item
          icon={Settings}
          active={currentView === "settings"}
          onClick={() => setCurrentView("settings")}
          sidebarCollapsed={sidebarCollapsed}
        >
          Settings
        </Item>
      </nav>

      {/* Profile */}
      <div className="p-4 border-t border-white/5 h-20 shrink-0 mt-auto">
        <div className="flex items-center gap-3 h-10">
          <div
            className="w-9 h-9 rounded-full bg-[#1b1b23] border border-white/10"
            aria-hidden="true"
          />
          <div
            className={clsx(
              "flex-1 min-w-0 overflow-hidden transition-[max-height,opacity] duration-300",
              sidebarCollapsed ? "max-h-0 opacity-0 pointer-events-none" : "max-h-10 opacity-100"
            )}
            aria-hidden={sidebarCollapsed}
          >
            <p className="text-sm leading-[1.2] font-medium text-white truncate">Sarah Chen</p>
            <p className="text-xs leading-[1.2] text-gray-400 truncate">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

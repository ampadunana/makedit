"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Images,
  Upload,
  Blocks,
  PlugZap,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";
import clsx from "clsx";

const Item = ({
  active,
  icon: Icon,
  children,
}: {
  active?: boolean;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div
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
    <span className="text-sm">{children}</span>
  </div>
);

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="w-56 h-screen bg-[#0b0b0d] flex flex-col">
      {/* Brand */}
      <div className="px-4 pt-5 pb-4 flex items-center gap-3">
        <img src="/logo.png" alt="Makedit" className="h-6 w-6" />
        <div className="font-bold text-lg text-white">Makedit</div>
      </div>

      <nav className="px-2 pt-10 flex-1 overflow-y-auto space-y-1">
        {/* Studio Dropdown */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
        >
          <span className="flex items-center gap-2">
            <Images size={18} />
            <span className="text-sm">Studio</span>
          </span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {open && (
          <div className="ml-8 mt-1 space-y-1">
            <Item icon={Upload}>Single Upload</Item>
            <Item icon={Blocks}>Bulk Upload</Item>
            <Item icon={PlugZap}>API Integrations</Item>
          </div>
        )}

        {/* Standalone */}
        <Item icon={FileText}>Templates</Item>
        <Item icon={CreditCard}>Billing</Item>
        <Item icon={Settings}>Settings</Item>
      </nav>

      {/* Profile */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full"
            alt="User"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Sarah Chen</p>
            <p className="text-xs text-gray-400">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
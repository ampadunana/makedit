"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Images, Upload, Blocks, PlugZap, FileText, CreditCard, Settings } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="h-full w-full bg-[#111114] text-gray-200 flex flex-col border-r border-white/5">
      {/* Logo */}
      <div className="px-4 pt-5 pb-4 flex items-center gap-3">
        <img src="/logo.png" alt="Makedit" className="h-6 w-6" />
        <div className="font-bold text-lg text-white">Makedit</div>
      </div>

      <nav className="px-3 pt-2 space-y-2 flex-1 overflow-y-auto">
        {/* Studio dropdown */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-[#1b1b23]"
        >
          <span className="flex items-center gap-2">
            <Images size={18} /> Studio
          </span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {open && (
          <div className="ml-8 space-y-1">
            <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#1b1b23] rounded cursor-pointer">
              <Upload size={16} /> Single Upload
            </div>
            <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#1b1b23] rounded cursor-pointer">
              <Blocks size={16} /> Bulk Upload
            </div>
            <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#1b1b23] rounded cursor-pointer">
              <PlugZap size={16} /> API Integrations
            </div>
          </div>
        )}

        {/* Standalone */}
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-[#1b1b23] rounded cursor-pointer">
          <FileText size={16} /> Templates
        </div>
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-[#1b1b23] rounded cursor-pointer">
          <CreditCard size={16} /> Billing
        </div>
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-[#1b1b23] rounded cursor-pointer">
          <Settings size={16} /> Settings
        </div>
      </nav>

      {/* Profile */}
      <div className="p-3 border-t border-white/5">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-medium">Sarah Chen</p>
            <p className="text-xs text-gray-400">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
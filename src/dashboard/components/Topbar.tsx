"use client";
import { useState } from "react";
import { Bell, X } from "lucide-react";

export default function Topbar() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <header className={`h-14 bg-[#111114] border-b border-white/5 flex items-center px-6 sticky top-0 z-10 ${showMessage ? 'justify-between' : 'justify-end'}`}>
      {showMessage && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Welcome back, ready to transform your next product photo?</span>
          <button
            onClick={() => setShowMessage(false)}
            className="h-5 w-5 rounded hover:bg-[#1b1b23] text-gray-400 hover:text-white grid place-items-center"
          >
            <X size={14} />
          </button>
        </div>
      )}
      <button className="h-9 w-9 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white grid place-items-center">
        <Bell size={18} />
      </button>
    </header>
  );
}
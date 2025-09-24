"use client";
import { useState } from "react";
import { Bell, X, Moon, Sun } from "lucide-react";

export default function Topbar() {
  const [showMessage, setShowMessage] = useState(true);
  const [isDark, setIsDark] = useState(true);

  return (
    <header className={`fixed top-0 left-56 right-0 h-14 bg-[#0b0b0d] border-b border-white/5 flex items-center px-6 z-50 ${showMessage ? 'justify-between' : 'justify-end'}`}>
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
      <div className="flex items-center gap-2">
        <button className="h-9 w-9 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white grid place-items-center">
          <Bell size={18} />
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="h-9 w-9 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white grid place-items-center"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}
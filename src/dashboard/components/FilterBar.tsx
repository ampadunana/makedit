"use client";
import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";

const options = ["All Images", "Published", "Drafts", "Archived"] as const;

export default function FilterBar() {
  const [selected, setSelected] = useState("All Images");
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 flex items-center justify-between">
      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-[#1b1b23] hover:bg-[#23232c] border border-white/10 shadow"
        >
          <Filter size={16} />
          {selected}
          <ChevronDown size={16} />
        </button>
        {open && (
          <div className="absolute top-full mt-1 w-48 bg-[#1b1b23] border border-white/10 rounded-lg shadow-lg z-10">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#23232c] hover:text-white"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
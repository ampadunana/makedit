import { CheckCircle2, Download, Eye } from "lucide-react";
import BeforeAfter from "./BeforeAfter";

export default function ProjectCard({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  return (
    <div className="bg-[#111114] border border-white/10 rounded-xl p-4 space-y-3 hover:-translate-y-0.5 hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 flex items-center gap-1">
          <CheckCircle2 size={14} /> Ready
        </span>
        <span className="text-xs text-gray-400">AI Enhanced</span>
      </div>

      <BeforeAfter before={before} after={after} />

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white">{title}</span>
        <div className="flex gap-2">
          <button className="h-8 w-8 grid place-items-center rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white">
            <Eye size={16} />
          </button>
          <button className="h-8 w-8 grid place-items-center rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white">
            <Download size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
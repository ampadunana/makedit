"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfter({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(50);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-base-700"
      onMouseMove={(e) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        const percent = ((e.clientX - bounds.left) / bounds.width) * 100;
        setX(Math.min(100, Math.max(0, percent)));
      }}
    >
      <div className="absolute inset-0">
        <Image src={after} alt="After image" fill className="object-cover" />
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${x}%` }}
      >
        <div className="relative h-full w-full">
          <Image
            src={before}
            alt="Before image"
            fill
            className="object-cover select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `calc(${x}% - 12px)` }}
      >
        <div className="h-full w-[2px] bg-white/70"></div>
        <div className="h-6 w-6 rounded-full bg-white text-black grid place-items-center -mt-3 translate-y-1/2 text-xs font-bold">
          ↔
        </div>
      </div>
    </div>
  );
}
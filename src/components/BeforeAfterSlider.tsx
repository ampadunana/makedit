"use client";

import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  return (
    <div className={`relative group ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {beforeLabel}
          </div>
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {afterLabel}
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Drag Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize z-20 transform -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <svg
            className="w-4 h-4 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 text-center">
        <p className="text-sm text-slate-600">
          Drag the slider to compare before and after
        </p>
      </div>
    </div>
  );
}


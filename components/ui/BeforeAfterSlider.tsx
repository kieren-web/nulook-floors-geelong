"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => { if (dragging) updatePosition(e.clientX); },
    [dragging, updatePosition]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => updatePosition(e.touches[0].clientX),
    [updatePosition]
  );

  return (
    <div className="space-y-3">
      {label && (
        <p className="text-muted text-sm font-medium text-center">{label}</p>
      )}
      <div
        ref={containerRef}
        className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border select-none cursor-col-resize"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* After (base layer - full width) */}
        <div className="absolute inset-0">
          <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
          <span className="absolute bottom-3 right-3 bg-orange text-white text-xs font-bold px-2 py-1 rounded">
            AFTER
          </span>
        </div>

        {/* Before (clipped to left side) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative w-full h-full" style={{ width: `${100 / (position / 100)}%` }}>
            <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
          </div>
          <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
            BEFORE
          </span>
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-col-resize z-10"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center gap-0.5">
            <span className="text-[#333] text-xs font-black">◀▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

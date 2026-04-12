"use client";

import { useState } from "react";
import Link from "next/link";
import type { Colour } from "@/types";
import { cn } from "@/lib/utils";
import { ColourModal } from "./ColourModal";

interface ColourGridProps {
  colours: Colour[];
  totalCount?: number;
  preview?: boolean;
}

export function ColourGrid({ colours, totalCount, preview = false }: ColourGridProps) {
  const [selectedColour, setSelectedColour] = useState<Colour | null>(null);

  const displayColours = preview ? colours.slice(0, 6) : colours;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayColours.map((colour) => (
          <button
            key={colour.id}
            type="button"
            onClick={() => setSelectedColour(colour)}
            className={cn(
              "group text-left bg-surface border border-border rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:border-orange/50"
            )}
          >
            <div className="aspect-square w-full relative overflow-hidden">
              <img
                src={colour.imagePath}
                alt={colour.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="text-white text-sm font-medium">{colour.name}</p>
              {colour.popular && (
                <span className="inline-block mt-1 text-[10px] bg-orange/10 text-orange px-2 py-0.5 rounded-full font-semibold">
                  Popular
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {preview && (
        <div className="mt-8 text-center">
          <Link
            href="/colours"
            className="text-orange font-semibold hover:underline"
          >
            View All {totalCount ?? colours.length} Colours &rarr;
          </Link>
        </div>
      )}

      <ColourModal
        colour={selectedColour}
        onClose={() => setSelectedColour(null)}
      />
    </div>
  );
}

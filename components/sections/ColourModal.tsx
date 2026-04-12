"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import type { Colour } from "@/types";

interface ColourModalProps {
  colour: Colour | null;
  onClose: () => void;
}

export function ColourModal({ colour, onClose }: ColourModalProps) {
  if (!colour) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-surface border border-border rounded-xl max-w-lg w-full p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Large swatch — actual texture photo */}
          <div className="relative w-full sm:w-44 h-44 rounded-lg shrink-0 overflow-hidden">
            <Image
              src={colour.imagePath}
              alt={colour.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">{colour.name}</h3>
            <span className="inline-block mt-1 text-xs bg-border text-muted px-3 py-1 rounded-full capitalize">
              {colour.category}
            </span>
            <p className="mt-3 text-muted text-sm leading-relaxed">
              {colour.description}
            </p>
            <div className="mt-4">
              <Button href="/contact" size="sm">
                Get a Quote in This Colour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

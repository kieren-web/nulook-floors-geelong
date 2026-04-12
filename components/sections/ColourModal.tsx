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
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-surface border border-border rounded-xl max-w-xl w-full overflow-hidden">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/50 rounded-full p-1.5 text-white hover:bg-black/80 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Full-width image */}
        <div className="relative w-full aspect-square">
          <Image
            src={colour.imagePath}
            alt={colour.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 576px"
          />
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-white font-semibold">{colour.name}</p>
          <Button href="/contact" size="sm">
            Get a Quote in This Colour
          </Button>
        </div>
      </div>
    </div>
  );
}

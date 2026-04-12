"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { GalleryCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "Garage", value: "garage" },
  { label: "Commercial", value: "commercial" },
  { label: "Workshop", value: "workshop" },
  { label: "Patio", value: "patio" },
];

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: GalleryCategory;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/garage-classic-cars.jpg",
    alt: "Classic car garage with dark grey flake epoxy",
    caption: "Residential Garage - Geelong",
    category: "garage",
  },
  {
    id: "2",
    src: "/images/gallery/commercial-warehouse.jpg",
    alt: "Large commercial warehouse with dark grey epoxy",
    caption: "Commercial Warehouse",
    category: "commercial",
  },
  {
    id: "3",
    src: "/images/gallery/outdoor-alfresco-outside.jpg",
    alt: "Outdoor alfresco with white flake epoxy and scenic view",
    caption: "Outdoor Alfresco - Residential",
    category: "patio",
  },
  {
    id: "4",
    src: "/images/gallery/commercial-industrial.jpg",
    alt: "Industrial warehouse with dark blue-grey epoxy",
    caption: "Industrial Facility",
    category: "commercial",
  },
  {
    id: "5",
    src: "/images/gallery/residential-carport.jpg",
    alt: "Residential carport with light grey flake epoxy",
    caption: "Residential Carport - Newtown",
    category: "garage",
  },
  {
    id: "6",
    src: "/images/gallery/commercial-shed.jpg",
    alt: "Large commercial shed with light grey epoxy",
    caption: "Commercial Shed",
    category: "workshop",
  },
  {
    id: "7",
    src: "/images/gallery/outdoor-alfresco-inside.jpg",
    alt: "Alfresco viewed from inside with white epoxy floor",
    caption: "Alfresco - Outdoor Living",
    category: "patio",
  },
  {
    id: "8",
    src: "/images/gallery/residential-stairs.jpg",
    alt: "Residential staircase landing with grey flake epoxy",
    caption: "Residential Interior - Stairs",
    category: "garage",
  },
  {
    id: "9",
    src: "/images/gallery/residential-puppy.jpg",
    alt: "Finished black and white flake residential garage floor",
    caption: "Residential Garage Floor",
    category: "garage",
  },
];

interface GalleryGridProps {
  images?: GalleryImage[];
  preview?: boolean;
}

export function GalleryGrid({ preview = false }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("all");

  const displayImages = preview ? galleryImages.slice(0, 6) : galleryImages;
  const filtered =
    activeCategory === "all"
      ? displayImages
      : displayImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Filter buttons - hide in preview mode */}
      {!preview && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === cat.value
                  ? "bg-orange text-white"
                  : "bg-surface border border-border text-muted hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((image) => (
          <div
            key={image.id}
            className="group aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-border relative"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Caption overlay on hover */}
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View Full Gallery link */}
      {preview && (
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="text-orange font-semibold hover:underline"
          >
            View Full Gallery &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}

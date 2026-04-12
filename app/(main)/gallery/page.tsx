import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import type { GalleryImage } from "@/types";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Gallery Geelong | NuLook Floors",
  description:
    "View our epoxy flooring gallery - residential garages, commercial floors, and workshops across Geelong. Real results from NuLook Floors Geelong.",
  path: "/gallery",
});

const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/gallery/garage-classic-cars.jpg",
    alt: "Epoxy flake garage floor Geelong - classic car showroom finish",
    category: "garage",
  },
  {
    id: "g2",
    src: "/images/gallery/residential-puppy.jpg",
    alt: "Residential garage epoxy flooring Geelong - light grey flake finish",
    category: "garage",
  },
  {
    id: "g3",
    src: "/images/gallery/residential-carport.jpg",
    alt: "Residential carport epoxy floor coating Geelong",
    category: "garage",
  },
  {
    id: "g4",
    src: "/images/gallery/residential-stairs.jpg",
    alt: "Epoxy floor coating on residential stairs and landing Geelong",
    category: "garage",
  },
  {
    id: "g5",
    src: "/images/gallery/commercial-warehouse.jpg",
    alt: "Commercial warehouse epoxy flooring Geelong - heavy duty finish",
    category: "commercial",
  },
  {
    id: "g6",
    src: "/images/gallery/commercial-industrial.jpg",
    alt: "Industrial epoxy floor coating Geelong - chemical resistant",
    category: "commercial",
  },
  {
    id: "g7",
    src: "/images/gallery/commercial-shed.jpg",
    alt: "Workshop shed epoxy floor Geelong - anti-slip finish",
    category: "workshop",
  },
  {
    id: "g8",
    src: "/images/gallery/outdoor-alfresco-inside.jpg",
    alt: "Outdoor alfresco epoxy floor coating Geelong - interior view",
    category: "patio",
  },
  {
    id: "g9",
    src: "/images/gallery/outdoor-alfresco-outside.jpg",
    alt: "Outdoor patio epoxy coating Geelong - exterior alfresco finish",
    category: "patio",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / Gallery
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Work Across Geelong
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            Browse our portfolio of residential, commercial, and workshop epoxy
            flooring projects completed across the Geelong region.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <GalleryGrid images={galleryImages} />
      </section>

      {/* Before / After */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <SectionHeading
          label="BEFORE & AFTER"
          heading="See the Transformation"
          subtext="Drag the slider to compare the floor before and after a NuLook epoxy installation."
          align="center"
        />
        <div className="mt-12">
          <BeforeAfterSlider
            beforeSrc="/images/gallery/geelong-before.jpg"
            afterSrc="/images/gallery/geelong-after.jpg"
            beforeAlt="Bare concrete garage floor before epoxy coating - Geelong"
            afterAlt="Finished epoxy garage floor after NuLook installation - Geelong"
            label="Residential Garage - Geelong"
          />
        </div>
      </section>

      <CTABanner
        heading="Like What You See?"
        subtext="Get a free quote for your own epoxy flooring project. We'll match your space to the perfect finish."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Colours", href: "/colours" }}
      />
    </>
  );
}

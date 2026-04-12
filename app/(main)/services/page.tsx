import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { services } from "@/data/services";
import { Shield, Award, MapPin, Layers } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Services Geelong | NuLook Floors",
  description:
    "Premium epoxy flooring services in Geelong for residential garages, commercial facilities & industrial spaces. Local installers, 5-year warranty. Free quote available.",
  path: "/services",
});

const whyCards = [
  {
    Icon: Layers,
    title: "Proven 25-Year System",
    text: "Every NuLook floor uses a multi-coat system refined over two decades - primer, epoxy, flake, and UV-stable topcoat.",
  },
  {
    Icon: Award,
    title: "Premium Materials",
    text: "We use only commercial-grade NuLook epoxy products - no off-the-shelf hardware store kits. Professional results, every time.",
  },
  {
    Icon: Shield,
    title: "5-Year Warranty",
    text: "Every installation is backed by a comprehensive 5-year warranty on materials and workmanship. We stand behind our work.",
  },
  {
    Icon: MapPin,
    title: "Local Geelong Service",
    text: "Owned and operated by Michael & Gabe. We know Geelong, we live here, and we're committed to delivering for our local community.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Epoxy Flooring Services in Geelong
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            From residential garages to large-scale commercial and industrial
            facilities, NuLook Floors Geelong delivers premium epoxy flooring
            solutions across the region.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Why NuLook Floors */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading
          label="WHY NULOOK"
          heading="Why NuLook Floors?"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="bg-surface border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <card.Icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Need a Quote for Your Project?"
        subtext="Contact us for a free, no-obligation quote. We'll visit your property and provide a fixed written price."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/gallery" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ColourGrid } from "@/components/sections/ColourGrid";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { colours } from "@/data/colours";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Floor Colours Geelong | 13 NuLook Options",
  description:
    "Browse all 13 NuLook epoxy floor colours available in Geelong. UV-stable, professionally tested flake blends. Request free colour samples at your quote appointment.",
  path: "/colours",
});

export default function ColoursPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / Colours
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Choose Your Epoxy Colour
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            All 13 NuLook colours are professionally tested and UV-stable. Click
            any colour to see details and get a quote.
          </p>
        </div>
      </section>

      {/* Full colour grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <ColourGrid colours={colours} />
      </section>

      {/* Samples CTA */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <SectionHeading
          heading="Need to See Samples in Person?"
          subtext="We bring physical colour samples to your property during your free quote appointment so you can see them in your actual lighting conditions."
          align="center"
        />
        <div className="mt-8">
          <Button href="/contact" size="lg">
            Book a Free Quote &amp; See Samples
          </Button>
        </div>
      </section>

      <CTABanner
        heading="Found Your Colour?"
        subtext="Get a free quote and we'll bring samples to your property. No obligation - just great advice."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/gallery" }}
      />
    </>
  );
}

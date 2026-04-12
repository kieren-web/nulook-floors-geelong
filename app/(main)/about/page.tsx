import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsGrid } from "@/components/ui/StatsGrid";
import { CTABanner } from "@/components/ui/CTABanner";
import { siteConfig } from "@/data/siteConfig";
import { Shield, Award, Clock, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "About NuLook Floors Geelong | Local Epoxy Specialists",
  description:
    "Meet Michael & Gabe - NuLook Floors Geelong. Local epoxy specialists backed by 25+ years NuLook experience and 26,000+ floors completed nationally. Serving Greater Geelong.",
  path: "/about",
});

const differenceCards = [
  {
    Icon: Shield,
    title: "25+ Years of Proven Systems",
    text: "The NuLook Floors network has refined epoxy flooring over two decades. Every product, technique, and process is battle-tested across thousands of Australian floors.",
  },
  {
    Icon: Award,
    title: "Best Garage on The Block",
    text: "NuLook Floors was recognised on Channel 9's The Block - a testament to the premium finish and quality that defines every NuLook installation.",
  },
  {
    Icon: CheckCircle,
    title: "5-Year Warranty, Every Job",
    text: "Every NuLook Floors Geelong installation is backed by a comprehensive 5-year warranty on materials and workmanship. We stand behind our work.",
  },
  {
    Icon: Clock,
    title: "26,000+ Floors Completed",
    text: "Across Australia, the NuLook network has delivered over 26,000 epoxy floors. That experience flows into every Geelong project we complete.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About NuLook Floors Geelong
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <SectionHeading
          label="OUR STORY"
          heading="Local Experts, Proven System"
        />
        <div className="mt-6 space-y-4 text-muted text-lg leading-relaxed">
          <p>
            NuLook Floors Geelong is owned and operated by Michael and Gabe -
            two locals who know the Geelong region inside out. From residential
            garages in Newtown to commercial warehouses in Corio, we bring
            hands-on expertise to every project.
          </p>
          <p>
            As part of the NuLook Floors Australia network, we combine local
            knowledge with a nationally proven epoxy flooring system refined over
            25+ years and 26,000+ installations. That means you get the personal
            attention of a local business, backed by the resources, training, and
            premium materials of Australia&apos;s leading epoxy flooring group.
          </p>
          <p>
            We believe in honest, fixed-price quoting - if we underquote, we
            honour our price. No surprises, no hidden costs. Just premium
            results delivered by people who care about getting it right.
          </p>
        </div>
      </section>

      <StatsGrid />

      {/* The NuLook Difference */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading
          label="WHY NULOOK"
          heading="The NuLook Difference"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {differenceCards.map((card) => (
            <div
              key={card.title}
              className="bg-surface border border-border rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                <card.Icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading
          label="SERVICE AREAS"
          heading="Proudly Serving Geelong & Surrounds"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {siteConfig.serviceAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-3"
            >
              <MapPin className="w-4 h-4 text-orange shrink-0" />
              <span className="text-white text-sm">{area}</span>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Ready to Work With a Local Team?"
        subtext="Get a free, no-obligation quote from Michael & Gabe. We'll visit your property, discuss your needs, and provide a fixed written quote."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}

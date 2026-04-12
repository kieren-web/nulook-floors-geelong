import { CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { siteConfig } from "@/data/siteConfig";
import { faqs } from "@/data/faqs";

interface SuburbPageProps {
  suburb: string;
  slug: string;
  description: string;
  nearbySuburbs?: string[];
}

const includes = [
  "Diamond-ground surface preparation",
  "13 NuLook colour options with flake blends",
  "Anti-slip UV-stable topcoat",
  "5-year warranty on every installation",
  "Fixed written quote - no surprises",
  "Completed in 1–2 days, drive-on in 72 hours",
];

const suburbFaqs = faqs.filter((f) => f.page === "home").slice(0, 4);

export function SuburbPage({ suburb, slug, description, nearbySuburbs = [] }: SuburbPageProps) {
  return (
    <>
      <ServiceSchema
        name={`Epoxy Flooring ${suburb}`}
        description={`Professional epoxy floor coatings for residential garages and commercial floors in ${suburb}. NuLook Floors Geelong installs premium 5-layer epoxy systems with a 5-year warranty.`}
        url={`/services/epoxy-flooring-${slug}`}
      />

      {/* Hero */}
      <section className="relative bg-[#111] border-b border-border py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/garage-classic-cars.jpg"
            alt={`Epoxy flooring ${suburb}`}
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {" / "}
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            {" / "}Epoxy Flooring {suburb}
          </p>
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">
            Local Epoxy Flooring Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Epoxy Flooring {suburb}
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-semibold rounded-lg px-6 py-3 transition-colors btn-glow"
            >
              <Phone className="w-4 h-4" />
              Call {siteConfig.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-surface hover:border-orange border border-border text-white font-semibold rounded-lg px-6 py-3 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <SectionHeading
          label="WHAT YOU GET"
          heading={`Our ${suburb} Epoxy Flooring Service`}
          subtext={`Every NuLook Floors installation in ${suburb} follows our proven 5-layer system - the same system that won Best Garage on The Block.`}
        />
        <ul className="mt-8 space-y-3">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange shrink-0 mt-0.5" />
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Photo strip */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { src: "/images/gallery/garage-classic-cars.jpg", alt: `Epoxy garage floor ${suburb}` },
            { src: "/images/gallery/residential-puppy.jpg", alt: `Residential epoxy flooring ${suburb}` },
            { src: "/images/gallery/commercial-warehouse.jpg", alt: `Commercial epoxy floor ${suburb}` },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Nearby suburbs */}
      {nearbySuburbs.length > 0 && (
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <SectionHeading
            label="ALSO SERVICING"
            heading={`Near ${suburb}? We Cover Your Area Too`}
          />
          <p className="mt-4 text-muted">
            NuLook Floors Geelong services {suburb} and all nearby suburbs including{" "}
            {nearbySuburbs.join(", ")}. Call us to confirm we cover your exact location.
          </p>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <SectionHeading
          label="FAQ"
          heading={`Epoxy Flooring Questions - ${suburb}`}
          align="center"
        />
        <div className="mt-12">
          <FAQAccordion faqs={suburbFaqs} />
        </div>
      </section>

      <CTABanner
        heading={`Get a Free Epoxy Quote in ${suburb}`}
        subtext="Michael & Gabe will visit your property, assess the floor, and provide a fixed written quote - completely free."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "Call Now", href: siteConfig.phoneTel }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ColourGrid } from "@/components/sections/ColourGrid";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { CTABanner } from "@/components/ui/CTABanner";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { colours } from "@/data/colours";
import { faqs } from "@/data/faqs";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const service = services[0];
const residentialFaqs = faqs.filter((f) => f.page === "residential");
const residentialTestimonials = testimonials.filter(
  (t) => t.projectType === "residential"
);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/residential-garage-flooring",
});

export default function ResidentialGarageFlooringPage() {
  return (
    <>
      <FAQSchema faqs={residentialFaqs} />
      <ServiceSchema
        name="Residential Garage Epoxy Flooring Geelong"
        description="Premium garage epoxy flooring for Geelong homes. Diamond-ground surface preparation, 13 NuLook colour options, anti-slip topcoat, and a 5-year warranty on every installation."
        url="/services/residential-garage-flooring"
      />

      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>{" "}
            / Residential Garage Flooring
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            Premium epoxy garage flooring for homes across Geelong, Torquay,
            Ocean Grove, and the Surf Coast. Diamond-ground prep, 13 colours,
            and a 5-year warranty on every job.
          </p>
        </div>
      </section>

      {/* Full description + features */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <p className="text-muted text-lg leading-relaxed mb-10">
          {service.fullDescription}
        </p>
        <SectionHeading heading="What's Included" />
        <ul className="mt-6 space-y-3">
          {service.features.map((feature) => (
            <li
              key={feature.text}
              className="flex items-start gap-3 text-white"
            >
              <CheckCircle className="w-5 h-5 text-orange shrink-0 mt-0.5" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <ProcessSteps />

      {/* Colour preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading
          label="COLOUR OPTIONS"
          heading="Choose Your Colour"
          subtext="All 13 NuLook colours are UV-stable and professionally tested. View samples during your free quote appointment."
        />
        <div className="mt-12">
          <ColourGrid colours={colours.slice(0, 6)} totalCount={colours.length} preview={true} />
        </div>
      </section>

      {/* Testimonials */}
      {residentialTestimonials.length > 0 && (
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <SectionHeading
            label="CUSTOMER FEEDBACK"
            heading="What Homeowners Say"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {residentialTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <SectionHeading
          label="FAQ"
          heading="Residential Garage Flooring FAQs"
          align="center"
        />
        <div className="mt-12">
          <FAQAccordion faqs={residentialFaqs} />
        </div>
      </section>

      <CTABanner
        heading="Get a Free Garage Floor Quote"
        subtext="We'll visit your property, assess the floor, discuss colour options, and provide a fixed written quote - completely free."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Colours", href: "/colours" }}
      />
    </>
  );
}

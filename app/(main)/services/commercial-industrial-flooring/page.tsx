import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { CTABanner } from "@/components/ui/CTABanner";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import {
  CheckCircle,
  Warehouse,
  Wrench,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Factory,
} from "lucide-react";
import Link from "next/link";

const service = services[1];
const commercialFaqs = faqs.filter((f) => f.page === "commercial");
const commercialTestimonials = testimonials.filter(
  (t) => t.projectType === "commercial"
);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/commercial-industrial-flooring",
});

const industryApplications = [
  {
    Icon: Warehouse,
    title: "Warehouses",
    text: "Heavy-duty flooring built for forklifts, pallet jacks, and constant foot traffic.",
  },
  {
    Icon: Wrench,
    title: "Automotive Workshops",
    text: "Oil, fuel, and chemical resistant floors that clean up easily and look professional.",
  },
  {
    Icon: Store,
    title: "Showrooms",
    text: "High-gloss finishes that create a premium first impression for your customers.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Food & Beverage",
    text: "Seamless, non-porous surfaces that meet hygiene standards and resist spills.",
  },
  {
    Icon: ShoppingBag,
    title: "Retail Spaces",
    text: "Durable, attractive floors that handle high foot traffic while looking great.",
  },
  {
    Icon: Factory,
    title: "Industrial Plants",
    text: "Maximum durability for the toughest environments - chemical, impact, and abrasion resistant.",
  },
];

export default function CommercialIndustrialFlooringPage() {
  return (
    <>
      <FAQSchema faqs={commercialFaqs} />
      <ServiceSchema
        name="Commercial & Industrial Epoxy Flooring Geelong"
        description="Heavy-duty commercial epoxy flooring for Geelong warehouses, workshops, showrooms and industrial facilities. Chemical resistant, scheduled to minimise business downtime."
        url="/services/commercial-industrial-flooring"
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
            / Commercial &amp; Industrial Flooring
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Industry applications */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading
          label="INDUSTRY APPLICATIONS"
          heading="Built for Every Commercial Environment"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryApplications.map((app) => (
            <div
              key={app.title}
              className="bg-surface border border-border rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                <app.Icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-white font-semibold mb-2">{app.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{app.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <SectionHeading heading="Commercial-Grade Features" />
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
        <p className="mt-8 text-muted text-lg leading-relaxed">
          {service.fullDescription}
        </p>
      </section>

      {/* Testimonials */}
      {commercialTestimonials.length > 0 && (
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <SectionHeading
            label="CUSTOMER FEEDBACK"
            heading="What Our Commercial Clients Say"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercialTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <SectionHeading
          label="FAQ"
          heading="Commercial Flooring FAQs"
          align="center"
        />
        <div className="mt-12">
          <FAQAccordion faqs={commercialFaqs} />
        </div>
      </section>

      <CTABanner
        heading="Need a Commercial Flooring Quote?"
        subtext="We work with businesses across Geelong and the Surf Coast. Contact us for a free site assessment and fixed written quote."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
      />
    </>
  );
}

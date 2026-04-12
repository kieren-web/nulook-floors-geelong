import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsGrid } from "@/components/ui/StatsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ColourGrid } from "@/components/sections/ColourGrid";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { colours } from "@/data/colours";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";
import { MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Geelong | NuLook Floors — Free Quote",
  description:
    "Premium epoxy flooring in Geelong. Residential garages, commercial floors & workshops. 5-year warranty, 13 colour options, local installers. Call 0466 385 069 for a free quote.",
  path: "/",
});

const homeFaqs = faqs.filter((f) => f.page === "home");

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <HeroSection />

      {/* Stats */}
      <ScrollReveal>
        <StatsGrid />
      </ScrollReveal>

      {/* Services */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            label="WHAT WE DO"
            heading="Epoxy Flooring Services in Geelong"
            subtext="From residential garages to large-scale commercial facilities — NuLook Floors Geelong delivers premium results backed by the NuLook network."
          />
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 120} direction="up">
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <ScrollReveal threshold={0.05}>
        <ProcessSteps />
      </ScrollReveal>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            label="WHAT CUSTOMERS SAY"
            heading="Trusted by Geelong Homeowners & Businesses"
          />
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 120} direction="up">
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Colours preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            label="COLOUR OPTIONS"
            heading="13 Premium Epoxy Colours"
            subtext="Choose from our full range of NuLook colour options and flake blends. Samples available on request."
          />
        </ScrollReveal>
        <ScrollReveal delay={150} threshold={0.05}>
          <div className="mt-12">
            <ColourGrid colours={colours.slice(0, 6)} totalCount={colours.length} preview={true} />
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            label="FAQ"
            heading="Common Questions About Epoxy Flooring"
            align="center"
          />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-12">
            <FAQAccordion faqs={homeFaqs} />
          </div>
        </ScrollReveal>
      </section>

      {/* Service areas */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              label="SERVICE AREAS"
              heading="Proudly Serving Geelong &amp; Surrounds"
              subtext="We travel to all suburbs across Greater Geelong, the Bellarine Peninsula, and the Surf Coast."
              align="center"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {siteConfig.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-white"
                >
                  <MapPin className="w-3 h-3 text-orange" />
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal threshold={0.05}>
        <CTABanner
          heading="Ready to Transform Your Floor?"
          subtext="Get a free, no-obligation quote from Geelong's epoxy flooring specialists. We'll visit your property and provide a fixed written quote."
          primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
          secondaryCta={{ label: "View Our Work", href: "/gallery" }}
        />
      </ScrollReveal>
    </>
  );
}

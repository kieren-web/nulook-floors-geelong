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
  title: "Epoxy Flooring Geelong | NuLook Floors - Free Quote",
  description:
    "Premium epoxy flooring in Geelong. Residential garages, commercial floors & workshops. 5-year warranty, 13 colour options, local installers. Call 0402 185 502 for a free quote.",
  path: "/",
});

const homeFaqs = faqs.filter((f) => f.page === "home");

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Stats - very dark with orange glow ───────────────────── */}
      <ScrollReveal>
        <StatsGrid />
      </ScrollReveal>

      {/* ── Services - base background ───────────────────────────── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              label="WHAT WE DO"
              heading="Epoxy Flooring Services in Geelong"
              subtext="From residential garages to large-scale commercial facilities - NuLook Floors Geelong delivers premium results backed by the NuLook network."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 120} direction="up">
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof strip ──────────────────────────────────────────── */}
      <ScrollReveal threshold={0.1}>
        <section className="relative py-16 px-4 bg-[#111] overflow-hidden">
          {/* Subtle orange glow centre */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(232,100,12,0.10)_0%,transparent_65%)] pointer-events-none" />
          {/* Top divider line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          {/* Bottom divider line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-border/50">
              <div className="text-center md:px-8">
                <p className="text-orange text-xs font-semibold tracking-widest uppercase mb-2">Surface Prep</p>
                <p className="text-white font-semibold text-lg">Diamond-Ground Every Time</p>
                <p className="text-muted text-sm mt-1 leading-relaxed">No shortcuts - full diamond grind for a permanent bond.</p>
              </div>
              <div className="text-center md:px-8">
                <p className="text-orange text-xs font-semibold tracking-widest uppercase mb-2">The System</p>
                <p className="text-white font-semibold text-lg">Premium NuLook Product</p>
                <p className="text-muted text-sm mt-1 leading-relaxed">The same proven system behind 26,000+ installs nationally.</p>
              </div>
              <div className="text-center md:px-8">
                <p className="text-orange text-xs font-semibold tracking-widest uppercase mb-2">Your Quote</p>
                <p className="text-white font-semibold text-lg">Fixed Written Price</p>
                <p className="text-muted text-sm mt-1 leading-relaxed">The quote never changes - even if we underquote.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Process - dark section with orange connector ──────────── */}
      <ScrollReveal threshold={0.05}>
        <ProcessSteps />
      </ScrollReveal>

      {/* ── Testimonials - slightly lighter dark ─────────────────── */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* ── Colours - base background ────────────────────────────── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* ── FAQ - dark section ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* ── Service areas ────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#111] border-t border-border">
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

      {/* ── CTA - photo background ───────────────────────────────── */}
      <ScrollReveal threshold={0.05}>
        <CTABanner
          heading="Ready to Transform Your Floor?"
          subtext="Get a free, no-obligation quote from Geelong's epoxy flooring specialists. We'll visit your property and provide a fixed written quote."
          primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
          secondaryCta={{ label: "View Our Work", href: "/gallery" }}
          imageSrc="/images/gallery/commercial-warehouse.jpg"
        />
      </ScrollReveal>
    </>
  );
}

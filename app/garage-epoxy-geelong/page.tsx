import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { LandingLogoBar } from "@/components/layout/LandingLogoBar";
import { LandingHero } from "@/components/landing/LandingHero";
import { StatsGrid } from "@/components/ui/StatsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Garage Epoxy Flooring Geelong | Get a Free Quote",
  description:
    "Get a free quote for garage epoxy flooring in Geelong. Premium finish, 5-year warranty, installed by NuLook Floors Geelong. Answer a few quick questions to get started.",
  path: "/garage-epoxy-geelong",
  noindex: true,
});

const landingFaqs = faqs.filter((f) => f.page === "landing");

const processSteps = [
  {
    number: "01",
    title: "Free Site Visit",
    description: "We come to you, assess the floor, and hand you a fixed written quote - no surprises.",
  },
  {
    number: "02",
    title: "Surface Prep",
    description: "Diamond grinding removes contamination and opens the concrete for a permanent bond.",
  },
  {
    number: "03",
    title: "Epoxy Application",
    description: "Premium NuLook epoxy applied in your chosen colour and flake blend.",
  },
  {
    number: "04",
    title: "Drive-On Ready",
    description: "UV-stable topcoat applied. Walk on in 24 hrs, drive on in 72 hrs.",
  },
];

const galleryImages = [
  { src: "/images/gallery/garage-classic-cars.jpg", alt: "Epoxy garage floor with classic cars" },
  { src: "/images/gallery/residential-puppy.jpg", alt: "Residential garage epoxy floor" },
  { src: "/images/gallery/commercial-warehouse.jpg", alt: "Commercial warehouse epoxy floor" },
];

export default function LandingPage() {
  return (
    <>
      <LandingLogoBar />
      <LandingHero />

      {/* Stats */}
      <ScrollReveal>
        <StatsGrid />
      </ScrollReveal>

      {/* How It Works */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            label="THE PROCESS"
            heading="What Happens After You Submit"
            subtext="Simple, professional, and done in as little as one day."
            align="center"
          />
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100} direction="up">
              <div className="bg-surface border border-border rounded-xl p-6 text-center h-full">
                <div className="text-4xl font-bold text-orange mb-3">{step.number}</div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            label="OUR WORK"
            heading="Real Floors by NuLook Geelong"
            subtext="Every floor is installed by Michael &amp; Gabe - no subcontractors, no shortcuts."
            align="center"
          />
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 120} direction="up">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            label="FAQ"
            heading="Common Questions"
            align="center"
          />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-12">
            <FAQAccordion faqs={landingFaqs} />
          </div>
        </ScrollReveal>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-[#111] border-t border-border relative overflow-hidden">
        {/* Subtle orange glow at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Floor?
            </h2>
            <p className="mt-4 text-muted text-lg">
              Call Michael &amp; Gabe directly - or scroll back up and fill in the quick form.
            </p>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-3 mt-8 bg-orange hover:bg-orange-hover text-white font-bold text-xl rounded-xl px-8 py-4 transition-colors btn-glow"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phoneFormatted}
            </a>
            <p className="mt-4 text-muted text-sm">Free quote. No obligation.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Minimal footer */}
      <footer className="py-8 px-4 border-t border-border text-center">
        <p className="text-white font-semibold mb-1">{siteConfig.businessName}</p>
        <p className="text-muted text-sm">
          <a href={siteConfig.phoneTel} className="hover:text-orange transition-colors">
            {siteConfig.phoneFormatted}
          </a>
          {" · "}
          <a href={`mailto:${siteConfig.email}`} className="hover:text-orange transition-colors">
            {siteConfig.email}
          </a>
        </p>
        <p className="text-muted text-xs mt-2">
          &copy; {new Date().getFullYear()} {siteConfig.businessName}. Part of the NuLook Floors network.
        </p>
      </footer>
    </>
  );
}

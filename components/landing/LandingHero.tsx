import Image from "next/image";
import { Shield, Award, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MultiStepSurvey } from "./MultiStepSurvey";

const trustBadges = [
  { icon: Shield, text: "5-Year Residential Warranty" },
  { icon: Award, text: "Best Garage — The Block" },
  { icon: Clock, text: "On Time, Every Time" },
];

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/garage-classic-cars.jpg"
          alt="Premium epoxy garage floor Geelong"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55" />
      </div>

      {/* Faded logo watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pr-8 pointer-events-none">
        <Image
          src="/images/nulook-logo.jpg"
          alt=""
          width={600}
          height={196}
          className="w-[500px] opacity-[0.06] object-contain select-none"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <SectionLabel>Free Quote — Geelong &amp; Surrounds</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Geelong&apos;s Garage
            <br />
            Epoxy Specialists
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-lg">
            Transform your garage, workshop, or commercial floor with a premium
            NuLook epoxy coating. Installed by Michael &amp; Gabe — local,
            professional, backed by 25+ years of NuLook expertise.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2"
              >
                <badge.icon className="w-4 h-4 text-orange shrink-0" />
                <span className="text-sm text-white">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Phone */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-muted text-sm mb-2">Or call us directly:</p>
            <a
              href={siteConfig.phoneTel}
              className="text-white text-2xl font-bold hover:text-orange transition-colors"
            >
              {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Right column — survey */}
        <div className="bg-[#1a1a1a]/90 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">Get Your Free Quote</h2>
            <p className="text-muted text-sm mt-1">Takes 60 seconds. No obligation.</p>
          </div>
          <MultiStepSurvey />
        </div>
      </div>
    </section>
  );
}

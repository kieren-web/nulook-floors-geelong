"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function LandingLogoBar() {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border h-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        <Image
          src="/images/nulook-logo.jpg"
          alt="NuLook Floors Geelong"
          width={130}
          height={42}
          className="h-9 w-auto object-contain"
          priority
        />
        <a
          href={siteConfig.phoneTel}
          className="flex items-center gap-2 text-white font-semibold hover:text-orange transition-colors"
        >
          <Phone className="w-4 h-4 text-orange" />
          <span className="text-base">{siteConfig.phoneFormatted}</span>
        </a>
      </div>
    </div>
  );
}

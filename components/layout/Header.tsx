import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/nulook-logo.jpg"
            alt="NuLook Floors Geelong"
            width={160}
            height={52}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <DesktopNav />

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.phoneTel}
            className="hidden md:flex items-center gap-2 text-muted hover:text-white transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phoneFormatted}
          </a>
          <Button href="/contact" size="sm" className="hidden md:inline-flex">
            Get a Free Quote
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

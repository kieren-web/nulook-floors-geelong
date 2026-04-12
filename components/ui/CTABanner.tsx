import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./Button";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  className?: string;
}

export function CTABanner({
  heading = "Ready to Transform Your Floor?",
  subtext = "Get a free, no-obligation quote for your Geelong epoxy flooring project.",
  primaryCta = { label: "Get a Free Quote", href: "/contact" },
  secondaryCta,
  imageSrc,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "relative py-24 px-4 overflow-hidden",
        !imageSrc && "bg-[#0a0a0a] border-t border-border",
        className
      )}
    >
      {/* Photo background (optional) */}
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        </>
      )}

      {/* Orange glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
      {/* Orange radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(232,100,12,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">
          Free Quote · No Obligation
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {heading}
        </h2>
        {subtext && (
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto leading-relaxed">
            {subtext}
          </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

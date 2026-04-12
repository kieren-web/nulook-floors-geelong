import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function CTABanner({
  heading = "Ready to Transform Your Floor?",
  subtext = "Get a free, no-obligation quote for your Geelong epoxy flooring project.",
  primaryCta = { label: "Get a Free Quote", href: "/contact" },
  secondaryCta,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "py-20 px-4 bg-[#111] border-t border-border relative overflow-hidden",
        className
      )}
    >
      {/* Subtle orange glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {heading}
        </h2>
        {subtext && (
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">{subtext}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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

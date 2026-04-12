import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Free Site Quote",
    description: "We visit, assess your floor, and provide a fixed written quote.",
  },
  {
    number: "02",
    title: "Surface Preparation",
    description: "Diamond grinding removes contaminants for a permanent bond.",
  },
  {
    number: "03",
    title: "Primer Coat",
    description: "Penetrating primer seals the concrete and ensures adhesion.",
  },
  {
    number: "04",
    title: "Epoxy Coat",
    description: "Premium NuLook epoxy applied with your chosen colour and flake blend.",
  },
  {
    number: "05",
    title: "Topcoat & Cure",
    description: "UV-stable protective topcoat applied. Drive-on ready in 72 hours.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 px-4 bg-[#0f0f0f] relative overflow-hidden">
      {/* Subtle top/bottom orange lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/25 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="HOW IT WORKS"
          heading="The NuLook Installation Process"
          subtext="Every floor follows the same proven 5-step system - refined over 25 years and 26,000+ installs."
          align="center"
        />

        {/* Desktop: horizontal with connecting line */}
        <div className="hidden lg:block mt-16 relative">
          {/* Orange connector line */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-px bg-gradient-to-r from-orange/20 via-orange/60 to-orange/20" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Number bubble */}
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-orange flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(232,100,12,0.3)]">
                  <span className="text-orange font-bold text-base">{step.number}</span>
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{step.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical with left line */}
        <div className="lg:hidden mt-12 relative">
          {/* Vertical orange line - centred on the 40px circles (left-5 = 20px) */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-orange/60 via-orange/40 to-orange/10" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                {/* Number bubble - in normal flow, never overlaps text */}
                <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border-2 border-orange flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_16px_rgba(232,100,12,0.25)]">
                  <span className="text-orange font-bold text-xs">{step.number}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

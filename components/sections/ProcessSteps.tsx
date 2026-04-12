const steps = [
  {
    number: "01",
    title: "Free Site Quote",
    description:
      "We visit, assess your floor, and provide a fixed written quote.",
  },
  {
    number: "02",
    title: "Surface Preparation",
    description:
      "Diamond grinding removes contaminants for a permanent bond.",
  },
  {
    number: "03",
    title: "Primer Coat",
    description:
      "Penetrating primer seals the concrete and ensures adhesion.",
  },
  {
    number: "04",
    title: "Epoxy Coat",
    description:
      "Premium NuLook epoxy applied with your chosen colour and flake blend.",
  },
  {
    number: "05",
    title: "Topcoat & Cure",
    description:
      "UV-stable protective topcoat applied. Drive-on ready in 72 hours.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop: horizontal */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-4xl font-bold text-orange mb-3">
                {step.number}
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="text-3xl font-bold text-orange shrink-0 w-12">
                {step.number}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

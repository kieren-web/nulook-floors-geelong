import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 flex flex-col">
      <p className="text-white leading-relaxed flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-muted text-sm font-medium">{testimonial.name}</p>
          <p className="text-muted text-xs">{testimonial.suburb}</p>
        </div>
        <span className="text-xs bg-border text-muted px-3 py-1 rounded-full capitalize">
          {testimonial.projectType}
        </span>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Car, Building2 } from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Building2,
};

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Car;

  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col",
        featured && "lg:col-span-2 border-orange/30"
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-orange" />
      </div>
      <h3 className="text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-2 text-muted leading-relaxed">
        {service.shortDescription}
      </p>
      <ul className="mt-4 space-y-2">
        {service.features.slice(0, 3).map((feature) => (
          <li
            key={feature.text}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <span className="text-orange mt-0.5">&#10003;</span>
            {feature.text}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href={`/services/${service.slug}`}
          className="text-orange font-semibold text-sm hover:underline"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}

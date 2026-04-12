import { cn } from "@/lib/utils";
import type { Stat } from "@/types";

interface StatsGridProps {
  stats?: Stat[];
  className?: string;
}

const defaultStats: Stat[] = [
  { value: "25+", label: "Years of Network Experience" },
  { value: "26,000+", label: "Floors Completed" },
  { value: "5-Year", label: "Residential Warranty" },
  { value: "Geelong", label: "Locally Owned & Operated" },
];

export function StatsGrid({ stats = defaultStats, className }: StatsGridProps) {
  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface border border-border rounded-xl p-6 text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-orange">
              {stat.value}
            </p>
            <p className="mt-2 text-muted text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

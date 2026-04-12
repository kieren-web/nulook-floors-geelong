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
    <section className={cn("relative overflow-hidden bg-[#0a0a0a] py-10 px-4", className)}>
      {/* Orange radial glow from bottom centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(232,100,12,0.18)_0%,transparent_70%)] pointer-events-none" />
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border/50">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-5 px-4 text-center">
              <p className="text-3xl md:text-4xl font-bold text-orange leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-muted text-xs uppercase tracking-widest font-medium max-w-[120px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

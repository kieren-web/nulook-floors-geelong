import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-orange text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2",
        className
      )}
    >
      <span className="inline-block w-2 h-2 rounded-full bg-orange" />
      {children}
    </p>
  );
}

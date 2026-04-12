import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-xl p-6",
        hover && "transition-all hover:border-orange/40 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

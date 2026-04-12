import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  subtext,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <SectionLabel className={align === "center" ? "justify-center" : ""}>
          {label}
        </SectionLabel>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{heading}</h2>
      {subtext && (
        <p className="mt-4 text-muted max-w-2xl text-lg leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}

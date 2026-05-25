import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-caption uppercase tracking-widest text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h2-mobile md:text-h2 text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-body-lg text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "success" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent: "bg-accent/10 text-accent border-accent/20",
  success: "bg-success/10 text-success border-success/20",
  neutral: "bg-bg-tertiary text-text-secondary border-border",
};

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

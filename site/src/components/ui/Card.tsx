import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-secondary border border-border rounded-lg p-8 transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5",
        className
      )}
    >
      {children}
    </div>
  );
}

"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { CountUp } from "@/components/ui/CountUp";
import { STATS } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="py-16 md:py-20 border-y border-border bg-bg-secondary/50">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-foreground">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="mt-2 text-sm text-text-secondary uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

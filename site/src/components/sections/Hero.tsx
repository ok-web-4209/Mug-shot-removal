"use client";

import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TextReveal } from "@/components/ui/TextReveal";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-secondary/5 blur-[100px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-primary)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-container px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <FadeInUp delay={0.1}>
            <div className="flex justify-center mb-8">
              <Badge variant="accent">
                <Shield size={14} />
                Attorney-Powered Removal — Not a Reputation Company
              </Badge>
            </div>
          </FadeInUp>

          {/* Headline */}
          <TextReveal
            as="h1"
            className="text-display-mobile md:text-display text-foreground mb-6"
            delay={0.2}
          >
            Remove Your Mugshot From The Internet
          </TextReveal>

          {/* Subheadline */}
          <FadeInUp delay={0.6}>
            <p className="text-body-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Your past doesn&apos;t define your future. Attorney David Hoffman uses
              legal authority — not just requests — to permanently remove your
              arrest photo from every website and search engine.
            </p>
          </FadeInUp>

          {/* CTAs */}
          <FadeInUp delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get Your Free Consultation
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("how-it-works")}
              >
                See How It Works
              </Button>
            </div>
          </FadeInUp>

          {/* Trust Signals */}
          <FadeInUp delay={1.0}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Award size={16} className="text-accent" />
                <span>Licensed Attorney</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Shield size={16} className="text-accent" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Clock size={16} className="text-accent" />
                <span>Results in 2-4 Weeks</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

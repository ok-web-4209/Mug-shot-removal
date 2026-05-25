"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerChildren, staggerItemVariants } from "@/components/ui/StaggerChildren";
import { PROCESS_STEPS } from "@/lib/constants";
import { Phone, Scale, Send, CheckCircle } from "lucide-react";

const stepIcons = [Phone, Scale, Send, CheckCircle];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <FadeInUp>
          <SectionHeader
            eyebrow="Process"
            title="How Mugshot Removal Works"
            description="A clear, attorney-driven process designed to permanently eliminate your arrest photo from the internet."
          />
        </FadeInUp>

        <StaggerChildren className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.step}
                variants={staggerItemVariants}
                className="relative pl-16 md:pl-20 pb-12 last:pb-0"
              >
                {/* Step Node */}
                <div className="absolute left-2 md:left-4 top-0 w-8 h-8 md:w-8 md:h-8 rounded-full bg-bg-secondary border-2 border-accent flex items-center justify-center z-10">
                  <Icon size={14} className="text-accent" />
                </div>

                {/* Content */}
                <div>
                  <span className="text-caption text-accent uppercase tracking-widest">
                    Step {step.step}
                  </span>
                  <h3 className="text-h3-mobile md:text-h3 text-foreground mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

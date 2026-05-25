"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StaggerChildren, staggerItemVariants } from "@/components/ui/StaggerChildren";
import { SERVICES } from "@/lib/constants";
import { Shield, Search, FileX, Eye, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Search,
  FileX,
  Eye,
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-bg-secondary/30">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <FadeInUp>
          <SectionHeader
            eyebrow="Services"
            title="Comprehensive Removal Solutions"
            description="Every avenue of removal, backed by the legal authority only a licensed attorney can provide."
          />
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <motion.div key={i} variants={staggerItemVariants}>
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-h3-mobile md:text-h3 text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

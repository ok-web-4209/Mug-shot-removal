"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="section-padding bg-bg-secondary/30">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <FadeInUp>
          <SectionHeader
            eyebrow="Results"
            title="Client Success Stories"
            description="Real results from real people who took control of their online presence."
          />
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="max-w-3xl mx-auto">
            {/* Testimonial Card */}
            <div className="relative bg-bg-secondary border border-border rounded-xl p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
              <Quote
                size={40}
                className="absolute top-6 left-6 text-accent/20"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {TESTIMONIALS[current].author}, {TESTIMONIALS[current].location}
                      </p>
                      <p className="text-xs text-accent mt-1">
                        {TESTIMONIALS[current].result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border hover:border-accent text-text-secondary hover:text-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current
                        ? "bg-accent w-6"
                        : "bg-border hover:bg-text-muted"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border border-border hover:border-accent text-text-secondary hover:text-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-body font-medium text-foreground pr-8 group-hover:text-accent transition-colors">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "flex-shrink-0 text-text-muted transition-transform duration-300",
            isOpen && "rotate-180 text-accent"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-body text-text-secondary">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <FadeInUp>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Get answers to common questions about mugshot removal."
          />
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="max-w-3xl mx-auto bg-bg-secondary border border-border rounded-xl p-6 md:p-8">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";
import { Award, BookOpen, Scale, Users } from "lucide-react";

const credentials = [
  { icon: Scale, label: "State Bar Licensed" },
  { icon: BookOpen, label: "J.D., Juris Doctor" },
  { icon: Users, label: "500+ Clients Served" },
  { icon: Award, label: "Specialized Practice" },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual */}
          <FadeInUp>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl bg-bg-secondary border border-border overflow-hidden flex items-center justify-center">
                {/* Placeholder for attorney photo */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-6">
                    <Scale size={48} className="text-accent" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    David Hoffman
                  </p>
                  <p className="text-sm text-text-secondary">Attorney at Law</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg border border-accent/30 -z-10" />
            </div>
          </FadeInUp>

          {/* Content */}
          <FadeInUp delay={0.2}>
            <div>
              <Badge variant="accent" className="mb-4">About</Badge>
              <h2 className="text-h2-mobile md:text-h2 text-foreground mb-6">
                Legal Authority, Not Just Reputation Management
              </h2>
              <div className="space-y-4 text-body text-text-secondary mb-8">
                <p>
                  I&apos;m David Hoffman, and I built this practice for one reason:
                  too many people are being held hostage by outdated arrest photos
                  that have no business being online.
                </p>
                <p>
                  Unlike reputation management companies that send polite emails,
                  I leverage the full weight of the law — cease-and-desist letters,
                  DMCA demands, expungement filings, and when necessary, litigation.
                  Websites respond differently when a licensed attorney is on the
                  other end.
                </p>
                <p>
                  Every case I take is personal. Your mugshot isn&apos;t just a photo —
                  it&apos;s costing you jobs, relationships, and peace of mind. I&apos;m
                  here to fix that, permanently.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-md bg-bg-secondary border border-border"
                  >
                    <cred.icon size={18} className="text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{cred.label}</span>
                  </div>
                ))}
              </div>

              <Button onClick={() => scrollToSection("contact")}>
                Schedule a Confidential Consultation
              </Button>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

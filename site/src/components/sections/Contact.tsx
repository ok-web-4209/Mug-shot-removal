"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Phone,
  Mail,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  caseStatus: string;
  siteCount: string;
  message: string;
  honeypot: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  caseStatus: "",
  siteCount: "",
  message: "",
  honeypot: "",
};

export function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Bot detected

    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const canProceed = () => {
    if (step === 1) return formData.name && formData.email && formData.phone;
    if (step === 2) return formData.caseStatus;
    return true;
  };

  return (
    <section id="contact" className="section-padding bg-bg-secondary/30">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16">
        <FadeInUp>
          <SectionHeader
            eyebrow="Contact"
            title="Start Your Free Consultation"
            description="Tell us about your situation. All communications are protected by attorney-client privilege."
          />
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <div className="lg:col-span-3 bg-bg-secondary border border-border rounded-xl p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-success" />
                    </div>
                    <h3 className="text-h3 text-foreground mb-2">
                      Consultation Requested
                    </h3>
                    <p className="text-body text-text-secondary">
                      We&apos;ll contact you within 24 hours to schedule your free,
                      confidential consultation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Progress Bar */}
                    <div className="flex gap-2 mb-8">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            s <= step ? "bg-accent" : "bg-border"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="website"
                      value={formData.honeypot}
                      onChange={(e) => updateField("honeypot", e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <p className="text-sm font-medium text-text-secondary mb-4">
                            Step 1 of 3 — Your Information
                          </p>
                          <Input
                            id="name"
                            label="Full Name"
                            value={formData.name}
                            onChange={(e) => updateField("name", e.target.value)}
                          />
                          <Input
                            id="email"
                            label="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                          />
                          <Input
                            id="phone"
                            label="Phone Number"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateField("phone", e.target.value)}
                          />
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <p className="text-sm font-medium text-text-secondary mb-4">
                            Step 2 of 3 — Case Details
                          </p>
                          <div className="space-y-3">
                            <p className="text-sm text-foreground font-medium">
                              Case Status
                            </p>
                            {[
                              "Charges dismissed",
                              "Case expunged",
                              "Case pending",
                              "Convicted (completed sentence)",
                              "Not sure",
                            ].map((option) => (
                              <label
                                key={option}
                                className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer transition-all ${
                                  formData.caseStatus === option
                                    ? "border-accent bg-accent/5"
                                    : "border-border hover:border-text-muted"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="caseStatus"
                                  value={option}
                                  checked={formData.caseStatus === option}
                                  onChange={(e) =>
                                    updateField("caseStatus", e.target.value)
                                  }
                                  className="sr-only"
                                />
                                <div
                                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                    formData.caseStatus === option
                                      ? "border-accent"
                                      : "border-text-muted"
                                  }`}
                                >
                                  {formData.caseStatus === option && (
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                  )}
                                </div>
                                <span className="text-sm text-foreground">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                          <Input
                            id="siteCount"
                            label="Approx. number of sites showing your mugshot"
                            value={formData.siteCount}
                            onChange={(e) =>
                              updateField("siteCount", e.target.value)
                            }
                          />
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <p className="text-sm font-medium text-text-secondary mb-4">
                            Step 3 of 3 — Additional Details (Optional)
                          </p>
                          <textarea
                            id="message"
                            placeholder="Anything else you'd like us to know about your situation..."
                            value={formData.message}
                            onChange={(e) =>
                              updateField("message", e.target.value)
                            }
                            className="w-full min-h-[120px] px-4 py-3 bg-bg-tertiary border border-border rounded-md text-foreground placeholder:text-text-muted transition-all duration-200 focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none resize-y"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-8">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors"
                        >
                          <ArrowLeft size={16} />
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={() => setStep(step + 1)}
                          disabled={!canProceed()}
                        >
                          Continue
                          <ArrowRight size={16} />
                        </Button>
                      ) : (
                        <Button type="submit" loading={loading}>
                          Submit Request
                        </Button>
                      )}
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-bg-secondary border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Call Us</p>
                      <a
                        href={`tel:${SITE_CONFIG.attorney.phoneRaw}`}
                        className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {SITE_CONFIG.attorney.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.attorney.email}`}
                        className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {SITE_CONFIG.attorney.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Response Time</p>
                      <p className="text-sm font-medium text-foreground">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 text-center">
                  <Shield size={28} className="text-accent mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground mb-1">
                    100% Confidential
                  </p>
                  <p className="text-xs text-text-secondary">
                    All communications protected by attorney-client privilege.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

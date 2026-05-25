"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="glass border-t border-border px-4 py-3">
            <div className="flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.attorney.phoneRaw}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md bg-bg-tertiary border border-border text-foreground font-medium text-sm transition-colors hover:border-accent"
              >
                <Phone size={16} />
                Call Now
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md bg-accent text-[#0a0a0f] font-semibold text-sm transition-all hover:bg-accent-hover"
              >
                <MessageSquare size={16} />
                Free Consult
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

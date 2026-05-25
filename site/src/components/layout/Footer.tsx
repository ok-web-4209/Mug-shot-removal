import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-container px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-xl font-bold text-foreground tracking-tight">
              Hoffman<span className="text-accent">.</span>Legal
            </a>
            <p className="mt-4 text-text-secondary max-w-md">
              Attorney David Hoffman specializes exclusively in removing mugshots
              and arrest records from the internet. Legal authority you can trust.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`tel:${SITE_CONFIG.attorney.phoneRaw}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <Phone size={16} />
                <span>{SITE_CONFIG.attorney.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.attorney.email}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span>{SITE_CONFIG.attorney.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted text-center md:text-left">
              &copy; {new Date().getFullYear()} Hoffman Legal. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Scale size={14} />
              <span>
                Attorney Advertising. Prior results do not guarantee a similar outcome.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { STUDIO_CONTACT } from '../data/studio';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-20 w-full max-w-[1200px] px-4 pb-20 sm:px-6">
      <div className="apple-glass rounded-[28px] p-8 sm:p-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Stacked Column */}
          <div className="flex flex-col items-start gap-4 md:col-span-4">
            <Link to="/" aria-label="Sushant Chavan Photography Home">
              <BrandLogo variant="stacked" className="h-24 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              {STUDIO_CONTACT.ctaPhilosophy}
            </p>
            <ThemeToggle showLabel />
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Studio Pages
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[var(--text-primary)] hover:text-[#FF8A00] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[var(--text-primary)] hover:text-[#FF8A00] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[var(--text-primary)] hover:text-[#FF8A00] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[var(--text-primary)] hover:text-[#FF8A00] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-[var(--text-primary)] hover:text-[#FF8A00] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[var(--text-primary)] hover:text-[#FF8A00] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication Column */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Direct Connect · Mumbai
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Studio</span>
              </a>

              <div className="flex flex-col gap-2 pt-1 text-sm">
                <a
                  href={STUDIO_CONTACT.phone1Href}
                  className="inline-flex items-center gap-2.5 text-[var(--text-primary)] hover:text-[#0EA5B8] transition-colors tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#0EA5B8]" aria-hidden="true" />
                  <span>{STUDIO_CONTACT.phone1Display}</span>
                </a>
                <a
                  href={STUDIO_CONTACT.phone2Href}
                  className="inline-flex items-center gap-2.5 text-[var(--text-primary)] hover:text-[#0EA5B8] transition-colors tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#0EA5B8]" aria-hidden="true" />
                  <span>{STUDIO_CONTACT.phone2Display}</span>
                </a>
                <a
                  href={STUDIO_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[var(--text-primary)] hover:text-[#FF8A00] transition-colors"
                >
                  <Instagram className="h-4 w-4 text-[#FF8A00]" aria-hidden="true" />
                  <span>{STUDIO_CONTACT.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[var(--glass-border)] pt-6 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center">
          <p>
            © {year} {STUDIO_CONTACT.brandName}. Mumbai, India.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

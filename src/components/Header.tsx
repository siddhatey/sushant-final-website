import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { WhatsAppIcon } from './WhatsAppIcon';
import { STUDIO_CONTACT } from '../data/studio';

const NAV_LINKS = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [drawerOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-3 pt-2.5 sm:px-6 sm:pt-3">
        <div className="apple-glass-nav mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-6 rounded-full px-4 sm:px-6">
          {/* Zone 1: Brand Lockup */}
          <Link
            to="/"
            aria-label="Sushant Chavan Photography Home"
            className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] rounded-lg"
          >
            <BrandLogo variant="horizontal" className="hidden h-7 w-auto sm:block" />
            <BrandLogo variant="icon" className="block h-7 w-7 sm:hidden" />
          </Link>

          {/* Zone 2: Concise Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] rounded ${
                    isActive
                      ? 'text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[#FF8A00]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Theme Switch + Instant WhatsApp CTA */}
          <div className="flex shrink-0 items-center gap-2.5">
            <ThemeToggle />
            <a
              href={STUDIO_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-spring hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FF8A00] px-4 py-2 text-xs font-semibold text-white hover:bg-[#E67C00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen((prev) => !prev)}
              aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={drawerOpen}
              className="apple-btn-spring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] text-[var(--text-primary)] md:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]"
            >
              {drawerOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glass Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-md md:hidden"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="apple-glass mx-3 mt-3 rounded-[28px] bg-[var(--glass-surface-strong)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <Link to="/" className="flex items-center" onClick={() => setDrawerOpen(false)}>
                <BrandLogo variant="horizontal" className="h-7 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] text-[var(--text-primary)] cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile Menu" className="flex flex-col gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF8A00]/12 text-[#FF8A00]'
                      : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`
                }
              >
                Home
              </NavLink>
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#FF8A00]/12 text-[#FF8A00]'
                        : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3 border-t border-[var(--glass-border)] pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--text-secondary)]">Appearance</span>
                <ThemeToggle showLabel />
              </div>

              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2.5 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Connect on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={STUDIO_CONTACT.phone1Href}
                  className="apple-btn-spring inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0EA5B8]" aria-hidden="true" />
                  <span className="tabular-nums">{STUDIO_CONTACT.phone1Display}</span>
                </a>
                <a
                  href={STUDIO_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-spring inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
                >
                  <Instagram className="h-3.5 w-3.5 text-[#FF8A00]" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

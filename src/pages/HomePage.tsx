import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BrandLogo } from '../components/BrandLogo';
import { FaqAccordion } from '../components/FaqAccordion';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  CAPABILITIES,
  TECHNICAL_SCOPE,
  PROCESS_STEPS,
  FAQ_ITEMS,
  STUDIO_CONTACT,
} from '../data/studio';

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead path="/" />

      <main className="mx-auto w-full max-w-[1200px] px-4 pt-8 sm:px-6 sm:pt-12">
        {/* Concise Studio Hero */}
        <section
          aria-labelledby="hero-heading"
          className="apple-glass flex flex-col items-center rounded-[28px] px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="mb-5">
            <BrandLogo variant="stacked" className="h-24 w-auto sm:h-32" />
          </div>

          <p className="text-xs font-medium tracking-wide text-[var(--text-secondary)] sm:text-sm">
            Films &amp; Photography <span aria-hidden="true">·</span> Kandivali West, Mumbai
          </p>

          <h1
            id="hero-heading"
            className="mt-3 max-w-4xl text-[clamp(2.2rem,5vw,4.1rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[var(--text-primary)]"
          >
            Real Moments.{' '}
            <span className="font-editorial font-medium italic text-[#FF8A00]">
              Timeless Stories.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {STUDIO_CONTACT.ctaPhilosophy} Full-frame weddings, family milestones, commercial
            stories, and fast in-house retouching across Mumbai and India.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/portfolio"
              className="apple-btn-spring inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#FF8A00] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#E67C00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] whitespace-nowrap"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={STUDIO_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-glass-interactive apple-btn-spring inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5B8] whitespace-nowrap"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* What We Shoot */}
        <section aria-labelledby="what-we-shoot-heading" className="mt-16">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
                Studio Services
              </p>
              <h2
                id="what-we-shoot-heading"
                className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
              >
                What We Shoot
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF8A00] hover:underline whitespace-nowrap"
            >
              <span>Full Production Details</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.id}
                className={`apple-glass-interactive flex flex-col justify-between rounded-[28px] p-6 sm:p-7 ${cap.aspectClass}`}
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span
                      className={`text-sm font-semibold tabular-nums ${
                        cap.accent === 'orange' ? 'text-[#FF8A00]' : 'text-[#0EA5B8]'
                      }`}
                    >
                      {cap.number}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {cap.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-xl font-semibold text-[var(--text-primary)]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {cap.description}
                  </p>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-2 border-t border-[var(--glass-border)] pt-4 text-sm text-[var(--text-primary)]">
                  {cap.highlights.map((point) => (
                    <li key={point} className="flex items-center gap-2.5">
                      <Check
                        className={`h-4 w-4 shrink-0 ${
                          cap.accent === 'orange' ? 'text-[#FF8A00]' : 'text-[#0EA5B8]'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Technical Scope: End-to-End Photo Production */}
        <section aria-labelledby="technical-scope-heading" className="mt-16">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
              Technical Scope
            </p>
            <h2
              id="technical-scope-heading"
              className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
            >
              End-to-End Photo Production
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TECHNICAL_SCOPE.map((item) => (
              <article key={item.number} className="apple-glass-interactive rounded-[24px] p-6">
                <span
                  className={`text-sm font-semibold tabular-nums ${
                    item.accent === 'orange' ? 'text-[#FF8A00]' : 'text-[#0EA5B8]'
                  }`}
                >
                  {item.number}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Workflow: Four Steps, One Studio */}
        <section aria-labelledby="workflow-home-heading" className="mt-16">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
              Workflow
            </p>
            <h2
              id="workflow-home-heading"
              className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
            >
              Four Steps, One Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="apple-glass-interactive rounded-[24px] p-6">
                <span className="text-sm font-semibold text-[#0EA5B8] tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Snapshot & Direct Callout */}
        <section aria-labelledby="faq-snapshot-heading" className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
              Planning Your Shoot
            </p>
            <h2
              id="faq-snapshot-heading"
              className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
            >
              Common Questions
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
              Availability, rapid retouching timelines, destination coverage, and heirloom albums.
            </p>

            <div className="apple-glass mt-5 rounded-[24px] p-6">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Connect with our Kandivali West Studio
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={STUDIO_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-spring inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2 text-xs font-semibold text-white hover:bg-[#E67C00]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={STUDIO_CONTACT.phone1Href}
                  className="apple-btn-spring inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] tabular-nums"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0EA5B8]" aria-hidden="true" />
                  <span>{STUDIO_CONTACT.phone1Display}</span>
                </a>
              </div>
            </div>

            <div className="mt-4">
              <Link
                to="/faq"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF8A00] hover:underline"
              >
                <span>Read All Questions</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FaqAccordion items={FAQ_ITEMS.slice(0, 3)} />
          </div>
        </section>
      </main>
    </>
  );
};

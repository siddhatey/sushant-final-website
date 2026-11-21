import React from 'react';
import { Phone, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  CAPABILITIES,
  TECHNICAL_SCOPE,
  PROCESS_STEPS,
  STUDIO_CONTACT,
} from '../data/studio';
import { AREA_SERVED_LIST, SITE_URL } from '../data/seo';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SeoHead
        path="/services"
        extraSchemas={CAPABILITIES.map((service) => ({
          '@type': 'Service',
          '@id': `${SITE_URL}/services#${service.id}`,
          name: service.title,
          serviceType: service.subtitle,
          description: service.description,
          provider: { '@id': `${SITE_URL}/#business` },
          areaServed: AREA_SERVED_LIST,
        }))}
      />

      <main className="mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-14">
        {/* Services Hero Banner */}
        <section className="apple-glass rounded-[28px] p-7 sm:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
                Production &amp; Craft · Kandivali West, Mumbai
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Films &amp; Photography Services
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {STUDIO_CONTACT.ctaPhilosophy} Full-frame photography, multi-angle coverage, rapid
                in-house retouching, and archival heirloom albums delivered with speed and care.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#FF8A00] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00] whitespace-nowrap"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Discuss Your Event</span>
              </a>
              <a
                href={STUDIO_CONTACT.phone1Href}
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-5 py-2.5 text-xs font-medium text-[var(--text-primary)] tabular-nums whitespace-nowrap"
              >
                <Phone className="h-3.5 w-3.5 text-[#0EA5B8]" aria-hidden="true" />
                <span>{STUDIO_CONTACT.phone1Display}</span>
              </a>
            </div>
          </div>
        </section>

        {/* What We Shoot */}
        <section aria-labelledby="services-grid-heading" className="mt-14">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
              Core Disciplines
            </p>
            <h2
              id="services-grid-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
            >
              What We Shoot
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {CAPABILITIES.map((service) => (
              <article
                key={service.id}
                className={`apple-glass-interactive flex flex-col justify-between rounded-[28px] p-6 sm:p-7 ${service.aspectClass}`}
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span
                      className={`text-sm font-semibold tabular-nums ${
                        service.accent === 'orange' ? 'text-[#FF8A00]' : 'text-[#0EA5B8]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm text-[var(--text-primary)]">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            service.accent === 'orange' ? 'text-[#FF8A00]' : 'text-[#0EA5B8]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--glass-border)] pt-4">
                  <a
                    href={STUDIO_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#FF8A00] hover:underline"
                  >
                    Enquire via WhatsApp →
                  </a>
                  <a
                    href={STUDIO_CONTACT.phone1Href}
                    className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] tabular-nums"
                  >
                    Call {STUDIO_CONTACT.phone1Display}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Technical Scope: End-to-End Photo Production */}
        <section aria-labelledby="tech-scope-heading" className="mt-16">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
              Technical Scope
            </p>
            <h2
              id="tech-scope-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
            >
              End-to-End Photo Production
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TECHNICAL_SCOPE.map((item) => (
              <article key={item.number} className="apple-glass-interactive rounded-[24px] p-6 sm:p-7">
                <span
                  className={`text-sm font-semibold tabular-nums ${
                    item.accent === 'orange' ? 'text-[#FF8A00]' : 'text-[#0EA5B8]'
                  }`}
                >
                  {item.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
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
        <section aria-labelledby="workflow-heading" className="mt-16">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
              Workflow
            </p>
            <h2
              id="workflow-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
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
                <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Booking CTA Bar */}
        <section className="apple-glass mt-14 rounded-[28px] p-7 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Check Date Availability in Mumbai
              </h2>
              <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                Share your celebration dates and venue on WhatsApp or call either studio line
                directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#FF8A00] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp Studio</span>
              </a>
              <a
                href={STUDIO_CONTACT.phone1Href}
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-5 py-2.5 text-xs font-medium text-[var(--text-primary)] tabular-nums"
              >
                <Phone className="h-3.5 w-3.5 text-[#0EA5B8]" aria-hidden="true" />
                <span>{STUDIO_CONTACT.phone1Display}</span>
              </a>
              <a
                href={STUDIO_CONTACT.phone2Href}
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-5 py-2.5 text-xs font-medium text-[var(--text-primary)] tabular-nums"
              >
                <Phone className="h-3.5 w-3.5 text-[#0EA5B8]" aria-hidden="true" />
                <span>{STUDIO_CONTACT.phone2Display}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

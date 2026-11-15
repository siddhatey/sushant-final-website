import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { FaqAccordion } from '../components/FaqAccordion';
import { FAQ_ITEMS, STUDIO_CONTACT } from '../data/studio';

export const FaqPage: React.FC = () => {
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SeoHead
        title="Frequently Asked Questions – Sushant Chavan Photography"
        description="Answers on booking timelines, wedding film & photo deliverables, custom heirloom albums, and shoot planning across Mumbai with Sushant Chavan Photography."
        path="/faq"
        extraSchemas={[faqSchema]}
      />

      <main className="mx-auto w-full max-w-[1000px] px-4 pt-10 sm:px-6 sm:pt-14">
        <section className="apple-glass rounded-[28px] p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
            Studio Guide · Mumbai
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Clear details on how we plan shoots across Mumbai, deliver cinematic wedding films and
            still galleries, and craft custom heirloom albums.
          </p>
        </section>

        <section aria-label="Questions and Answers" className="mt-8">
          <FaqAccordion items={FAQ_ITEMS} />
        </section>

        <section className="apple-glass mt-10 rounded-[28px] p-7 sm:p-9">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Have a specific venue or timeline question?
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Reach out directly—no forms, just a personal conversation with our Mumbai studio.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Studio</span>
              </a>
              <a
                href={STUDIO_CONTACT.phone1Href}
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-5 py-2.5 text-xs font-medium text-[var(--text-primary)] tabular-nums"
              >
                <Phone className="h-3.5 w-3.5 text-[#0EA5B8]" aria-hidden="true" />
                <span>{STUDIO_CONTACT.phone1Display}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

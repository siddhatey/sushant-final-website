import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Maximize2, Phone } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BrandLogo } from '../components/BrandLogo';
import { StudioImage } from '../components/StudioImage';
import { LightboxModal } from '../components/LightboxModal';
import { FaqAccordion } from '../components/FaqAccordion';
import {
  CAPABILITIES,
  FAQ_ITEMS,
  SHOWCASE_FRAMES,
  STUDIO_CONTACT,
} from '../data/studio';
import { STUDIO_IMAGES } from '../data/media';

export const HomePage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <SeoHead
        title="Sushant Chavan Photography – Films & Photography Mumbai"
        description="Real moments, timeless stories. Sushant Chavan Photography is a Mumbai films and photography studio crafting cinematic weddings, family milestones, and heirloom albums."
        path="/"
        extraSchemas={[
          {
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.slice(0, 3).map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      <main className="mx-auto w-full max-w-[1200px] px-4 pt-8 sm:px-6 sm:pt-14">
        {/* Studio Hero Section */}
        <section aria-labelledby="hero-heading" className="flex flex-col items-center text-center">
          <div className="mb-6">
            <BrandLogo variant="stacked" className="h-28 w-auto sm:h-36" />
          </div>

          <p className="text-xs font-medium tracking-wide text-[var(--text-secondary)] sm:text-sm">
            Films &amp; Photography <span aria-hidden="true">·</span> Mumbai, India
          </p>

          <h1
            id="hero-heading"
            className="mt-4 max-w-4xl text-[clamp(2.35rem,5.2vw,4.35rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[var(--text-primary)]"
          >
            Real Moments.{' '}
            <span className="font-editorial font-medium italic text-[#FF8A00]">
              Timeless Stories.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {STUDIO_CONTACT.ctaPhilosophy} We craft cinematic wedding films, authentic family
            portraits, and archival heirloom albums across Mumbai.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/portfolio"
              className="apple-btn-spring inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#FF8A00] px-7 py-3 text-sm font-semibold text-white hover:bg-[#E67C00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] whitespace-nowrap"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={STUDIO_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-glass-interactive apple-btn-spring inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5B8] whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 text-[#0EA5B8]" aria-hidden="true" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          {/* Hero Cinema Frame */}
          <div className="apple-glass mt-10 w-full overflow-hidden rounded-[28px] p-2.5 sm:mt-14 sm:p-3.5">
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              aria-label="Open Arabian Sea Golden Hour photograph in fullscreen"
              className="group relative block w-full overflow-hidden rounded-[20px] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]"
            >
              <StudioImage
                src={STUDIO_IMAGES.weddingCinema}
                alt="Indian bride and groom sharing a joyful golden-hour moment overlooking Mumbai"
                title="Arabian Sea Golden Hour"
                loading="eager"
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 sm:p-7">
                <div>
                  <p className="text-xs font-medium text-white/80">
                    Wedding Cinema &amp; Stills · South Mumbai · 35mm Prime
                  </p>
                  <p className="mt-1 text-base font-semibold text-white sm:text-xl">
                    Arabian Sea Golden Hour
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* Frosted Bento Capabilities Grid */}
        <section aria-labelledby="capabilities-heading" className="mt-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
                Studio Capabilities
              </p>
              <h2
                id="capabilities-heading"
                className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
              >
                End-to-End Films &amp; Photography
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF8A00] hover:underline whitespace-nowrap"
            >
              <span>View Full Production Scope</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.id}
                className={`apple-glass-interactive flex flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-7 ${cap.aspectClass}`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
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

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {cap.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-sm text-[var(--text-primary)]">
                    {cap.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                            cap.accent === 'orange' ? 'bg-[#FF8A00]' : 'bg-[#0EA5B8]'
                          }`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 overflow-hidden rounded-[20px]">
                  <StudioImage
                    src={cap.image}
                    alt={cap.imageAlt}
                    title={cap.title}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Curated Visual Showcase */}
        <section aria-labelledby="showcase-heading" className="mt-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
                Visual Archive Teaser
              </p>
              <h2
                id="showcase-heading"
                className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
              >
                Selected Frames Across Mumbai
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0EA5B8] hover:underline whitespace-nowrap"
            >
              <span>Open Live Instagram Portfolio</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SHOWCASE_FRAMES.map((frame, index) => (
              <button
                key={frame.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="apple-glass-interactive group flex flex-col overflow-hidden rounded-[28px] p-3 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]"
              >
                <div className="relative w-full overflow-hidden rounded-[20px]">
                  <StudioImage
                    src={frame.image}
                    alt={frame.alt}
                    title={frame.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>
                <div className="px-3 pb-2 pt-4">
                  <p className="text-xs text-[var(--text-secondary)]">
                    {frame.category} · {frame.location} · {frame.specs}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                    {frame.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)] line-clamp-2">
                    {frame.story}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Snapshot & Direct Callout */}
        <section aria-labelledby="faq-snapshot-heading" className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
              Planning Your Shoot
            </p>
            <h2
              id="faq-snapshot-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Common Questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Everything you need to know about availability, multi-day wedding cinema, family
              milestones, and custom heirloom albums in Mumbai.
            </p>

            <div className="apple-glass mt-6 rounded-[24px] p-6">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Prefer a quick conversation?
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Speak directly with Sushant or message the studio team.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={STUDIO_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-spring inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2 text-xs font-semibold text-white hover:bg-[#E67C00]"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
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

            <div className="mt-5">
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

      <LightboxModal
        frames={SHOWCASE_FRAMES}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelect={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};

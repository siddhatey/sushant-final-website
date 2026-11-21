import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BrandLogo } from '../components/BrandLogo';
import { StudioImage } from '../components/StudioImage';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { STUDIO_CONTACT } from '../data/studio';
import { STUDIO_IMAGES } from '../data/media';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SeoHead path="/about" />

      <main className="mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-14">
        <section className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Portrait Card */}
          <div className="apple-glass overflow-hidden rounded-[28px] p-3 lg:col-span-5">
            <StudioImage
              src={STUDIO_IMAGES.directorPortrait}
              alt="Sushant Chavan holding a cinema camera inside his sunlit Mumbai studio"
              title="Sushant Chavan"
              loading="eager"
              className="h-full min-h-[380px] w-full rounded-[20px] object-cover"
            />
          </div>

          {/* Narrative Card */}
          <div className="apple-glass flex flex-col justify-between rounded-[28px] p-7 sm:p-10 lg:col-span-7">
            <div>
              <div className="mb-6">
                <BrandLogo variant="stacked" className="h-20 w-auto" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
                Founder &amp; Creative Director · Mumbai
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Sushant Chavan
              </h1>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                <p>
                  Every celebration carries fleeting, unrepeatable warmth—a parent’s quiet pride
                  before a ceremony, effortless laughter across generations, or the stillness of
                  golden hour by the Arabian Sea.
                </p>
                <p>
                  At <strong className="text-[var(--text-primary)]">Sushant Chavan Photography</strong>,
                  we approach weddings and family milestones across Mumbai with quiet observation
                  and cinema-grade discipline. Instead of forcing stiff poses, we stay present so
                  your photographs and films feel exactly how the day felt.
                </p>
                <p>
                  From initial timeline planning to multi-angle cinematography, in-house color
                  grading, and hand-bound heirloom albums, every deliverable is crafted under one
                  cohesive creative roof.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--glass-border)] pt-6">
              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#FF8A00] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00] whitespace-nowrap"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Connect with Sushant</span>
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

        {/* Philosophy Pillars */}
        <section aria-labelledby="philosophy-heading" className="mt-14">
          <h2 id="philosophy-heading" className="sr-only">
            Creative Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="apple-glass-interactive rounded-[28px] p-7">
              <p className="text-sm font-semibold text-[#FF8A00] tabular-nums">01</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                Unscripted Presence
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                We move discreetly through rituals and family gatherings so elders, couples, and
                guests stay relaxed and genuine in front of the lens.
              </p>
            </div>

            <div className="apple-glass-interactive rounded-[28px] p-7">
              <p className="text-sm font-semibold text-[#0EA5B8] tabular-nums">02</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                Cohesive Films &amp; Stills
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Photography and cinema crews work as one synchronized unit—sharing lighting
                intent, color science, and emotional pacing.
              </p>
            </div>

            <div className="apple-glass-interactive rounded-[28px] p-7">
              <p className="text-sm font-semibold text-[#FF8A00] tabular-nums">03</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                Built to Outlast Trends
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                True-to-life skin tones, balanced contrast, and archival cotton-rag prints ensure
                your gallery looks timeless decades from today.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="apple-glass-interactive apple-btn-spring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[var(--text-primary)]"
            >
              <span>Explore Our Films &amp; Photography Services</span>
              <ArrowRight className="h-4 w-4 text-[#FF8A00]" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

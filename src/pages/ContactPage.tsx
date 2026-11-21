import React from 'react';
import { Phone, Instagram, MapPin, ArrowUpRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { STUDIO_CONTACT } from '../data/studio';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SeoHead path="/contact" />

      <main className="mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-14">
        <section className="apple-glass rounded-[28px] p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
            Direct Communication · Zero Forms
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Let’s Plan Your Story
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {STUDIO_CONTACT.ctaPhilosophy} Reach Sushant directly via WhatsApp or tap any studio
            number below to start a conversation.
          </p>
        </section>

        <section
          aria-label="Direct Contact Channels"
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* WhatsApp Click-to-Chat Card */}
          <a
            href={STUDIO_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-glass-interactive group flex flex-col justify-between rounded-[28px] p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15">
                  <WhatsAppIcon className="h-7 w-7" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-[var(--text-secondary)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF8A00]"
                  aria-hidden="true"
                />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[var(--text-primary)]">
                WhatsApp Click-to-Chat
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Fastest way to check date availability, share venue details, and receive tailored
                films and photography coverage recommendations.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF8A00]">
              <span>Message Sushant on WhatsApp</span>
            </div>
          </a>

          {/* Instagram Portfolio Card */}
          <a
            href={STUDIO_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-glass-interactive group flex flex-col justify-between rounded-[28px] p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5B8]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0EA5B8]/15 text-[#0EA5B8]">
                  <Instagram className="h-6 w-6" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-[var(--text-secondary)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0EA5B8]"
                  aria-hidden="true"
                />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[var(--text-primary)]">
                Instagram Portfolio
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Explore our latest wedding films, behind-the-scenes stories, and recent family
                celebrations across Mumbai.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0EA5B8]">
              <span>{STUDIO_CONTACT.instagramHandle}</span>
            </div>
          </a>

          {/* Primary Phone Line 1 */}
          <a
            href={STUDIO_CONTACT.phone1Href}
            className="apple-glass-interactive group flex flex-col justify-between rounded-[28px] p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5B8]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0EA5B8]/15 text-[#0EA5B8]">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Primary Line · Tap to Call
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums sm:text-3xl">
                {STUDIO_CONTACT.phone1Display}
              </h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Direct studio line for wedding consultations, production scheduling, and urgent
                date enquiries.
              </p>
            </div>

            <div className="mt-6 text-sm font-semibold text-[#0EA5B8] group-hover:underline">
              Call Primary Line →
            </div>
          </a>

          {/* Secondary Phone Line 2 */}
          <a
            href={STUDIO_CONTACT.phone2Href}
            className="apple-glass-interactive group flex flex-col justify-between rounded-[28px] p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF8A00]/15 text-[#FF8A00]">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Secondary Line · Tap to Call
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums sm:text-3xl">
                {STUDIO_CONTACT.phone2Display}
              </h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Alternate studio desk for family function bookings, album coordination, and
                post-production updates.
              </p>
            </div>

            <div className="mt-6 text-sm font-semibold text-[#FF8A00] group-hover:underline">
              Call Secondary Line →
            </div>
          </a>
        </section>

        {/* Mumbai Studio Location Card */}
        <section className="apple-glass mt-8 rounded-[28px] p-7 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0EA5B8]/15 text-[#0EA5B8]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                  Kandivali West Studio &amp; Service Region
                </h2>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Studio in Kandivali West, Mumbai — serving South Mumbai, Bandra, Juhu, Powai,
                  Thane, Navi Mumbai, Maharashtra, and destination celebrations across India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

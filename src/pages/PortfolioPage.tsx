import React, { useEffect, useState } from 'react';
import { Instagram, ExternalLink, Maximize2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { StudioImage } from '../components/StudioImage';
import { LightboxModal } from '../components/LightboxModal';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SHOWCASE_FRAMES, STUDIO_CONTACT } from '../data/studio';

export const PortfolioPage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      setWidgetLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    script.onload = () => setWidgetLoaded(true);
    script.onerror = () => setWidgetLoaded(false);
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <SeoHead
        title="Portfolio – Sushant Chavan Photography | Mumbai Weddings & Films"
        description="Explore recent wedding photography, cinematic films, and family celebrations by Sushant Chavan Photography in Mumbai and via our live Instagram visual archive."
        path="/portfolio"
      />

      <main className="mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-14">
        {/* Editorial Portfolio Header */}
        <section className="apple-glass rounded-[28px] p-7 sm:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
                Visual Archive · Mumbai
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Stories in Light &amp; Motion
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Every frame in our archive reflects authentic celebration, natural skin tones, and
                honest human connection. Browse our live Instagram feed below or connect directly
                to request full wedding film reels.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={STUDIO_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00] whitespace-nowrap"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>{STUDIO_CONTACT.instagramHandle}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--glass-border-hover)] whitespace-nowrap"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Request Film Reels</span>
              </a>
            </div>
          </div>
        </section>

        {/* Live Elfsight Instagram Feed Container */}
        <section aria-labelledby="instagram-feed-heading" className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2
                id="instagram-feed-heading"
                className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl"
              >
                Latest on Instagram
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                Live feed synced from {STUDIO_CONTACT.instagramHandle}
              </p>
            </div>
            <a
              href={STUDIO_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#0EA5B8] hover:underline whitespace-nowrap"
            >
              View Profile on Instagram
            </a>
          </div>

          <div className="apple-glass min-h-[320px] rounded-[28px] p-4 sm:p-6">
            {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
            <div
              className="elfsight-app-fcdad29d-0116-47b1-a838-eaf276d0b7e0"
              data-elfsight-app-lazy
            />

            {!widgetLoaded && (
              <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-surface)] p-8 text-center">
                <Instagram className="h-7 w-7 text-[#FF8A00]" aria-hidden="true" />
                <p className="mt-3 text-sm font-medium text-[var(--text-primary)]">
                  Loading Instagram Visual Feed
                </p>
                <p className="mt-1 max-w-md text-xs text-[var(--text-secondary)]">
                  If your network blocks third-party embeds, view our complete gallery directly on
                  Instagram.
                </p>
                <a
                  href={STUDIO_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-spring mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2.5 text-xs font-semibold text-white"
                >
                  <span>Open Instagram Profile</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Curated Studio Highlights Grid */}
        <section aria-labelledby="curated-series-heading" className="mt-14">
          <div className="mb-6">
            <h2
              id="curated-series-heading"
              className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl"
            >
              Curated Studio Series
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Select any frame to inspect full-resolution lighting and story notes.
            </p>
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
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{frame.story}</p>
                </div>
              </button>
            ))}
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BrandLogo } from '../components/BrandLogo';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { STUDIO_CONTACT } from '../data/studio';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead path="/404" />

      <main className="mx-auto flex min-h-[65vh] w-full max-w-[800px] items-center justify-center px-4 py-16 sm:px-6">
        <div className="apple-glass w-full rounded-[28px] p-8 text-center sm:p-12">
          <div className="mb-6 flex justify-center">
            <BrandLogo variant="icon" className="h-14 w-14" />
          </div>

          <p className="text-sm font-semibold text-[#FF8A00] tabular-nums">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Frame Not Found
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
            The page you’re looking for has moved or doesn’t exist. Return to our studio home or
            explore the visual portfolio.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#FF8A00] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/portfolio"
              className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-6 py-2.5 text-xs font-semibold text-[var(--text-primary)]"
            >
              <span>Explore Portfolio</span>
            </Link>

            <a
              href={STUDIO_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-spring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

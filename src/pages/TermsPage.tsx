import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { STUDIO_CONTACT } from '../data/studio';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SeoHead path="/terms-and-conditions" />

      <main className="mx-auto w-full max-w-[900px] px-4 pt-10 sm:px-6 sm:pt-14">
        <article className="apple-glass rounded-[28px] p-7 sm:p-11">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
            Studio Terms
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-xs text-[var(--text-secondary)]">
            Effective Date: November 2026 · {STUDIO_CONTACT.brandName} ({STUDIO_CONTACT.city})
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                1. Bookings &amp; Date Reservations
              </h2>
              <p className="mt-2">
                Shoot dates are confirmed only upon written confirmation via WhatsApp or studio
                agreement and receipt of the agreed booking retainer. Enquiries prior to retainer
                confirmation do not lock calendar availability.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                2. Deliverables &amp; Post-Production Timelines
              </h2>
              <p className="mt-2">
                Color-graded photographs and edited cinema films are delivered within the timelines
                outlined in your commissioned scope. Raw unedited camera files (RAW/Log footage) are
                archival production assets and are not included unless explicitly agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                3. Intellectual Property &amp; Personal Usage
              </h2>
              <p className="mt-2">
                Clients receive full personal rights to print, share, and archive their delivered
                photographs and films with family and friends. Commercial licensing or third-party
                editorial publication requires prior studio credit and consent from{' '}
                {STUDIO_CONTACT.brandName}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                4. Rescheduling &amp; Destination Logistics
              </h2>
              <p className="mt-2">
                In case of date changes, we make every reasonable effort to accommodate rescheduled
                dates subject to crew availability. Travel and accommodation for assignments outside
                the Mumbai metropolitan region are coordinated transparently in advance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                5. Direct Studio Contact
              </h2>
              <p className="mt-2">
                For clarifications regarding bespoke wedding or family commissions, reach us directly
                at{' '}
                <a
                  href={STUDIO_CONTACT.phone1Href}
                  className="font-medium text-[#FF8A00] hover:underline tabular-nums"
                >
                  {STUDIO_CONTACT.phone1Display}
                </a>{' '}
                or visit our{' '}
                <Link to="/contact" className="font-medium text-[#0EA5B8] hover:underline">
                  Contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { STUDIO_CONTACT } from '../data/studio';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy – Sushant Chavan Photography"
        description="Privacy policy for Sushant Chavan Photography detailing zero-form direct communication, local theme preferences, and client gallery confidentiality."
        path="/privacy-policy"
      />

      <main className="mx-auto w-full max-w-[900px] px-4 pt-10 sm:px-6 sm:pt-14">
        <article className="apple-glass rounded-[28px] p-7 sm:p-11">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5B8]">
            Legal &amp; Studio Trust
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[var(--text-secondary)]">
            Effective Date: November 2026 · {STUDIO_CONTACT.brandName} ({STUDIO_CONTACT.city})
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                1. Zero-Form Direct Communication
              </h2>
              <p className="mt-2">
                This website operates without contact forms, user accounts, or background database
                tracking. When you choose to connect with us via WhatsApp, phone call, or Instagram,
                your communication occurs directly through those respective platforms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                2. Local Browser Preferences
              </h2>
              <p className="mt-2">
                We store only your chosen Light or Dark Mode preference in your browser’s{' '}
                <code className="rounded bg-black/5 px-1.5 py-0.5 text-xs dark:bg-white/10">
                  localStorage
                </code>{' '}
                so the interface respects your visual preference across visits. No advertising
                cookies or personal behavioral trackers are set by our studio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                3. Embedded Instagram Portfolio Feed
              </h2>
              <p className="mt-2">
                Our Portfolio page loads an embedded Instagram gallery widget to display recent
                public work from {STUDIO_CONTACT.instagramHandle}. Interaction with that widget is
                governed by the privacy policies of Instagram and the embed provider.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                4. Client Gallery &amp; Media Confidentiality
              </h2>
              <p className="mt-2">
                Private wedding and family photography galleries are delivered through password-protected
                or unlisted links. Featured portfolio works are shared only with client consent and
                respect for family privacy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                5. Questions &amp; Removal Requests
              </h2>
              <p className="mt-2">
                For any privacy enquiry or image removal request, contact Sushant Chavan directly at{' '}
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

import React, { useEffect } from 'react';
import { STUDIO_CONTACT } from '../data/studio';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  extraSchemas?: Record<string, unknown>[];
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  path,
  extraSchemas = [],
}) => {
  useEffect(() => {
    document.title = title;

    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : STUDIO_CONTACT.siteUrl;
    const canonicalUrl = `${origin}${path}`;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', STUDIO_CONTACT.brandName);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const baseGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${origin}/#person`,
          name: STUDIO_CONTACT.owner,
          jobTitle: 'Photographer & Film Director',
          url: origin,
          sameAs: [STUDIO_CONTACT.instagramUrl],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${origin}/#business`,
          name: STUDIO_CONTACT.brandName,
          description:
            'Premier Films and Photography studio in Mumbai specializing in cinematic wedding films, family functions, milestone celebrations, and bespoke heirloom albums.',
          url: origin,
          telephone: ['+91-8169782702', '+91-8108048407'],
          founder: { '@id': `${origin}/#person` },
          areaServed: [
            { '@type': 'City', name: 'Mumbai' },
            { '@type': 'State', name: 'Maharashtra' },
          ],
          sameAs: [STUDIO_CONTACT.instagramUrl],
          priceRange: '$$$',
        },
        {
          '@type': 'WebSite',
          '@id': `${origin}/#website`,
          url: origin,
          name: STUDIO_CONTACT.brandName,
          publisher: { '@id': `${origin}/#person` },
        },
        ...extraSchemas,
      ],
    };

    let script = document.getElementById('scp-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'scp-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(baseGraph);
  }, [title, description, path, extraSchemas]);

  return null;
};

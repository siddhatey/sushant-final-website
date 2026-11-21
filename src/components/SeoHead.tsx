import React, { useEffect } from 'react';
import {
  SITE_NAME,
  SITE_URL,
  OG_LOCALE,
  getRouteSeo,
  buildBaseGraph,
} from '../data/seo';

interface SeoHeadProps {
  title?: string;
  description?: string;
  path: string;
  extraSchemas?: Record<string, unknown>[];
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  const matches = document.querySelectorAll(`meta[${attr}="${key}"]`);
  let el = matches[0] as HTMLMetaElement | undefined;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  // Remove any accidental duplicates
  for (let i = 1; i < matches.length; i++) {
    matches[i].remove();
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
    const config = getRouteSeo(path);
    const resolvedTitle = title || config.title;
    const resolvedDescription = description || config.description;

    const origin =
      typeof window !== 'undefined' &&
      window.location.origin &&
      window.location.origin.startsWith('https://')
        ? window.location.origin
        : SITE_URL;

    const normalizedPath = config.path === '/404' ? path : config.path;
    const canonicalUrl = `${origin}${normalizedPath}`;
    const ogImageUrl = `${origin}${config.ogImage}`;

    document.title = resolvedTitle;

    setMetaTag('name', 'description', resolvedDescription);
    setMetaTag('name', 'keywords', config.keywords);
    setMetaTag(
      'name',
      'robots',
      config.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    setMetaTag('property', 'og:title', resolvedTitle);
    setMetaTag('property', 'og:description', resolvedDescription);
    setMetaTag('property', 'og:image', ogImageUrl);
    setMetaTag('property', 'og:image:secure_url', ogImageUrl);
    setMetaTag('property', 'og:image:type', 'image/webp');
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', config.ogImageAlt);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', config.ogType);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', OG_LOCALE);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', resolvedTitle);
    setMetaTag('name', 'twitter:description', resolvedDescription);
    setMetaTag('name', 'twitter:image', ogImageUrl);
    setMetaTag('name', 'twitter:image:alt', config.ogImageAlt);

    const canonicals = document.querySelectorAll('link[rel="canonical"]');
    let canonical = canonicals[0] as HTMLLinkElement | undefined;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    for (let i = 1; i < canonicals.length; i++) {
      canonicals[i].remove();
    }
    canonical.setAttribute('href', canonicalUrl);

    const schemaGraph = buildBaseGraph(
      origin,
      {
        ...config,
        title: resolvedTitle,
        description: resolvedDescription,
      },
      extraSchemas
    );

    let script = document.getElementById('scp-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'scp-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaGraph);
  }, [title, description, path, extraSchemas]);

  return null;
};

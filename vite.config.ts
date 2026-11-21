import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import {
  AREA_SERVED_LIST,
  OG_LOCALE,
  ROUTE_SEO,
  SITE_NAME,
  SITE_URL,
  buildBaseGraph,
} from './src/data/seo';
import { FAQ_ITEMS } from './src/data/faqData';

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getExtraSchemasForRoute(routePath: string): Record<string, unknown>[] {
  if (routePath === '/faq') {
    return [
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/faq#faqpage`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ];
  }

  if (routePath === '/services') {
    return [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#weddings-love`,
        serviceType: 'Wedding, Pre-Wedding & Engagement Photography',
        name: 'Weddings & Love',
        description:
          'Full-frame wedding and pre-wedding photography across Maharashtra and destination venues in India, delivered fast.',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: AREA_SERVED_LIST,
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#family-milestones`,
        serviceType: 'Maternity, Baby Shower, Naming & Milestone Photography',
        name: 'Family Milestones',
        description:
          'Heartfelt photography for life’s intimate celebrations, crafted carefully and delivered quickly.',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: AREA_SERVED_LIST,
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#brands-events`,
        serviceType: 'Corporate, Commercial & Hospitality Photography',
        name: 'Brands & Events',
        description: 'Sharp commercial photography built for websites, press, and social media.',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: AREA_SERVED_LIST,
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#capture-styles`,
        serviceType: 'Candid, Traditional & Editorial Photography',
        name: 'Capture Styles',
        description:
          'Unscripted emotion, classic family portraits, and clean editorial framing—retouched by our in-house editing desk.',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: AREA_SERVED_LIST,
      },
    ];
  }

  return [];
}

function prerenderRouteHeadsPlugin(): Plugin {
  return {
    name: 'scp-prerender-route-heads',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const baseHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(baseHtmlPath)) return;

      const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');
      const publicRoutes = Object.values(ROUTE_SEO).filter(
        (cfg) => cfg.path !== '/' && cfg.path !== '/404'
      );

      for (const cfg of publicRoutes) {
        const canonicalUrl = `${SITE_URL}${cfg.path}`;
        const ogImageUrl = `${SITE_URL}${cfg.ogImage}`;
        const schemaJson = JSON.stringify(
          buildBaseGraph(SITE_URL, cfg, getExtraSchemasForRoute(cfg.path))
        );

        let html = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(cfg.title)}</title>`)
          .replace(
            /<meta\s+name="description"[\s\S]*?\/>/,
            `<meta name="description" content="${escapeAttr(cfg.description)}" />`
          )
          .replace(
            /<meta\s+name="keywords"[\s\S]*?\/>/,
            `<meta name="keywords" content="${escapeAttr(cfg.keywords)}" />`
          )
          .replace(
            /<link\s+rel="canonical"[\s\S]*?\/>/,
            `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
          )
          .replace(
            /<meta\s+property="og:type"[\s\S]*?\/>/,
            `<meta property="og:type" content="${escapeAttr(cfg.ogType)}" />`
          )
          .replace(
            /<meta\s+property="og:site_name"[\s\S]*?\/>/,
            `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`
          )
          .replace(
            /<meta\s+property="og:locale"[\s\S]*?\/>/,
            `<meta property="og:locale" content="${escapeAttr(OG_LOCALE)}" />`
          )
          .replace(
            /<meta\s+property="og:url"[\s\S]*?\/>/,
            `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`
          )
          .replace(
            /<meta\s+property="og:title"[\s\S]*?\/>/,
            `<meta property="og:title" content="${escapeAttr(cfg.title)}" />`
          )
          .replace(
            /<meta\s+property="og:description"[\s\S]*?\/>/,
            `<meta property="og:description" content="${escapeAttr(cfg.description)}" />`
          )
          .replace(
            /<meta\s+property="og:image"[\s\S]*?\/>/,
            `<meta property="og:image" content="${escapeAttr(ogImageUrl)}" />`
          )
          .replace(
            /<meta\s+property="og:image:secure_url"[\s\S]*?\/>/,
            `<meta property="og:image:secure_url" content="${escapeAttr(ogImageUrl)}" />`
          )
          .replace(
            /<meta\s+property="og:image:alt"[\s\S]*?\/>/,
            `<meta property="og:image:alt" content="${escapeAttr(cfg.ogImageAlt)}" />`
          )
          .replace(
            /<meta\s+name="twitter:title"[\s\S]*?\/>/,
            `<meta name="twitter:title" content="${escapeAttr(cfg.title)}" />`
          )
          .replace(
            /<meta\s+name="twitter:description"[\s\S]*?\/>/,
            `<meta name="twitter:description" content="${escapeAttr(cfg.description)}" />`
          )
          .replace(
            /<meta\s+name="twitter:image"[\s\S]*?\/>/,
            `<meta name="twitter:image" content="${escapeAttr(ogImageUrl)}" />`
          )
          .replace(
            /<meta\s+name="twitter:image:alt"[\s\S]*?\/>/,
            `<meta name="twitter:image:alt" content="${escapeAttr(cfg.ogImageAlt)}" />`
          )
          .replace(
            /<script id="scp-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
            `<script id="scp-jsonld" type="application/ld+json">${schemaJson}</script>`
          );

        const routeDir = path.join(distDir, cfg.path.replace(/^\//, ''));
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), prerenderRouteHeadsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

export interface RouteSeoConfig {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogType: 'website' | 'profile';
  ogImage: string;
  ogImageAlt: string;
  breadcrumbLabel: string;
  robots?: string;
}

export const SITE_URL = 'https://sushantchavanphotography.com';
export const SITE_NAME = 'Sushant Chavan Photography';
export const OG_LOCALE = 'en_IN';

export const AREA_SERVED_LIST = [
  { '@type': 'Place', name: 'Charkop, Kandivali West, Mumbai' },
  { '@type': 'Place', name: 'Kandivali West, Mumbai' },
  { '@type': 'Place', name: 'Kandivali East, Mumbai' },
  { '@type': 'Place', name: 'Borivali, Mumbai' },
  { '@type': 'Place', name: 'Malad, Mumbai' },
  { '@type': 'Place', name: 'Goregaon, Mumbai' },
  { '@type': 'Place', name: 'Dahisar, Mumbai' },
  { '@type': 'Place', name: 'Andheri, Mumbai' },
  { '@type': 'City', name: 'Mumbai' },
  { '@type': 'State', name: 'Maharashtra' },
  { '@type': 'Country', name: 'India' },
] as const;

export const ROUTE_SEO: Record<string, RouteSeoConfig> = {
  '/': {
    path: '/',
    title: 'Sushant Chavan Photography – Films & Photography Mumbai',
    description:
      'Sushant Chavan Photography in Kandivali West, Mumbai offers weddings, pre-weddings, family milestones, and commercial photography across Borivali, Malad, Andheri, Maharashtra & India.',
    keywords:
      'Sushant Chavan Photography, Kandivali West photographer, Charkop wedding photography, Borivali Malad Goregaon Andheri photographer, Mumbai films and photography, Maharashtra India',
    ogType: 'website',
    ogImage: '/og/og-home.webp',
    ogImageAlt: 'Sushant Chavan Photography – Films and Photography Studio in Mumbai',
    breadcrumbLabel: 'Home',
  },
  '/portfolio': {
    path: '/portfolio',
    title: 'Portfolio – Sushant Chavan Photography | Mumbai Weddings & Films',
    description:
      'Explore wedding, pre-wedding, and family photography by Sushant Chavan Photography across Kandivali West, Charkop, Borivali, Malad, Andheri, Mumbai, and Maharashtra.',
    keywords:
      'Mumbai wedding photography portfolio, Kandivali West pre-wedding shoots, candid wedding gallery Mumbai, Sushant Chavan Photography Instagram',
    ogType: 'website',
    ogImage: '/og/og-portfolio.webp',
    ogImageAlt: 'Golden hour Mumbai wedding photography portfolio by Sushant Chavan Photography',
    breadcrumbLabel: 'Portfolio',
  },
  '/services': {
    path: '/services',
    title: 'Services – Films & Photography Production | Sushant Chavan Photography',
    description:
      'Weddings & Love, Family Milestones, Brands & Events, and Candid or Editorial photography with rapid retouching across Kandivali, Borivali, Malad, Goregaon, Andheri & Mumbai.',
    keywords:
      'wedding photography Mumbai, pre-wedding shoots Maharashtra, maternity baby shower Kandivali West, corporate commercial photography Andheri Goregaon',
    ogType: 'website',
    ogImage: '/og/og-services.webp',
    ogImageAlt: 'End-to-end photography production and heirloom albums by Sushant Chavan Photography',
    breadcrumbLabel: 'Services',
  },
  '/about': {
    path: '/about',
    title: 'About Sushant Chavan – Films & Photography Studio Mumbai',
    description:
      'Meet Sushant Chavan, founder and photographer based in Kandivali West, Mumbai, capturing unscripted weddings and family milestones across Maharashtra and India.',
    keywords:
      'Sushant Chavan, Mumbai wedding photographer, Kandivali West photography studio, Charkop Borivali Dahisar photographer',
    ogType: 'profile',
    ogImage: '/og/og-about.webp',
    ogImageAlt: 'Portrait of photographer and creative director Sushant Chavan in Mumbai',
    breadcrumbLabel: 'About',
  },
  '/faq': {
    path: '/faq',
    title: 'FAQ – Sushant Chavan Photography | Mumbai Bookings & Deliverables',
    description:
      'Answers on booking timelines, wedding films, rapid retouching, heirloom albums, and shoots across Kandivali West, Borivali, Malad, Goregaon, Andheri, Mumbai & India.',
    keywords:
      'Sushant Chavan Photography FAQ, Mumbai wedding photography timeline, Kandivali West photo studio booking, destination wedding Maharashtra',
    ogType: 'website',
    ogImage: '/og/og-faq.webp',
    ogImageAlt: 'Family celebration photography and studio FAQ by Sushant Chavan Photography',
    breadcrumbLabel: 'FAQ',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact – Sushant Chavan Photography | Kandivali West, Mumbai',
    description:
      'Connect via WhatsApp or call +91 8169782702 / +91 8108048407 with Sushant Chavan Photography in Kandivali West, Mumbai serving Charkop, Borivali, Malad, Andheri & India.',
    keywords:
      'contact Sushant Chavan Photography, Kandivali West photo studio phone, Charkop Borivali Malad photographer WhatsApp, Mumbai wedding shoot enquiry',
    ogType: 'website',
    ogImage: '/og/og-contact.webp',
    ogImageAlt: 'Direct WhatsApp and phone contact for Sushant Chavan Photography in Mumbai',
    breadcrumbLabel: 'Contact',
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy – Sushant Chavan Photography',
    description:
      'Privacy policy for Sushant Chavan Photography in Mumbai covering direct WhatsApp/phone communication, local theme storage, and private client galleries.',
    keywords: 'Sushant Chavan Photography privacy policy, Mumbai photography studio privacy',
    ogType: 'website',
    ogImage: '/og/og-privacy.webp',
    ogImageAlt: 'Sushant Chavan Photography Privacy Policy',
    breadcrumbLabel: 'Privacy Policy',
  },
  '/terms-and-conditions': {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions – Sushant Chavan Photography',
    description:
      'Booking retainers, delivery timelines, personal image rights, and assignment terms for Sushant Chavan Photography in Mumbai, Maharashtra, and India.',
    keywords: 'Sushant Chavan Photography terms and conditions, Mumbai photography booking terms',
    ogType: 'website',
    ogImage: '/og/og-terms.webp',
    ogImageAlt: 'Sushant Chavan Photography Terms and Conditions',
    breadcrumbLabel: 'Terms & Conditions',
  },
  '/404': {
    path: '/404',
    title: 'Page Not Found – Sushant Chavan Photography',
    description:
      'The requested page could not be found. Return to Sushant Chavan Photography in Mumbai, India.',
    keywords: 'Sushant Chavan Photography',
    ogType: 'website',
    ogImage: '/og/og-home.webp',
    ogImageAlt: 'Sushant Chavan Photography',
    breadcrumbLabel: 'Page Not Found',
    robots: 'noindex, follow',
  },
};

export function getRouteSeo(path: string): RouteSeoConfig {
  return ROUTE_SEO[path] || ROUTE_SEO['/404'];
}

export function buildBreadcrumbSchema(origin: string, config: RouteSeoConfig) {
  const items: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${origin}/`,
    },
  ];

  if (config.path !== '/' && config.path !== '/404') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: config.breadcrumbLabel,
      item: `${origin}${config.path}`,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${origin}${config.path}#breadcrumb`,
    itemListElement: items,
  };
}

export function buildBaseGraph(
  origin: string,
  config: RouteSeoConfig,
  extraSchemas: Record<string, unknown>[] = []
) {
  const pageUrl = `${origin}${config.path}`;
  const ogImageUrl = `${origin}${config.ogImage}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: 'Sushant Chavan',
        jobTitle: 'Photographer & Creative Director',
        url: origin,
        worksFor: { '@id': `${origin}/#business` },
        sameAs: ['https://www.instagram.com/sushant_chavan_photography_/'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kandivali West',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
      },
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': `${origin}/#business`,
        name: SITE_NAME,
        description:
          'Films and photography studio in Kandivali West, Mumbai specializing in weddings, pre-weddings, family milestones, corporate and commercial shoots, rapid retouching, and heirloom albums across Mumbai, Maharashtra, and India.',
        url: origin,
        logo: {
          '@type': 'ImageObject',
          '@id': `${origin}/#logo`,
          url: `${origin}/assets/aistudio/main-logo-black_d96c55f3.png`,
          contentUrl: `${origin}/assets/aistudio/main-logo-black_d96c55f3.png`,
        },
        image: { '@id': `${pageUrl}#primaryimage` },
        telephone: ['+91-8169782702', '+91-8108048407'],
        founder: { '@id': `${origin}/#person` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kandivali West',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        areaServed: AREA_SERVED_LIST,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-8169782702',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Marathi'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+91-8108048407',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Marathi'],
          },
        ],
        sameAs: ['https://www.instagram.com/sushant_chavan_photography_/'],
        priceRange: '$$$',
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: SITE_NAME,
        inLanguage: 'en-IN',
        publisher: { '@id': `${origin}/#business` },
      },
      {
        '@type': 'ImageObject',
        '@id': `${pageUrl}#primaryimage`,
        url: ogImageUrl,
        contentUrl: ogImageUrl,
        encodingFormat: 'image/webp',
        width: 1200,
        height: 630,
        caption: config.ogImageAlt,
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: config.title,
        description: config.description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${origin}/#website` },
        about: { '@id': `${origin}/#business` },
        primaryImageOfPage: { '@id': `${pageUrl}#primaryimage` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      buildBreadcrumbSchema(origin, config),
      ...extraSchemas,
    ],
  };
}

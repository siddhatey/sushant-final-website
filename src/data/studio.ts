import { STUDIO_IMAGES } from './media';

export const STUDIO_CONTACT = {
  brandName: 'Sushant Chavan Photography',
  owner: 'Sushant Chavan',
  city: 'Mumbai, India',
  studioArea: 'Kandivali West, Mumbai',
  tagline: 'Real Moments. Timeless Stories.',
  ctaPhilosophy: 'Real moments, timeless stories—connect with us to plan your shoot.',
  whatsappUrl:
    'https://wa.me/918169782702?text=Hello%20Sushant%2C%20I%20would%20like%20to%20enquire%20about%20your%20films%20and%20photography%20services.',
  phone1Display: '+91 8169782702',
  phone1Href: 'tel:+918169782702',
  phone2Display: '+91 8108048407',
  phone2Href: 'tel:+918108048407',
  instagramUrl: 'https://www.instagram.com/sushant_chavan_photography_/',
  instagramHandle: '@sushant_chavan_photography_',
  elfsightWidgetId: 'elfsight-app-fcdad29d-0116-47b1-a838-eaf276d0b7e0',
  siteUrl: 'https://sushantchavanphotography.com',
} as const;

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  accent: 'orange' | 'teal';
  aspectClass: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'weddings-love',
    number: '01',
    title: 'Weddings & Love',
    subtitle: 'Weddings · Pre-Weddings · Engagements',
    description:
      'Full-frame wedding and pre-wedding photography across Maharashtra and destination venues in India, delivered fast.',
    highlights: [
      'Wedding Photography',
      'Pre-Wedding Shoots',
      'Engagement Coverage',
    ],
    accent: 'orange',
    aspectClass: 'md:col-span-6',
  },
  {
    id: 'family-milestones',
    number: '02',
    title: 'Family Milestones',
    subtitle: 'Maternity · Baby Showers · Birthdays',
    description:
      'Heartfelt photography for life’s intimate celebrations, crafted carefully and delivered quickly.',
    highlights: [
      'Maternity & Baby Showers',
      'Naming Ceremonies',
      'Milestone Birthdays & Anniversaries',
    ],
    accent: 'teal',
    aspectClass: 'md:col-span-6',
  },
  {
    id: 'brands-events',
    number: '03',
    title: 'Brands & Events',
    subtitle: 'Corporate · Commercial · Hospitality',
    description:
      'Sharp commercial photography built for websites, press, and social media.',
    highlights: [
      'Corporate Events & Summits',
      'Commercial & Product Shoots',
      'Food & Hospitality Photography',
    ],
    accent: 'teal',
    aspectClass: 'md:col-span-6',
  },
  {
    id: 'capture-styles',
    number: '04',
    title: 'Capture Styles',
    subtitle: 'Candid · Traditional · Editorial',
    description:
      'Unscripted emotion, classic family portraits, and clean editorial framing—retouched by our in-house editing desk.',
    highlights: [
      'Candid Photography',
      'Traditional Photography',
      'Fine-Art & Editorial Portraits',
    ],
    accent: 'orange',
    aspectClass: 'md:col-span-6',
  },
];

export interface TechnicalScopeItem {
  number: string;
  title: string;
  description: string;
  accent: 'orange' | 'teal';
}

export const TECHNICAL_SCOPE: TechnicalScopeItem[] = [
  {
    number: '01',
    title: 'Trained In-House Photographers',
    description:
      'Full-frame bodies, fast prime lenses, and studio lighting led with consistent creative direction by Sushant Chavan.',
    accent: 'orange',
  },
  {
    number: '02',
    title: 'Multi-Angle & Aerial Coverage',
    description:
      'Synchronized multi-photographer setups and licensed aerial drone photography for grand weddings and large venues.',
    accent: 'teal',
  },
  {
    number: '03',
    title: 'Fastest Retouching Pipeline',
    description:
      'Private raw cloud galleries within hours, followed by fast-track color-graded and retouched high-res photos.',
    accent: 'teal',
  },
  {
    number: '04',
    title: 'Heirloom Finishing',
    description:
      'Lay-flat archival linen albums, bespoke wall frames, and one-click full-res digital galleries delivered to your door.',
    accent: 'orange',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Direct Consultation',
    detail:
      'Connect with Sushant via WhatsApp, call, or at our Kandivali West studio to lock dates and scope.',
  },
  {
    step: '02',
    title: 'In-House Shoot',
    detail:
      'Our synchronized team of photographers and drone operators covers every moment seamlessly.',
  },
  {
    step: '03',
    title: 'Rapid Retouching',
    detail:
      'Fast culling, skin retouching, and true-to-life color grading by our in-house photo desk.',
  },
  {
    step: '04',
    title: 'Heirloom Delivery',
    detail:
      'One-click full-res digital galleries, lay-flat archival linen albums, and bespoke wall frames delivered to your door.',
  },
];

export interface ShowcaseFrame {
  id: string;
  title: string;
  category: string;
  location: string;
  specs: string;
  story: string;
  image: string;
  alt: string;
}

export const SHOWCASE_FRAMES: ShowcaseFrame[] = [
  {
    id: 'colaba-golden-hour',
    title: 'Arabian Sea Golden Hour',
    category: 'Wedding Cinema & Stills',
    location: 'South Mumbai',
    specs: '35mm Prime · f/2.0 · Natural Dusk',
    story: 'Captured moments after the pheras as the monsoon breeze cleared for a brief golden sunset over the harbour.',
    image: STUDIO_IMAGES.weddingCinema,
    alt: 'Indian couple laughing together at golden hour against the Mumbai skyline and sea',
  },
  {
    id: 'courtyard-supper',
    title: 'Three Generations at the Table',
    category: 'Family Milestone',
    location: 'Bandra, Mumbai',
    specs: '50mm Prime · f/1.8 · Festoon Light',
    story: 'An intimate 50th anniversary dinner where three generations gathered in a family courtyard under warm string lights.',
    image: STUDIO_IMAGES.familyMilestone,
    alt: 'Multi-generational family laughing around a courtyard dinner table lit by warm bulbs',
  },
  {
    id: 'jaimala-details',
    title: 'Marigold & Mogra Morning',
    category: 'Ceremonial Documentary',
    location: 'Juhu, Mumbai',
    specs: '85mm Prime · f/2.2 · Window Light',
    story: 'Quiet pre-ceremony anticipation framed through carved teakwood latticework before the baraat arrived.',
    image: STUDIO_IMAGES.ceremonialDetail,
    alt: 'Bride hands adorned with mehendi holding fresh marigold and jasmine garlands by a sunlit window',
  },
  {
    id: 'archival-volume',
    title: 'The Keepsake Linen Volume',
    category: 'Heirloom Print Craft',
    location: 'Studio Archive, Mumbai',
    specs: 'Cotton Rag · Lay-Flat Binding',
    story: 'Tactile storytelling designed for living rooms rather than forgotten hard drives—hand-bound archival spreads.',
    image: STUDIO_IMAGES.heirloomAlbum,
    alt: 'Open linen-bound heirloom wedding photography book on natural travertine stone',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Bookings',
    question: 'How far in advance should we book Sushant Chavan Photography?',
    answer:
      'For peak Mumbai wedding dates between October and March, we recommend reaching out 4 to 8 months in advance. For intimate family functions, milestone portraits, or weekday celebrations, 3 to 6 weeks notice is often sufficient—message us on WhatsApp to check immediate availability.',
  },
  {
    category: 'Production',
    question: 'Do you cover both photography and cinematic wedding films?',
    answer:
      'Yes. We operate as an integrated films and photography studio. Having a single creative director oversee both stills and motion ensures cohesive lighting, shared storytelling rhythm, and an unobtrusive presence during emotional ceremonies.',
  },
  {
    category: 'Locations',
    question: 'Are you based in Mumbai, and do you travel for destination shoots?',
    answer:
      'Our studio is based in Kandivali West, Mumbai, serving South Mumbai, Bandra, Juhu, Powai, Thane, and Navi Mumbai regularly. We also travel across Maharashtra (Alibaug, Lonavala, Pune, Nashik) and pan-India for destination weddings and family celebrations.',
  },
  {
    category: 'Deliverables',
    question: 'What is the typical delivery timeline for photos and wedding films?',
    answer:
      'Private raw cloud galleries are shared within hours, followed by fast-track color-graded and retouched high-res photos within 2 to 4 weeks, and bespoke cinematic films within 6 to 8 weeks.',
  },
  {
    category: 'Albums',
    question: 'Can we customize heirloom photo albums and print framing?',
    answer:
      'Every heirloom album is custom-designed in-house. You choose the linen cover tone, debossed monogram, archival paper weight, and favorite curated spreads before we send the volume to print.',
  },
  {
    category: 'Planning',
    question: 'How do we plan our shoot timeline and lighting schedule with your team?',
    answer:
      'Once your date is reserved, Sushant personally conducts a pre-event planning call with you at our Kandivali West studio or over phone. We map out golden-hour portrait windows, ritual timings, and multi-angle camera positions so your celebration stays relaxed and natural.',
  },
];

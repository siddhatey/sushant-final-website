import { STUDIO_IMAGES } from './media';

export const STUDIO_CONTACT = {
  brandName: 'Sushant Chavan Photography',
  owner: 'Sushant Chavan',
  city: 'Mumbai, India',
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
  image: string;
  imageAlt: string;
  aspectClass: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'wedding-films-photography',
    number: '01',
    title: 'Cinematic Wedding Films & Photography',
    subtitle: 'Mumbai · Destination Celebrations · Multi-Day Coverage',
    description:
      'Documentary honesty meets cinema-grade framing. From quiet morning preparations to late-night sangeet energy, we capture unscripted emotion and sacred traditions without intruding on the moment.',
    highlights: [
      'Candid storytelling & timeless editorial portraits',
      'Full-length wedding films & 4K highlight reels',
      'Synchronized multi-camera ritual coverage',
    ],
    accent: 'orange',
    image: STUDIO_IMAGES.weddingCinema,
    imageAlt: 'Bride and groom sharing a candid golden-hour moment on a Mumbai terrace overlooking the Arabian Sea',
    aspectClass: 'md:col-span-7',
  },
  {
    id: 'family-milestones',
    number: '02',
    title: 'Family Functions & Milestone Celebrations',
    subtitle: 'Intimate Gatherings · Anniversaries · Generational Portraits',
    description:
      'Life’s defining chapters deserve presence and warmth. We document milestone birthdays, naming ceremonies, anniversaries, and multi-generational family reunions with natural grace.',
    highlights: [
      'Relaxed documentary pacing for elders and children',
      'Warm ambient courtyard & home storytelling',
      'Curated digital galleries shared effortlessly with family',
    ],
    accent: 'teal',
    image: STUDIO_IMAGES.familyMilestone,
    imageAlt: 'Multi-generational Indian family sharing laughter around a warmly lit courtyard celebration dinner',
    aspectClass: 'md:col-span-5',
  },
  {
    id: 'multi-angle-aerial',
    number: '03',
    title: 'Multi-Angle & Aerial Cinematography',
    subtitle: 'Dynamic Production · Gimbal Motion · Licensed Drone Sweeps',
    description:
      'Grand celebrations across coastal venues, heritage properties, and banquet lawns demand spatial scale. Our production crew blends stabilized motion with aerial perspectives for theatrical depth.',
    highlights: [
      'Cinema prime lenses & stabilized gimbal movement',
      'Aerial establishing shots for venue architecture',
      'Dedicated live-sound capture for vows & speeches',
    ],
    accent: 'teal',
    image: STUDIO_IMAGES.ceremonialDetail,
    imageAlt: 'Close-up editorial frame of bride hands with mehendi holding marigold and jasmine garlands',
    aspectClass: 'md:col-span-5',
  },
  {
    id: 'post-production-albums',
    number: '04',
    title: 'Post-Production, Color Grading & Heirloom Albums',
    subtitle: 'In-House Finishing · Archival Prints · Bespoke Linen Volumes',
    description:
      'Every frame is graded in-house for natural skin tones, true-to-life film warmth, and enduring clarity. Complete your story with handcrafted lay-flat heirloom albums built to outlast trends.',
    highlights: [
      'Bespoke cinema color grading & sound design',
      'Custom Italian-linen & archival cotton-rag albums',
      'Private high-resolution cloud archive delivery',
    ],
    accent: 'orange',
    image: STUDIO_IMAGES.heirloomAlbum,
    imageAlt: 'Handcrafted linen-bound heirloom wedding album resting open on travertine stone in warm sunlight',
    aspectClass: 'md:col-span-7',
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
      'Our studio is based in Mumbai, serving South Mumbai, Bandra, Juhu, Powai, Thane, and Navi Mumbai regularly. We also travel across Maharashtra (Alibaug, Lonavala, Pune, Nashik) and pan-India for destination weddings and family celebrations.',
  },
  {
    category: 'Deliverables',
    question: 'What is the typical delivery timeline for photos and wedding films?',
    answer:
      'A curated preview gallery of 40–60 signature frames is shared within 5 to 7 days of your event. Complete color-graded photography galleries are delivered within 4 to 6 weeks, and bespoke cinematic films are finalized within 6 to 10 weeks.',
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
      'Once your date is reserved, Sushant personally conducts a pre-event planning call with you and your family or planner. We map out golden-hour portrait windows, ritual timings, and multi-angle camera positions so your celebration stays relaxed and natural.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Story Alignment',
    detail: 'Connect directly via WhatsApp or phone to share your dates, venues, and family traditions.',
  },
  {
    step: '02',
    title: 'Timeline & Visual Planning',
    detail: 'We craft a relaxed lighting and shot rhythm around your ceremonies without staging stiff poses.',
  },
  {
    step: '03',
    title: 'Production Day Execution',
    detail: 'A cohesive Mumbai crew capturing stills, multi-angle motion, ambient audio, and aerial frames.',
  },
  {
    step: '04',
    title: 'Color Grading & Heirloom Delivery',
    detail: 'Precision in-house editing, cinema sound design, cloud gallery sharing, and hand-bound albums.',
  },
];

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

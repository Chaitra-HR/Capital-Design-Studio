import { site } from './site';

export const finalCta = {
  eyebrow: 'Your next step',
  title: { lead: 'Let’s make your first impression', emphasis: 'as good as your first meeting.' },
  text: 'Book a free 30-minute clarity call. We’ll look at your website together and show you what to fix first.',
  cta: { label: 'Book a clarity call', href: site.booking },
  note: 'No preparation needed · No obligation',
  proof: {
    photos: [
      '/images/clients/sameer-nesarikar.jpg',
      '/images/clients/nisreen-mamaji.jpg',
      '/images/clients/ajeeth-pandey.jpg',
      '/images/clients/nisha-patodia.jpg',
    ],
    text: 'Join advisors who are proud to share their website.',
  },
} as const;

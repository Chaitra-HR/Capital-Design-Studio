import { site } from './site';

export const hero = {
  /* Real client photos (Sameer, Nisreen, Ajeeth, Nisha) */
  trust: {
    avatars: [
      '/images/clients/sameer-nesarikar.jpg',
      '/images/clients/nisreen-mamaji.jpg',
      '/images/clients/ajeeth-pandey.jpg',
      '/images/clients/nisha-patodia.jpg',
    ],
    text: 'Trusted by independent advisors and RIAs',
  },
  title: { lead: 'Your advice is excellent.', emphasis: 'Your website should say so.' },
  lead: 'We help financial advisors and wealth firms explain who they serve and why they’re different, then design a website that turns that clarity into enquiries.',
  benefits: ['Positioning first', 'Copy included', 'Custom design'],
  primaryCta: { label: 'Book your clarity call', href: site.booking },
  logos: { lead: 'Trusted by advisors featured in' },
} as const;

export type OutletMark =
  'bars' | 'pie' | 'ring' | 'shield' | 'sun' | 'chevron' | 'grid' | 'bolt' | 'wave' | 'cross';

/*
 * Placeholder publications: replace with outlets your clients have
 * genuinely been featured in (and their real logos, with permission).
 */
export const outlets: { name: string; mark: OutletMark }[] = [
  { name: 'Planner Review', mark: 'bars' },
  { name: 'Advisor Weekly', mark: 'pie' },
  { name: 'Wealth Journal', mark: 'ring' },
  { name: 'Fiduciary', mark: 'shield' },
  { name: 'RetireWell', mark: 'sun' },
  { name: 'Planwise', mark: 'chevron' },
  { name: 'The Ledger', mark: 'grid' },
  { name: 'Plan Forward', mark: 'bolt' },
  { name: 'Practice Lab', mark: 'wave' },
  { name: 'Northline', mark: 'cross' },
];

export type PreviewId =
  | 'evergreen'
  | 'halcyon'
  | 'ledgerline'
  | 'northpoint'
  | 'pennant'
  | 'summit'
  | 'kin'
  | 'tally'
  | 'rooted';

export interface ShowcaseItem {
  preview: PreviewId;
  client: string;
  device: 'desktop' | 'phone';
}

/* Fictional client sites: swap for real case studies. Phones and desktops alternate. */
export const showcase: ShowcaseItem[] = [
  { preview: 'kin', client: 'Kin Financial', device: 'phone' },
  { preview: 'evergreen', client: 'Evergreen Wealth', device: 'desktop' },
  { preview: 'halcyon', client: 'Halcyon Wealth', device: 'desktop' },
  { preview: 'tally', client: 'Tally', device: 'phone' },
  { preview: 'pennant', client: 'Pennant', device: 'desktop' },
  { preview: 'ledgerline', client: 'Ledgerline', device: 'desktop' },
  { preview: 'rooted', client: 'Rooted Family Planning', device: 'phone' },
  { preview: 'northpoint', client: 'Northpoint Advisory', device: 'desktop' },
  { preview: 'summit', client: 'Summit Planning', device: 'desktop' },
];

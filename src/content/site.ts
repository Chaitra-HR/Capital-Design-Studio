import type { NavItem } from '@/types';

export const site = {
  name: 'Capital Design Studio',
  tagline: 'Clear websites for financial advisors.',
  footerTagline: 'Positioning, copywriting and web design for financial advisors.',
  linkedin: 'https://www.linkedin.com/company/capitaldesignstudio/home/',
  email: 'hello@chaitrarao.com',
  /* Every "book a call" button opens this booking page */
  booking: 'https://calendly.com/hrchaitrarao/30min',
} as const;

export const primaryCta = { label: 'Book a call', href: site.booking } as const;

/* One-page site: each link glides to its section on the homepage */
export const navItems: NavItem[] = [
  /* Case studies are on their way; for now Work shows the scrolling previews in the hero */
  { label: 'Work', section: 'work', tag: 'Coming soon' },
  { label: 'Process', section: 'process' },
  { label: 'About', section: 'about' },
  { label: 'FAQ', section: 'faq' },
];

export const footerNav: {
  title: string;
  links: { label: string; href: string; tag?: string }[];
}[] = [
  {
    title: 'Studio',
    links: [
      { label: 'Work', href: '/#work', tag: 'Coming soon' },
      { label: 'Process', href: '/#process' },
      { label: 'About', href: '/#about' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Book a call', href: site.booking },
      { label: 'LinkedIn', href: site.linkedin },
      { label: 'Email', href: `mailto:${site.email}` },
    ],
  },
];

import { site } from './site';

export const solution = {
  label: 'The solution',
  title: ['One sprint.', 'One clear message.'],
  text: 'Every box you ticked has the same root: your website doesn’t say who you’re for and why you. So instead of patching pages, we agree your positioning first, then write and design the whole site around it.',
  media: {
    left: '/images/solution-hand-left.webp',
    right: '/images/solution-hand-right.webp',
    alt: 'Two hands reaching towards each other',
    leftLabel: 'Your expertise',
    rightLabel: 'Your ideal client',
  },
  stages: [
    {
      title: 'Positioning',
      text: 'Who you serve, how you’re different and why it matters, agreed in plain words.',
    },
    {
      title: 'Copy',
      text: 'Every page written for your ideal client, in your voice, ready for compliance review.',
    },
    {
      title: 'Website',
      text: 'Designed to earn trust quickly, on any device, accessible by default.',
    },
  ],
  cta: {
    text: 'Your expertise deserves a website that says so.',
    label: 'Book your clarity call',
    href: site.booking,
  },
} as const;

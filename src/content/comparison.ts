export interface ComparisonRow {
  topic: string;
  /** Our answer: a bold key phrase followed by plain detail */
  us: { strong: string; rest: string };
  others: string;
}

export const comparison = {
  eyebrow: 'Why advisors choose us',
  title: { lead: 'A studio that', emphasis: 'only does this.' },
  columns: { us: 'Capital Design Studio', others: 'Agencies and freelancers' },
  rows: [
    {
      topic: 'Who we work with',
      us: {
        strong: 'Only financial advisors and wealth firms.',
        rest: 'We already know your clients, your language and your rules.',
      },
      others: 'Anyone with a budget, from cafés to crypto.',
    },
    {
      topic: 'Where we start',
      us: { strong: 'Your positioning.', rest: 'The design follows what you need to say.' },
      others: 'Colours and layouts, with the copy left until last.',
    },
    {
      topic: 'Copywriting',
      us: { strong: 'We write every page,', rest: 'in your voice.' },
      others: 'You write it yourself, or it’s generic filler.',
    },
    {
      topic: 'Compliance',
      us: { strong: 'Copy prepared for review,', rest: 'with notes for your compliance team.' },
      others: 'An afterthought, often caught just before launch.',
    },
    {
      topic: 'After launch',
      us: { strong: 'A guide and a walkthrough,', rest: 'so your team stays in control.' },
      others: 'A login and a goodbye.',
    },
  ] satisfies ComparisonRow[],
};

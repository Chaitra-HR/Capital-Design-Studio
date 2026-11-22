export interface FaqItem {
  question: string;
  answer: string;
}

export const faq = {
  eyebrow: 'FAQs',
  title: { lead: 'Your questions,', emphasis: 'answered.' },
  items: [
    {
      question: 'What is a Website Clarity Sprint?',
      answer:
        'A focused, one-to-one process that takes your positioning, messaging, design and build through in one go, so your website tells one clear story.',
    },
    {
      question: 'Who do you work with?',
      answer:
        'Independent financial advisors, planners, RIAs and wealth management firms who are great at what they do, but whose website doesn’t show it yet.',
    },
    {
      question: 'How do I know if we’re a good fit?',
      answer:
        'You’re a good fit if you run a practice you’re proud of, with clients who’d say so; you know who you help most, or are willing to choose; you can make time for a few workshops over a month; and someone can review copy for compliance.',
    },
    {
      question: 'When aren’t you the right fit?',
      answer:
        'If you want a template site by next week, would rather not make any positioning decisions, or need ongoing marketing or ads management, another partner will serve you better. We’ll say so on our first call.',
    },
    {
      question: 'Do you write the copy too?',
      answer:
        'Yes. We write every page in your voice, built on the positioning we agree together. You review and approve everything before it goes live.',
    },
    {
      question: 'Will the site meet accessibility and compliance needs?',
      answer:
        'We build to WCAG 2.2 AA and prepare the copy with notes for your compliance review. Final sign-off always stays with you and your compliance team.',
    },
    {
      question: 'How long does it take, and what does it cost?',
      answer:
        'Most sprints take four to six weeks. The price is fixed and agreed upfront after a free clarity call, so there are no surprises.',
    },
    {
      question: 'Can you help if we’re launching a new firm or breaking away?',
      answer:
        'Yes. Breakaway advisors and new RIAs are a natural fit. We help you say who you serve and why you from day one, so the clients who follow you, and the new ones, see a firm worth choosing.',
    },
  ] satisfies FaqItem[],
};

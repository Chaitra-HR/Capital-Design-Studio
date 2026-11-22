export type ProcessVisual = 'workshop' | 'directions' | 'launch';

export interface ProcessPhase {
  label: string;
  title: string;
  text: string;
  visual: ProcessVisual;
}

export const process = {
  eyebrow: 'How we work',
  title: {
    lead: 'From a scattered message to',
    emphasis: 'a website that earns trust before the first meeting.',
  },
  phases: [
    {
      label: 'Phase 1 · Position',
      title: 'Positioning workshops to agree who you’re for, and why you.',
      text: 'We start by reviewing your website, client materials, competitors and a detailed intake questionnaire. Then, over a series of workshops, we answer four questions together: what you offer, who it’s for, what clients would choose instead, and why you’re the better choice.',
      visual: 'workshop',
    },
    {
      label: 'Phase 2 · Write & direct',
      title: 'Your expertise, in plain words, shown three ways.',
      text: 'We write your core pages in the language your clients use, with notes for compliance review. Then we show three visual directions with the real copy in place, so you choose with confidence, not guesswork.',
      visual: 'directions',
    },
    {
      label: 'Phase 3 · Build & launch',
      title: 'A finished website, and everything to keep it current.',
      text: 'We build and launch a fast, accessible site, then hand over a voice guide, LinkedIn banners and email signatures. A recorded walkthrough means your team can update it without waiting on us.',
      visual: 'launch',
    },
  ] satisfies ProcessPhase[],
};

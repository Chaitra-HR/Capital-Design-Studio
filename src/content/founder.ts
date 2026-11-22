import { site } from './site';

export const founder = {
  eyebrow: 'Who you’ll work with',
  title: { lead: 'Hi, I’m Chaitra. Capital Design is', emphasis: 'my independent studio.' },
  text: 'I’ve spent years designing for wealth and finance teams, and kept meeting advisors whose websites undersold the care they give clients. So I built a studio that only does this. You work with me directly, from the first call to launch.',
  name: 'Chaitra Rao',
  role: 'Founder & Designer',
  photo: '/images/team/designer-bw.jpg',
  /* Colour version for the small avatar on call-to-action buttons */
  photoColor: '/images/team/designer.jpg',
  cta: { label: 'Let’s talk about your practice', href: site.booking },
} as const;

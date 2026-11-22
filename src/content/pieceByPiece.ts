export type FixIcon = 'line' | 'logo' | 'pages';

export const pieceByPiece = {
  eyebrow: 'The real problem',
  title: {
    lead: 'You’ve tried fixing your website piece by piece…',
    emphasis: 'but it doesn’t work.',
  },
  lead: {
    strong: 'Here’s why:',
    text: 'each fix changes how the site looks, not what it says. None of them answers the question every prospect is quietly asking: why you, and not the advisor down the road?',
  },
  fixes: [
    {
      icon: 'line',
      title: 'A sharper homepage line',
      text: 'It sounds better, but the rest of the site still says something else.',
    },
    {
      icon: 'logo',
      title: 'A new logo and colours',
      text: 'It looks more established, but still doesn’t say why to choose you.',
    },
    {
      icon: 'pages',
      title: 'More pages and blog posts',
      text: 'There’s more to read, but no clearer reason to book a meeting.',
    },
  ] satisfies { icon: FixIcon; title: string; text: string }[],
  closing: { lead: 'Without one clear position, every fix just', emphasis: 'adds to the noise.' },
} as const;

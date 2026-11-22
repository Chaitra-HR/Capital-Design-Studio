export type QuickCheckTone = 'empty' | 'mild' | 'problem' | 'urgent';

export interface QuickCheckResult {
  /** 0–5: how many statements were ticked; picks the face */
  level: number;
  tone: QuickCheckTone;
  title: string;
  text: string;
}

/** One result per count, so the face and verdict shift with every tick. */
const RESULTS: Omit<QuickCheckResult, 'level'>[] = [
  {
    tone: 'empty',
    title: 'All clear so far.',
    text: 'Tick what sounds familiar. Your result updates as you go.',
  },
  {
    tone: 'mild',
    title: 'A small gap.',
    text: 'Easy to live with, but it quietly costs you referrals.',
  },
  {
    tone: 'problem',
    title: 'Worth a closer look.',
    text: 'Good advice, hidden behind a site that doesn’t explain it.',
  },
  {
    tone: 'problem',
    title: 'That’s a clarity problem.',
    text: 'Prospects are working too hard to understand you.',
  },
  {
    tone: 'urgent',
    title: 'It’s costing you clients.',
    text: 'Right-fit prospects choose the advisor who’s easier to understand.',
  },
  {
    tone: 'urgent',
    title: 'Time to fix the story.',
    text: 'One focused sprint gets your positioning, copy and site aligned.',
  },
];

/** Maps how many statements were ticked to the result shown to the visitor. */
export function getQuickCheckResult(ticked: number): QuickCheckResult {
  const level = Math.max(0, Math.min(RESULTS.length - 1, Math.round(ticked)));
  return { level, ...RESULTS[level] };
}

/** Every result, used to reserve the card's height so it never resizes */
export function getAllQuickCheckResults(): QuickCheckResult[] {
  return RESULTS.map((r, level) => ({ level, ...r }));
}

import type { JSX } from 'react';
import type { OutletMark } from '@/content/home';

/* Solid placeholder logo marks, 24×24 */
const marks: Record<OutletMark, JSX.Element> = {
  bars: (
    <>
      <rect x="3" y="5" width="18" height="4" rx="2" />
      <rect x="3" y="11" width="13" height="4" rx="2" />
      <rect x="3" y="17" width="8" height="4" rx="2" />
    </>
  ),
  pie: <path d="M12 2a10 10 0 1 0 10 10H12V2Zm2 0v8h8a8 8 0 0 0-8-8Z" />,
  ring: (
    <path
      fillRule="evenodd"
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
    />
  ),
  shield: (
    <path d="M12 2 20 5v6.5c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5V5l8-3Zm0 4v13c3-1.5 5-4.2 5-7.5V7.3L12 6Z" />
  ),
  sun: (
    <>
      <path d="M3 16a9 9 0 0 1 18 0H3Z" />
      <rect x="2" y="18.5" width="20" height="2.5" rx="1.25" />
    </>
  ),
  chevron: <path d="m12 3 9 9-3 3-6-6-6 6-3-3 9-9Zm0 8 6 6-3 3-3-3-3 3-3-3 6-6Z" />,
  grid: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="4" />
      <rect x="3" y="13" width="8" height="8" rx="4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </>
  ),
  bolt: <path d="M14 2 4 14h7l-1 8 10-12h-7l1-8Z" />,
  wave: <path d="M2 9c3-4 6-4 10 0s7 4 10 0v5c-3 4-6 4-10 0s-7-4-10 0V9Z" />,
  cross: <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2Z" />,
};

/** Placeholder publication logo: solid mark + wordmark, inherits colour. */
export function OutletLogo({
  name,
  mark,
  className,
}: {
  name: string;
  mark: OutletMark;
  className?: string;
}) {
  return (
    <span className={className}>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {marks[mark]}
      </svg>
      {name}
    </span>
  );
}

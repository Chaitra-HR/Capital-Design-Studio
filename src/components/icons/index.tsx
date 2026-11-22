import { useId, type SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
} as const;

export const PauseIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M7 5v10M13 5v10" />
  </svg>
);

export const PlayIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M6.5 4.5v11l9-5.5-9-5.5Z" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="m5 10.5 3 3 7-7" />
  </svg>
);

/* Brand mark: four-point star in a circle */
/** Capital Design Studio mark, filled with a soft charcoal-to-black gradient */
export function LogoMark(props: IconProps) {
  const id = useId();
  return (
    <svg width="40" height="40" viewBox="0 0 375 373" aria-hidden focusable={false} {...props}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b5d66" />
          <stop offset="0.45" stopColor="#1c1d22" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={`url(#${id})`}
        d="M166.913 0.58552C133.921 3.71752 94.803 20.0485 69.234 41.3645C56.175 52.2515 42.942 66.4405 34.061 79.0765C27.433 88.5075 27.674 88.9165 36.149 82.6325C75.799 53.2335 128.568 48.5605 171.921 70.6095C212.562 91.2795 240.252 132.604 242.931 176.585L243.536 186.51H121.768H0L0.590988 196.803C3.97899 255.762 34.449 309.29 83.177 341.888C105.192 356.616 133.046 367.444 159.734 371.65C170.089 373.282 201.187 373.496 211.734 372.007C245.735 367.208 280.259 352.307 305.234 331.651C312.668 325.502 328.244 310.096 328.194 308.941C328.172 308.429 324.234 306.213 319.444 304.016C276.922 284.517 248.169 242.906 244.639 195.76L243.947 186.51H309.208H374.468L373.877 176.217C370.491 117.299 340.104 63.9235 291.291 31.1515C269.548 16.5535 241.241 5.50351 215.234 1.46151C205.823 -0.00148845 178.338 -0.49948 166.913 0.58552Z"
      />
    </svg>
  );
}

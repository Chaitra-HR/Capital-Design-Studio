import { PauseIcon, PlayIcon } from '@/components/icons';
import { PreviewShot } from '@/components/SitePreview';
import { showcase } from '@/content/home';
import styles from './Showcase.module.css';

/**
 * Infinite marquee of website previews, framed between the layout guides with
 * faded edges. The list renders twice and the track slides by 50%, so the loop
 * is seamless. Pauses on hover and via the toggle (WCAG 2.2.2); static and
 * scrollable under reduced motion.
 */
interface ShowcaseProps {
  paused: boolean;
  onTogglePause: () => void;
}

export function Showcase({ paused, onTogglePause }: ShowcaseProps) {
  return (
    <div className={styles.showcase}>
      <div className={styles.viewport} data-paused={paused || undefined}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className={styles.set}
              aria-label={copy === 0 ? 'Recent advisor websites' : undefined}
              aria-hidden={copy === 1 || undefined}
            >
              {showcase.map((item) => (
                <li key={item.preview}>
                  <PreviewShot item={item} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.toggle}
        aria-pressed={paused}
        onClick={onTogglePause}
        aria-label={paused ? 'Play moving logos and previews' : 'Pause moving logos and previews'}
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
        {paused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
}

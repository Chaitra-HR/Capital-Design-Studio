import { lazy, Suspense, useId, type CSSProperties } from 'react';
import { process } from '@/content/process';
import styles from './Process.module.css';

/*
 * The three illustrations (and their handwriting fonts) are the heaviest part
 * of the page and sit well below the fold, so they load in their own chunk.
 * A same-sized placeholder holds their space so nothing jumps.
 */
const loadVisual = () => import('./ProcessVisual');
const ProcessVisual = lazy(() => loadVisual().then((m) => ({ default: m.ProcessVisual })));

// Fetch it as soon as the browser is idle, well before anyone scrolls there
if (typeof window !== 'undefined') {
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
  idle(() => void loadVisual());
}

export function Process() {
  const id = useId();
  const { eyebrow, title, phases } = process;

  return (
    <section id="process" className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.header}>
          <p className={`eyebrow ${styles.pill}`} data-reveal>
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className={styles.title}
            data-reveal
            style={{ '--reveal-i': 1 } as CSSProperties}
          >
            {title.lead}
            <br />
            <em>{title.emphasis}</em>
          </h2>
        </header>

        <ol className={styles.phases}>
          {phases.map((phase) => (
            <li key={phase.label} className={styles.phase}>
              <div className={styles.copy} data-reveal>
                <p className={`eyebrow ${styles.label}`}>{phase.label}</p>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.text}>{phase.text}</p>
              </div>
              <div
                className={styles.visual}
                data-reveal
                style={{ '--reveal-i': 1 } as CSSProperties}
              >
                <Suspense fallback={<div className={styles.visualPlaceholder} />}>
                  <ProcessVisual kind={phase.visual} />
                </Suspense>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

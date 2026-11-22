import type { ReactNode } from 'react';
import styles from './Band.module.css';

interface BandProps {
  children: ReactNode;
  /** Background tone: plain white, or the faint off-white used to alternate sections */
  tone?: 'white' | 'alt';
  /** Draw a full-width hairline on top, with dots where it meets the column edges */
  divider?: boolean;
  /** Show the small dots on the top hairline (off for a plain line) */
  dots?: boolean;
  /** Connect the dots: vertical guides at the column edges */
  framed?: boolean;
  /** Close the frame with a matching hairline and dots along the bottom */
  closed?: boolean;
}

/**
 * Wraps a homepage section with an alternating background tone and an
 * optional full-width hairline divider with small dots at the column edges.
 * Vertical grid lines are used only where asked for (`framed`), as on Design Me.
 */
export function Band({
  children,
  tone = 'white',
  divider = true,
  dots = true,
  framed = false,
  closed = false,
}: BandProps) {
  return (
    <div
      className={`${styles.band} ${tone === 'alt' ? styles.alt : ''} ${framed ? styles.framed : ''}`}
    >
      {divider && (
        <div className={styles.rule} aria-hidden="true">
          {dots && (
            <span className={styles.ruleInner}>
              <i />
              <i />
            </span>
          )}
        </div>
      )}
      {framed && <div className={styles.frame} aria-hidden="true" />}
      {closed && (
        <div className={`${styles.rule} ${styles.ruleBottom}`} aria-hidden="true">
          <span className={styles.ruleInner}>
            <i />
            <i />
          </span>
        </div>
      )}
      {children}
    </div>
  );
}

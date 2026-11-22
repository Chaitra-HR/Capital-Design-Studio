import styles from './Frame.module.css';

/**
 * Decorative layout frame: a full-width line through the middle of the
 * floating navbar, guide lines at the container edges and dots where they meet.
 */
export function Frame() {
  return (
    <>
      <div className={styles.navLine} aria-hidden="true" />
      <div className={styles.frame} aria-hidden="true">
        <i className={`${styles.dot} ${styles.topLeft}`} />
        <i className={`${styles.dot} ${styles.topRight}`} />
        <i className={`${styles.dot} ${styles.bottomLeft}`} />
        <i className={`${styles.dot} ${styles.bottomRight}`} />
      </div>
    </>
  );
}

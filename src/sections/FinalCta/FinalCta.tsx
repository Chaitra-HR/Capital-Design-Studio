import { useId, type CSSProperties } from 'react';
import { ButtonLink } from '@/components/ui';
import { finalCta } from '@/content/finalCta';
import styles from './FinalCta.module.css';

export function FinalCta() {
  const id = useId();
  const { eyebrow, title, text, cta, note, proof } = finalCta;

  return (
    <section className={styles.section} aria-labelledby={id}>
      {/* Stepped bands hand the white page over to the blue, like the hero */}
      <div className={styles.bands} aria-hidden="true" />
      <div className={`grain ${styles.panel}`}>
        <img
          loading="lazy"
          decoding="async"
          className={`${styles.statue} ${styles.statueLeft}`}
          src="/images/cta-statue-left.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          loading="lazy"
          decoding="async"
          className={`${styles.statue} ${styles.statueRight}`}
          src="/images/cta-statue.webp"
          alt=""
          aria-hidden="true"
        />
        <div className={`container ${styles.inner}`}>
          <p className={`eyebrow ${styles.eyebrow}`} data-reveal>
            {eyebrow}
          </p>
          <h2
            id={id}
            className={styles.title}
            data-reveal
            style={{ '--reveal-i': 1 } as CSSProperties}
          >
            {title.lead} <em>{title.emphasis}</em>
          </h2>
          <p className={styles.text} data-reveal style={{ '--reveal-i': 1 } as CSSProperties}>
            {text}
          </p>
          <div className={styles.actions} data-reveal style={{ '--reveal-i': 1 } as CSSProperties}>
            <ButtonLink to={cta.href} variant="light" size="lg">
              {cta.label}
            </ButtonLink>
            <p className={`eyebrow ${styles.note}`}>{note}</p>
          </div>
          <div className={styles.proof} data-reveal style={{ '--reveal-i': 1 } as CSSProperties}>
            <span className={styles.faces}>
              {proof.photos.map((src) => (
                <img loading="lazy" decoding="async" key={src} src={src} alt="" />
              ))}
            </span>
            <span>{proof.text}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

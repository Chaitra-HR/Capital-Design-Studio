import { useId, type CSSProperties } from 'react';
import { ButtonLink } from '@/components/ui';
import { founder } from '@/content/founder';
import styles from './Founder.module.css';

export function Founder() {
  const id = useId();
  const { eyebrow, title, text, name, role, photo, cta } = founder;

  return (
    <section id="about" className={styles.section} aria-labelledby={id}>
      <div className="container">
        <div className={styles.card}>
          <p className={`eyebrow ${styles.pill}`} data-reveal>
            {eyebrow}
          </p>
          <h2
            id={id}
            className={styles.title}
            data-reveal
            style={{ '--reveal-i': 1 } as CSSProperties}
          >
            {title.lead}
            <br />
            <em>{title.emphasis}</em>
          </h2>
          <p className={styles.text} data-reveal style={{ '--reveal-i': 1 } as CSSProperties}>
            {text}
          </p>

          <div data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
            <ButtonLink to={cta.href} variant="light" className={styles.cta}>
              {cta.label}
            </ButtonLink>
          </div>

          <div className={styles.person} data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
            <img loading="lazy" decoding="async" src={photo} alt={name} width={64} height={64} />
            <div>
              <p className={styles.name}>{name}</p>
              <p className={styles.role}>{role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

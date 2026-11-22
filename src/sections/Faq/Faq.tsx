import { useId, useState, type CSSProperties } from 'react';
import { faq } from '@/content/faq';
import styles from './Faq.module.css';

export function Faq() {
  const id = useId();
  const { eyebrow, title, items } = faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.inner}`}>
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

        <ul className={styles.list} data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
          {items.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `${id}-q${i}`;
            const panelId = `${id}-a${i}`;
            return (
              <li key={item.question} className={styles.item}>
                <h3 className={styles.question}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.question}</span>
                    <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.panel}
                  data-open={isOpen}
                  inert={!isOpen}
                >
                  {/* Height animates from 0 to auto through a one-row grid */}
                  <div className={styles.panelInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

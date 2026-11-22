import { useId, type CSSProperties, type JSX } from 'react';
import { pieceByPiece, type FixIcon } from '@/content/pieceByPiece';
import styles from './PieceByPiece.module.css';

const icons: Record<FixIcon, JSX.Element> = {
  line: <path d="M4 7h12M4 10.5h9M4 14h6" />,
  logo: (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M10 7v6M7 10h6" />
    </>
  ),
  pages: (
    <>
      <rect x="5" y="3.5" width="10" height="13" rx="1.5" />
      <path d="M7.5 7.5h5M7.5 10.5h5M7.5 13.5h3" />
    </>
  ),
};

export function PieceByPiece() {
  const id = useId();
  const { eyebrow, title, lead, fixes, closing } = pieceByPiece;
  const words = lead.text.split(' ');

  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <p className={`eyebrow ${styles.pill}`} data-reveal>
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
          <p className={styles.lead} data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
            <strong>{lead.strong}</strong>{' '}
            <span className={styles.words}>
              {words.map((word, i) => (
                <span key={i} style={{ '--w': i } as CSSProperties}>
                  {word}{' '}
                </span>
              ))}
            </span>
          </p>
        </header>

        <ol className={styles.fixes}>
          {fixes.map((fix, i) => (
            <li key={fix.title} data-reveal style={{ '--reveal-i': i } as CSSProperties}>
              <article className={styles.fix}>
                <div className={styles.fixTop}>
                  <span className={styles.icon} aria-hidden="true">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      {icons[fix.icon]}
                    </svg>
                  </span>
                  <span className={`eyebrow ${styles.fixNo}`}>
                    Fix {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={styles.fixTitle}>{fix.title}</h3>
                <p className={styles.fixText}>{fix.text}</p>
              </article>
            </li>
          ))}
        </ol>

        <p className={styles.closing} data-reveal>
          {closing.lead} {closing.emphasis}
        </p>
      </div>
    </section>
  );
}

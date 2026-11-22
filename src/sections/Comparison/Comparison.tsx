import { useId, type CSSProperties } from 'react';
import { comparison } from '@/content/comparison';
import styles from './Comparison.module.css';

function Mark({ yes }: { yes: boolean }) {
  return (
    <span className={yes ? styles.markYes : styles.markNo} aria-hidden="true">
      <svg viewBox="0 0 16 16">
        <path d={yes ? 'M3.5 8.5l3 3 6-6.5' : 'M4.5 4.5l7 7M11.5 4.5l-7 7'} />
      </svg>
    </span>
  );
}

export function Comparison() {
  const id = useId();
  const { eyebrow, title, columns, rows } = comparison;

  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className="container">
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
        </header>

        <div className={styles.frame} data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td className={styles.corner} />
                <th scope="col" className={styles.headUs}>
                  {columns.us}
                </th>
                <th scope="col" className={styles.headOthers}>
                  {columns.others}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.topic}>
                  <th scope="row" className={styles.topic}>
                    {row.topic}
                  </th>
                  <td className={styles.us}>
                    <span className={styles.cell}>
                      <Mark yes />
                      <span>
                        <strong>{row.us.strong}</strong> {row.us.rest}
                      </span>
                    </span>
                  </td>
                  <td className={styles.others}>
                    <span className={styles.cell}>
                      <Mark yes={false} />
                      <span>{row.others}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import { useId, useState, type CSSProperties } from 'react';
import { quickCheck } from '@/content/quickCheck';
import { cn } from '@/lib/cn';
import { getAllQuickCheckResults, getQuickCheckResult } from '@/lib/quickCheck';
import styles from './QuickCheck.module.css';

/** One emoji per tick count: relaxed at 0, sliding to anxious at 5 */
const faces = ['😌', '🙂', '🤔', '😬', '😟', '😰'];

function Face({ level }: { level: number }) {
  return (
    <span className={styles.face} aria-hidden="true">
      {faces[level]}
    </span>
  );
}

export function QuickCheck() {
  const [ticked, setTicked] = useState<boolean[]>(() => quickCheck.items.map(() => false));
  const count = ticked.filter(Boolean).length;
  const result = getQuickCheckResult(count);
  const id = useId();

  const toggle = (index: number) =>
    setTicked((prev) => prev.map((value, i) => (i === index ? !value : value)));

  return (
    <section className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <p className={`eyebrow ${styles.eyebrow}`} data-reveal>
            {quickCheck.eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className={styles.title}
            data-reveal
            style={{ '--reveal-i': 1 } as CSSProperties}
          >
            {quickCheck.title.lead}
            <br />
            <em>{quickCheck.title.emphasis}</em>
          </h2>
          <p className={styles.sub} data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
            {quickCheck.sub}
          </p>
        </header>

        <ul className={styles.grid}>
          {quickCheck.items.map((item, index) => (
            <li
              key={item.statement}
              data-reveal
              style={{ '--reveal-i': index % 3 } as CSSProperties}
            >
              <label className={styles.item}>
                <input
                  type="checkbox"
                  className="visually-hidden"
                  checked={ticked[index]}
                  onChange={() => toggle(index)}
                />
                <span className={styles.card}>
                  <span className={styles.box} aria-hidden="true">
                    {/* Marker tick: dips into the box, then sweeps past its corner */}
                    <svg viewBox="0 -10 30 30" className={styles.tick}>
                      <path d="M1.8 6.6Q5.2 10 8.9 14.4Q15.6 2.6 27 -7.2" pathLength={1} />
                    </svg>
                  </span>
                  <span className={styles.statement}>{item.statement}</span>
                </span>
                <span className={styles.cost}>
                  <span className={`eyebrow ${styles.costLabel}`}>{quickCheck.costLabel}</span>
                  {item.cost}
                </span>
              </label>
            </li>
          ))}

          <li data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
            <div className={cn(styles.item, styles.resultWrap)}>
              <div
                className={cn(styles.result, styles[result.tone])}
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Re-keyed so the face pops in each time the count changes */}
                <Face key={result.level} level={result.level} />
                {/* The current verdict shares a cell with invisible copies of every
                    verdict (drawn from data attributes, so not read out), which
                    holds the card at the height of the longest and stops it resizing */}
                <div className={styles.resultStack}>
                  {getAllQuickCheckResults().map((r) => (
                    <div
                      key={r.level}
                      className={`${styles.resultBody} ${styles.sizer}`}
                      aria-hidden="true"
                    >
                      <span className={`eyebrow ${styles.score}`} data-text="0 of 5 ticked" />
                      <span className={styles.resultTitle} data-text={r.title} />
                      <span className={styles.resultText} data-text={r.text} />
                    </div>
                  ))}
                  <div className={styles.resultBody}>
                    <p className={`eyebrow ${styles.score}`}>
                      {count} of {quickCheck.items.length} ticked
                    </p>
                    <p className={styles.resultTitle}>{result.title}</p>
                    <p className={styles.resultText}>{result.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

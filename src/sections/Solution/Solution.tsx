import { useId, type CSSProperties } from 'react';
import { ButtonLink } from '@/components/ui';
import { solution } from '@/content/solution';
import styles from './Solution.module.css';

/** Small dots on the four outer corners of the frame, matching the section dividers */
function CornerDots({ edge }: { edge: 'top' | 'bottom' }) {
  return (
    <>
      <i className={`${styles.dot} ${styles[edge]} ${styles.dotLeft}`} aria-hidden="true" />
      <i className={`${styles.dot} ${styles[edge]} ${styles.dotRight}`} aria-hidden="true" />
    </>
  );
}

export function Solution() {
  const id = useId();
  const { label, title, text, media, stages, cta } = solution;

  return (
    <section className={styles.section} aria-labelledby={id}>
      {/* Empty strip above, like the reference frame */}
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.strip}`}>
          <CornerDots edge="top" />
        </div>
      </div>

      {/* Header: label + headline | supporting text */}
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.head}`}>
          <div className={styles.headLeft}>
            <p className={`eyebrow ${styles.label}`} data-reveal>
              {label}
            </p>
            <h2
              id={id}
              className={styles.title}
              data-reveal
              style={{ '--reveal-i': 1 } as CSSProperties}
            >
              {title[0]}
              <br />
              {title[1]}
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.text} data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
              {text}
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.media}`}>
          {/* Two layers of one image: each hand slides in from its own side */}
          <div className={styles.hands} data-reveal>
            <img
              loading="lazy"
              src={media.left}
              alt={media.alt}
              className={`${styles.hand} ${styles.handLeft}`}
              decoding="async"
            />
            <img
              loading="lazy"
              src={media.right}
              alt=""
              aria-hidden="true"
              className={`${styles.hand} ${styles.handRight}`}
              decoding="async"
            />
          </div>
          <span className={`eyebrow ${styles.mediaLabel}`}>{media.leftLabel}</span>
          <span className={`eyebrow ${styles.mediaLabel} ${styles.mediaLabelRight}`}>
            {media.rightLabel}
          </span>
        </div>
      </div>

      {/* Three stages */}
      <div className={styles.row}>
        <ol className={`${styles.box} ${styles.stages}`}>
          {stages.map((stage, i) => (
            <li
              key={stage.title}
              className={styles.stage}
              data-reveal
              style={{ '--reveal-i': i } as CSSProperties}
            >
              <span className={`eyebrow ${styles.stageNo}`}>
                Stage {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageText}>{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Call to action band */}
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.ctaBox}`}>
          <div className={`grain ${styles.cta}`}>
            <p className={styles.ctaText}>{cta.text}</p>
            <span className={styles.ctaAction}>
              {/* Hand-drawn arrow that loops once, then points at the button */}
              <svg className={styles.ctaArrow} viewBox="0 0 120 70" aria-hidden="true">
                <path
                  className={styles.arrowBody}
                  pathLength={1}
                  d="M6 60C16 34 44 24 57 39c9 11-5 22-13 13-9-10 9-34 66-30"
                />
                <path className={styles.arrowHead} pathLength={1} d="M101 13l10 9-11 8" />
              </svg>
              <ButtonLink to={cta.href} variant="light" size="lg">
                {cta.label}
              </ButtonLink>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.box} ${styles.strip}`}>
          <CornerDots edge="bottom" />
        </div>
      </div>
    </section>
  );
}

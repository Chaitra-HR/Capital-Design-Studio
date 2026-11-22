import { useId, type CSSProperties } from 'react';
import { clientStories } from '@/content/clientStories';
import styles from './ClientStories.module.css';

const initials = (name: string) =>
  name
    .split(',')[0]
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

export function ClientStories() {
  const id = useId();
  const { eyebrow, title, stories } = clientStories;

  return (
    <section id="stories" className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.header}>
          <p className={`eyebrow ${styles.eyebrow}`} data-reveal>
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

        <ul className={styles.grid}>
          {stories.map((story, i) => (
            <li
              key={story.name}
              className={styles.card}
              data-reveal
              style={{ '--reveal-i': i % 2 } as CSSProperties}
            >
              <blockquote className={styles.quote}>
                <p>
                  <span className={styles.mark} aria-hidden="true">
                    “
                  </span>
                  {story.quote.lead} <em>{story.quote.emphasis}</em>”
                </p>
              </blockquote>
              <div className={styles.person}>
                {story.photo ? (
                  <img
                    className={styles.photo}
                    src={story.photo}
                    alt={story.name}
                    width={112}
                    height={112}
                    loading="lazy"
                  />
                ) : (
                  <span className={`${styles.photo} ${styles.initials}`} aria-hidden="true">
                    {initials(story.name)}
                  </span>
                )}
                <p className={styles.personText}>
                  <strong>{story.name}</strong>
                  <span>{story.role}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Stepped bands that hand the dark section back to the brand blue */}
      <div className={styles.bands} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

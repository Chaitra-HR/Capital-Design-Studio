import { useState, type CSSProperties } from 'react';
import { CheckIcon } from '@/components/icons';
import { OutletLogo } from '@/components/OutletLogo';
import { ButtonLink } from '@/components/ui';
import { hero, outlets } from '@/content/home';
import { Frame } from './Frame';
import { Showcase } from './Showcase';
import styles from './Hero.module.css';

/** Stagger index for the entrance animation. */
const step = (i: number) => ({ '--i': i }) as CSSProperties;

export function Hero() {
  // One switch pauses both moving rows (WCAG 2.2.2)
  const [paused, setPaused] = useState(false);

  return (
    <section className={`grain ${styles.hero}`} aria-labelledby="hero-title">
      <Frame />

      <div className={`container ${styles.content}`}>
        <p className={`${styles.badge} ${styles.reveal}`} style={step(0)}>
          <span className={styles.avatars} aria-hidden="true">
            {hero.trust.avatars.map((src) => (
              <img key={src} src={src} alt="" width={28} height={28} className={styles.avatar} />
            ))}
          </span>
          {hero.trust.text}
        </p>

        <h1 id="hero-title" className={`${styles.title} ${styles.reveal}`} style={step(1)}>
          {hero.title.lead} <em>{hero.title.emphasis}</em>
        </h1>

        <p className={`${styles.lead} ${styles.reveal}`} style={step(2)}>
          {hero.lead}
        </p>

        <ul className={`${styles.benefits} ${styles.reveal}`} style={step(3)}>
          {hero.benefits.map((benefit) => (
            <li key={benefit}>
              <span className={styles.check} aria-hidden="true">
                <CheckIcon />
              </span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className={styles.reveal} style={step(4)}>
          <ButtonLink
            to={hero.primaryCta.href}
            variant="light"
            size="lg"
            withAvatar
            className={styles.cta}
          >
            {hero.primaryCta.label}
          </ButtonLink>
        </div>

        <div className={`${styles.logos} ${styles.reveal}`} style={step(5)}>
          <p className={`eyebrow ${styles.logosCaption}`}>{hero.logos.lead}</p>
          <div className={styles.logoCloud} data-paused={paused || undefined}>
            <div className={styles.logoTrack}>
              {[0, 1].map((copy) => (
                <ul key={copy} className={styles.logoSet} aria-hidden={copy === 1 || undefined}>
                  {outlets.map((outlet) => (
                    <li key={outlet.name}>
                      <OutletLogo {...outlet} className={styles.logo} />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="work" data-scroll="center" className={styles.reveal} style={step(6)}>
        <Showcase paused={paused} onTogglePause={() => setPaused((p) => !p)} />
      </div>
      <div className={styles.bands} aria-hidden="true" />
    </section>
  );
}

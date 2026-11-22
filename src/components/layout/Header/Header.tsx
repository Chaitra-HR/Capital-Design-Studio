import { useEffect, useState } from 'react';
import { ButtonLink } from '@/components/ui';
import { navItems, primaryCta } from '@/content/site';
import { Logo } from '../Logo';
import { SectionLink } from '../SectionLink';
import styles from './Header.module.css';

/**
 * Floating navbar. On smaller screens the links drop away and only the logo
 * and the "Book a call" button remain (no menu); the footer carries the links.
 */
/** Which section is in view, so its link can show the dot */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);
  return active;
}

const SECTION_IDS = navItems.map((item) => item.section);

export function Header() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Logo />

        <nav aria-label="Main" className={styles.nav}>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.section}>
                <SectionLink
                  section={item.section}
                  className={`${styles.navLink} ${active === item.section ? styles.active : ''}`}
                  aria-current={active === item.section ? 'location' : undefined}
                >
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.roll}>
                    <span className={styles.rollA}>{item.label}</span>
                    <span className={styles.rollB} aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                  {item.tag && <span className={styles.tag}>{item.tag}</span>}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ButtonLink to={primaryCta.href} className={styles.cta}>
            {primaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

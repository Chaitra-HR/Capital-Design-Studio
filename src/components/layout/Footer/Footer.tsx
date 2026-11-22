import { Link } from 'react-router';
import { footerNav, site } from '@/content/site';
import { Logo } from '../Logo';
import { SectionLink } from '../SectionLink';
import styles from './Footer.module.css';

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

/*
 * No scroll-reveal here: the footer sits at the very end of the page, where a
 * scroll-driven fade could never finish, so it stays crisp from the start.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>{site.footerTagline}</p>
          </div>

          <nav aria-label="Footer" className={styles.nav}>
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className={`eyebrow ${styles.heading}`}>{group.title}</p>
                <ul className={styles.links}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {isExternal(link.href) ? (
                        <a
                          href={link.href}
                          {...(link.href.startsWith('http')
                            ? { target: '_blank', rel: 'noreferrer' }
                            : {})}
                        >
                          {link.label}
                        </a>
                      ) : link.href.startsWith('/#') ? (
                        <SectionLink section={link.href.slice(2)} className={styles.withTag}>
                          {link.label}
                          {link.tag && <span className={styles.tag}>{link.tag}</span>}
                        </SectionLink>
                      ) : (
                        <Link to={link.href}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.bottomRule}>
        <i className={`${styles.dot} ${styles.dotLeft}`} aria-hidden="true" />
        <i className={`${styles.dot} ${styles.dotRight}`} aria-hidden="true" />
        <div className={`container ${styles.inner} ${styles.bottom}`}>
          <span className="eyebrow">
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>
      </div>
    </footer>
  );
}

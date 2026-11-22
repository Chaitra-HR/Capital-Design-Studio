import { Link } from 'react-router';
import { LogoMark } from '@/components/icons';
import { site } from '@/content/site';
import { ROUTES } from '@/lib/routes';
import styles from './Logo.module.css';

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to={ROUTES.home} className={styles.logo} onClick={onClick}>
      <LogoMark className={styles.mark} />
      <span>{site.name}</span>
    </Link>
  );
}

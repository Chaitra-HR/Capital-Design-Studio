import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layout.module.css';

export function Layout() {
  const { pathname } = useLocation();
  useSmoothScroll();
  useScrollReveal(pathname);

  return (
    <div className={styles.layout}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <Header />
      <main id="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

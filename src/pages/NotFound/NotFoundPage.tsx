import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link } from 'react-router';
import { ROUTES } from '@/lib/routes';

export function NotFoundPage() {
  useDocumentTitle('Page not found');

  return (
    <section className="container">
      <h1>Page not found</h1>
      <Link to={ROUTES.home}>Back to home</Link>
    </section>
  );
}

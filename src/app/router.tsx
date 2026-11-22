import { createBrowserRouter } from 'react-router';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/Home';
import { NotFoundPage } from '@/pages/NotFound';
import { ROUTES } from '@/lib/routes';

/* One-page site: everything lives on the homepage; any other path is a 404 */
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

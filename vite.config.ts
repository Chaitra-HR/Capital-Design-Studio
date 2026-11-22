/// <reference types="vitest/config" />
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/** Pages listed in the sitemap: a one-page site for now */
const PAGES = ['/'];

/**
 * SEO plumbing that needs the live domain (VITE_SITE_URL):
 * - fills %SITE_URL% in index.html (canonical, Open Graph, structured data)
 * - writes sitemap.xml and robots.txt into the build
 */
function seo(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, '');
  return {
    name: 'seo',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', base),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = PAGES.map(
        (p) =>
          `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : '0.7'}</priority></url>`,
      ).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = env.VITE_SITE_URL || 'http://localhost:5173';

  return {
    plugins: [react(), seo(siteUrl)],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.ts',
    },
  };
});

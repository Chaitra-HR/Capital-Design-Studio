import { useEffect } from 'react';
import { site } from '@/content/site';

const DEFAULT_TITLE = `Financial Advisor Website Design & Copywriting | ${site.name}`;

function setMeta(selector: string, attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

/**
 * Sets the page title and, when given, its description, keeping the
 * Open Graph / Twitter copies and the canonical link in step.
 */
export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    const full = title ? `${title} | ${site.name}` : DEFAULT_TITLE;
    document.title = full;
    setMeta('meta[property="og:title"]', 'property', 'og:title', full);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', full);

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    const url = `${window.location.origin}${window.location.pathname}`;
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    document.head
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute('href', url);
  }, [title, description]);
}

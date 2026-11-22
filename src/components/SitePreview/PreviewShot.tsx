import { cn } from '@/lib/cn';
import type { ShowcaseItem } from '@/content/home';
import { SitePreview } from './SitePreview';
import styles from './PreviewShot.module.css';

/** A bare, screenshot-style preview: no frame or caption. */
export function PreviewShot({ item }: { item: ShowcaseItem }) {
  return (
    <div
      className={cn(styles.shot, item.device === 'phone' && styles.phone)}
      role="img"
      aria-label={`${item.client} website, ${item.device} view`}
    >
      <SitePreview id={item.preview} />
    </div>
  );
}

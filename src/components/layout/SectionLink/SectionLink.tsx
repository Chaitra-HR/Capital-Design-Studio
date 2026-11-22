import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { scrollToSection } from '@/hooks/useSmoothScroll';

interface SectionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** id of the homepage section to scroll to */
  section: string;
}

/**
 * Link to a section of the one-page site. On the homepage it glides there;
 * from any other page it opens the homepage at that section.
 */
export function SectionLink({ section, onClick, children, ...props }: SectionLinkProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (pathname === '/') {
      scrollToSection(section);
      window.history.replaceState(null, '', `#${section}`);
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <a href={`/#${section}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

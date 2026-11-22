import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Band } from '@/components/layout/Band';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { scrollToSection } from '@/hooks/useSmoothScroll';
import { ClientStories } from '@/sections/ClientStories';
import { Comparison } from '@/sections/Comparison';
import { Faq } from '@/sections/Faq';
import { FinalCta } from '@/sections/FinalCta';
import { Founder } from '@/sections/Founder';
import { Hero } from '@/sections/Hero';
import { PieceByPiece } from '@/sections/PieceByPiece';
import { Process } from '@/sections/Process';
import { QuickCheck } from '@/sections/QuickCheck';
import { Solution } from '@/sections/Solution';

/*
 * Light sections alternate between white and a faint off-white and are
 * separated by hairlines with dots (as on Design Me). The blue and dark
 * sections bring their own stepped bands.
 */
export function HomePage() {
  useDocumentTitle(
    undefined,
    'Strategic website design and copywriting for financial advisors and wealth management firms. Clarify your positioning and create a website that earns enquiries.',
  );

  // Arriving from another page at /#section: glide there once the page is in
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = window.setTimeout(() => scrollToSection(hash.slice(1)), 120);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <Hero />
      <Band divider={false}>
        <QuickCheck />
      </Band>
      <Band tone="alt" dots={false}>
        <PieceByPiece />
      </Band>
      <Band divider={false}>
        <Solution />
      </Band>
      <ClientStories />
      <Band divider={false}>
        <Process />
      </Band>
      <Band tone="alt" framed>
        <Comparison />
      </Band>
      <Band>
        <Founder />
      </Band>
      <Band tone="alt" framed closed>
        <Faq />
      </Band>
      <FinalCta />
    </>
  );
}

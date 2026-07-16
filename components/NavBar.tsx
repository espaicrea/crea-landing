
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { useScrollAnimator } from '@/components/utils/scrollAnimator';
import { useLanguage } from '@/components/LanguageProvider';

export default function NavBar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const { handleHashNavigation } = useScrollAnimator({
    getStickyHeaderHeight: () => headerRef.current?.offsetHeight ?? 0,
  });
  const { copy } = useLanguage();
  const pathname = usePathname();
  const onHomePage = pathname === '/';

  const sectionHref = (hash: string) => (onHomePage ? hash : `/${hash}`);
  
  return (
    <header id="main-header" ref={headerRef} className="border-b-0 md:border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="flex flex-col md:flex-row">
          <Link href="/" aria-label={copy.nav.home} className="bg-black text-white py-3 px-4 md:p-6 flex items-center justify-center md:justify-start w-full md:w-auto md:min-w-[200px] hover:bg-mondrian-blue transition-colors">
            <div className="flex items-center gap-2">
              {/* <Zap className="w-6 h-6 fill-white" /> */}
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight">[crea]</span>
            </div>
          </Link>
          <nav aria-label={copy.nav.primaryLabel} className="flex-grow flex flex-wrap md:flex-nowrap border-t-4 md:border-t-0 md:border-l-4 border-black">
            <Link className="flex-1 flex items-center justify-center py-2 px-4 md:py-4 md:px-6 text-base md:text-lg font-bold hover:bg-mondrian-yellow transition-colors border-b-4 md:border-b-0 md:border-r-4 border-black" href={sectionHref('#about')} onClick={onHomePage ? (event) => handleHashNavigation(event, '#about') : undefined}>{copy.nav.about}</Link>
            <Link className="flex-1 flex items-center justify-center py-2 px-4 md:py-4 md:px-6 text-base md:text-lg font-bold hover:bg-mondrian-blue hover:text-white transition-colors border-b-4 md:border-b-0 md:border-r-4 border-black" href={sectionHref('#mission')} onClick={onHomePage ? (event) => handleHashNavigation(event, '#mission') : undefined}>{copy.nav.mission}</Link>
            <Link className="hidden md:flex-1 md:flex items-center justify-center py-2 px-4 md:py-4 md:px-6 text-base md:text-lg font-bold hover:bg-mondrian-red hover:text-white transition-colors border-b-4 md:border-b-0 md:border-r-0" href={sectionHref('#social')} onClick={onHomePage ? (event) => handleHashNavigation(event, '#social') : undefined}>{copy.nav.social}</Link>
            <Link className="md:hidden flex-1 flex items-center justify-center py-2 px-4 text-base font-bold hover:bg-mondrian-red hover:text-white transition-colors border-b-4" href="https://lu.ma/crea?utm_source=landing" target="_blank" rel="noopener noreferrer">
              {copy.nav.cta}
            </Link>
          </nav>
          <div className="hidden md:flex items-stretch border-l-4 border-black">
            <Link className="bg-mondrian-red text-white font-extrabold px-8 hover:bg-black transition-colors uppercase tracking-wider text-sm flex items-center" href="https://lu.ma/crea?utm_source=landing" target="_blank" rel="noopener noreferrer">
              {copy.nav.cta}
            </Link>
          </div>
        </div>
      </header>
    );
}

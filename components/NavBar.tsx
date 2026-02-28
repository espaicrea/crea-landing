
'use client';

import Link from 'next/link';
import { MouseEvent, useRef } from 'react';
import { useScrollAnimator } from '@/components/utils/scrollAnimator';

export default function NavBar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const { handleHashNavigation } = useScrollAnimator({
    getStickyHeaderHeight: () => headerRef.current?.offsetHeight ?? 0,
  });
  
  return (
    <header id="main-header" ref={headerRef} className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="flex flex-col md:flex-row">
          <div className="bg-black text-white p-6 flex items-center justify-center md:justify-start w-full md:w-auto md:min-w-[200px]">
            <div className="flex items-center gap-2">
              {/* <Zap className="w-6 h-6 fill-white" /> */}
              <span className="text-3xl font-extrabold tracking-tight">[crea]</span>
            </div>
          </div>
          <nav className="flex-grow flex flex-wrap md:flex-nowrap border-t-4 md:border-t-0 md:border-l-4 border-black">
            <Link className="flex-1 flex items-center justify-center py-4 px-6 text-lg font-bold hover:bg-mondrian-yellow transition-colors border-b-4 md:border-b-0 md:border-r-4 border-black" href="#about" onClick={(event) => handleHashNavigation(event, '#about')}>Qui som?</Link>
            <Link className="flex-1 flex items-center justify-center py-4 px-6 text-lg font-bold hover:bg-mondrian-blue hover:text-white transition-colors border-b-4 md:border-b-0 md:border-r-4 border-black" href="#mission" onClick={(event) => handleHashNavigation(event, '#mission')}>La Missió</Link>
            <Link className="flex-1 flex items-center justify-center py-4 px-6 text-lg font-bold hover:bg-mondrian-red hover:text-white transition-colors" href="#social" onClick={(event) => handleHashNavigation(event, '#social')}>Troba'ns</Link>
          </nav>
          <div className="hidden md:flex items-stretch border-l-4 border-black">
            <Link className="bg-mondrian-red text-white font-extrabold px-8 hover:bg-black transition-colors uppercase tracking-wider text-sm flex items-center" href="https://lu.ma/crea?utm_source=landing" target="_blank" rel="noopener noreferrer">
              Apunta&apos;t
            </Link>
          </div>
        </div>
      </header>
    );
}
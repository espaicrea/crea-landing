'use client';

import Link from 'next/link';
import { useScrollAnimator } from '@/components/utils/scrollAnimator';

export default function Footer() {
  const { handleHashNavigation } = useScrollAnimator({
    getStickyHeaderHeight: () => {
      const headerElement = document.getElementById('main-header');
      return headerElement?.offsetHeight ?? 0;
    },
  });

  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-black text-white border-t-4 border-black pt-12 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="bg-white text-black inline-flex items-center gap-2 px-4 py-2 mb-4 font-bold border-2 border-white">
                {/* <Zap className="w-5 h-5 fill-black" /> */}
                <span className="text-xl">[crea]</span>
              </div>
              <p className="text-gray-400 font-bold max-w-xs mb-6">
                Fent realitat les idees dels estudiants de Barcelona des del 2025.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-wider">
                <Link className="hover:text-mondrian-yellow transition-colors" href="#about" onClick={(event) => handleHashNavigation(event, '#about')}>Sobre nosaltres</Link>
                <span className="text-gray-600">/</span>
                <Link className="hover:text-mondrian-red transition-colors" href="#" onClick={(event) => handleHashNavigation(event, '#')}>Normes</Link>
                <span className="text-gray-600">/</span>
                <Link className="hover:text-mondrian-blue transition-colors" href="#social" onClick={(event) => handleHashNavigation(event, '#social')}>Contacte</Link>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-xs font-bold text-gray-500 uppercase">
                ©&nbsp;{currentYear}&nbsp;[crea]. Tots els drets reservats.
              </p>
              <div className="h-2 w-full max-w-[200px] flex">
                <div className="h-full w-1/3 bg-mondrian-red"></div>
                <div className="h-full w-1/3 bg-mondrian-yellow"></div>
                <div className="h-full w-1/3 bg-mondrian-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
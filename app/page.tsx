'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Users, Rocket, Calendar, Instagram, ExternalLinkIcon, Hammer } from 'lucide-react';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const [isBlue, setIsBlue] = useState(true);
  const { copy } = useLanguage();
  

  return (
    <div className="min-h-screen flex flex-col border-x-4 border-black max-w-[1440px] mx-auto bg-white">
      <NavBar />
      
      <main className="flex-grow flex flex-col">
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black min-h-[600px]">
          <div className="lg:col-span-7 flex flex-col border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-16 justify-center bg-white relative">
            <LanguageSwitcher className="absolute top-0 right-0 lg:right-auto lg:left-0 w-42 border-t-0 border-r-0 lg:border-r-4 border-b-4 border-l-4 lg:border-l-0" />
            <div className="mt-12 mb-8">
              <span className="inline-block bg-black text-white px-3 py-1 text-sm font-bold mb-4 uppercase tracking-widest">{copy.hero.eyebrow}</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black leading-tight mb-6">
                {copy.hero.titleLines[0]} <br/>
                {copy.hero.titleLines[1]} <br/>
                <span className="bg-mondrian-blue text-white px-2">{copy.hero.highlight}</span>
              </h1>
              <p className="text-xl font-bold text-gray-800 max-w-lg leading-relaxed border-l-4 border-mondrian-red pl-6">
                {copy.hero.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link className="h-14 px-8 bg-black text-white text-lg font-extrabold hover:bg-mondrian-red border-2 border-black transition-all flex items-center justify-center gap-2" href="https://lu.ma/crea?utm_source=landing" target="_blank" rel="noopener noreferrer">
                {copy.hero.nextEvent}
                <ExternalLinkIcon className="w-5 h-5" />
              </Link>
              <Link className="h-14 px-8 bg-white text-black text-lg font-extrabold border-4 border-black hover:bg-mondrian-yellow transition-all py-2.5 flex items-center justify-center" href="/qui-som">
                {copy.hero.learnMore}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-rows-6">
            <div className="row-span-4 border-b-4 border-black relative overflow-hidden group">
              <Image 
                alt={copy.hero.imageAlt} 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="/img/img1.jpg"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              
              <div className="absolute inset-0 border-4 border-transparent hover:border-mondrian-yellow pointer-events-none transition-all duration-300"></div>
            </div>
            <div className="row-span-2 grid grid-cols-2">
              <div className="bg-mondrian-red border-r-4 border-black flex items-center justify-center p-6 transition-colors hover:bg-mondrian-blue" onMouseEnter={() => {}} onMouseLeave={(e) => {
                // remove class hover:bg-mondrian-yellow and add hover:bg-mondrian-blue
                if(isBlue) {
                  (e.target as HTMLElement).classList.remove('hover:bg-mondrian-yellow');
                  (e.target as HTMLElement).classList.add('hover:bg-mondrian-blue');
                } else {
                  (e.target as HTMLElement).classList.remove('hover:bg-mondrian-blue');
                  (e.target as HTMLElement).classList.add('hover:bg-mondrian-yellow');
                }
                setIsBlue(!isBlue);
              }}>
                {/* <Zap className="text-white w-16 h-16 fill-white" /> */}
              </div>
              <div className="bg-white p-6 flex flex-col justify-center">
                <h3 className="font-extrabold text-xl mb-1">{copy.hero.location}</h3>
                <p className="text-sm font-bold text-gray-600">{copy.hero.sessions}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="mission" className="scroll-mt-32 md:scroll-mt-36 grid grid-cols-1 md:grid-cols-3 border-b-4 border-black">
          <div className="bg-black text-white p-8 md:p-12 flex items-center justify-center lg:rotate-180 border-b-4 md:border-b-0 md:border-r-4 border-white md:border-black">
            <div className="md:rotate-270 lg:rotate-0">
              <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-widest text-center md:text-left">{copy.mission.titleLines[0]}<br></br> {copy.mission.titleLines[1]}</h2>
            </div>
          </div>
          <div className="col-span-2 grid grid-rows-2">
            <div className="p-8 md:p-12 border-b-4 border-black flex flex-col justify-center bg-mondrian-white">
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                {copy.mission.lead}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-r-0 sm:border-r-4 border-b-4 sm:border-b-0 border-black p-8 bg-mondrian-yellow flex flex-col justify-between hover:bg-yellow-300 transition-colors">
                <Users className="w-10 h-10 mb-4" />
                <div>
                  <h3 className="text-xl font-extrabold uppercase mb-2">{copy.mission.collaborationTitle}</h3>
                  <p className="font-bold text-sm">{copy.mission.collaborationDescription}</p>
                </div>
              </div>
              <div className="p-8 bg-white flex flex-col justify-between hover:bg-gray-50 transition-colors">
                <Rocket className="w-10 h-10 mb-4 text-mondrian-blue" />
                <div>
                  <h3 className="text-xl font-extrabold uppercase mb-2">{copy.mission.growthTitle}</h3>
                  <p className="font-bold text-sm">{copy.mission.growthDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="about" className="border-b-4 border-black bg-black p-4">
          <div className="bg-white border-4 border-black p-4 mb-4">
            <h2 className="text-3xl font-extrabold uppercase">{copy.about.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 border-4 border-black bg-white relative group overflow-hidden min-h-[300px]">
              <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-bold z-10 border-r-4 border-b-4 border-black">{copy.about.eventsTag}</div>
              <Image 
                alt={copy.about.eventImageAlt} 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                src="/img/img2.jpg"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:col-span-1 md:row-span-2 border-4 border-black bg-mondrian-blue relative group overflow-hidden min-h-[200px]">
              <div className="absolute top-0 right-0 bg-white text-black px-4 py-2 font-bold z-10 border-l-4 border-b-4 border-black">{copy.about.aboutTag}</div>
              <div className="h-full flex flex-col items-start justify-between gap-6 p-6 pt-16 text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
                <p className="text-xl lg:text-2xl font-bold leading-tight">
                  {copy.about.description}
                </p>
                <Link
                  className="inline-flex min-h-12 items-center justify-center bg-white px-4 py-3 text-sm font-extrabold uppercase text-black border-4 border-black hover:bg-mondrian-yellow transition-colors"
                  href="/qui-som"
                >
                  {copy.about.readMore}
                </Link>
              </div>
            </div>
            <div className="border-4 border-black bg-mondrian-red flex items-center justify-center p-6 min-h-[150px]">
              <Hammer className="text-white w-16 h-16" />
            </div>
            <div className="border-4 border-black bg-white relative group overflow-hidden min-h-[150px]">
              <Image 
                alt={copy.about.brandingImageAlt} 
                className="object-cover grayscale" 
                src="/img/img3.jpg"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-mondrian-yellow/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-extrabold text-black text-xl uppercase text-center p-2">{copy.about.projectLabel}</span>
              </div>
            </div>
          </div>
        </section>
        
        <section id="social" className="grid grid-cols-1 md:grid-cols-2">
          <Link className="block group border-b-4 md:border-b-0 md:border-r-4 border-black bg-white hover:bg-mondrian-blue transition-colors relative h-64 md:h-80" href="https://www.instagram.com/crea.bcn/" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none mb-6 group-hover:bg-white group-hover:text-mondrian-blue transition-colors border-4 border-transparent group-hover:border-black">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-black group-hover:text-white mb-2">@crea.bcn</h3>
              <p className="font-bold text-gray-500 group-hover:text-white/90">{copy.social.instagramDescription}</p>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-mondrian-red border-t-4 border-l-4 border-black"></div>
          </Link>
          <Link className="block group bg-white hover:bg-mondrian-yellow transition-colors relative h-64 md:h-80" href="https://lu.ma/crea?utm_source=landing" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none mb-6 group-hover:bg-black group-hover:text-mondrian-yellow transition-colors">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-black mb-2">Lu.ma</h3>
              <p className="font-bold text-gray-500 group-hover:text-black">{copy.social.eventsDescription}</p>
            </div>
            <div className="absolute top-0 left-0 w-12 h-12 bg-mondrian-blue border-r-4 border-b-4 border-black"></div>
          </Link>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Mail, MapPin, Users } from 'lucide-react';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import NavBar from '@/components/NavBar';
import { useLanguage } from '@/components/LanguageProvider';
import { organization } from '@/lib/organization';

const eventUrl = 'https://lu.ma/crea?utm_source=about-page';

export default function AboutPage() {
  const { copy } = useLanguage();
  const page = copy.aboutPage;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.legalName,
    alternateName: [organization.brandName, organization.extendedBrandName],
    url: organization.website,
    email: organization.email,
    taxID: organization.taxId,
    description: page.metadata.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address,
      postalCode: organization.postalCode,
      addressLocality: organization.city,
      addressRegion: organization.region,
      addressCountry: organization.country,
    },
    areaServed: {
      '@type': 'City',
      name: organization.city,
    },
    sameAs: ['https://www.instagram.com/crea.bcn/'],
  };

  const transparencyRows = [
    { label: page.transparency.legalName, value: organization.legalName },
    { label: page.transparency.taxId, value: `NIF ${organization.taxId}` },
    {
      label: page.transparency.brand,
      value: `${organization.brandName} · ${organization.extendedBrandName}`,
    },
    { label: page.transparency.legalForm, value: page.transparency.legalFormValue },
    { label: page.transparency.location, value: organization.location },
  ];

  return (
    <div className="min-h-screen flex flex-col border-x-4 border-black max-w-[1440px] mx-auto bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <NavBar />

      <main className="flex-grow">
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black">
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-center min-h-[620px]">
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2 text-sm font-extrabold uppercase tracking-wider mb-10 hover:text-mondrian-blue"
            >
              <ArrowLeft aria-hidden="true" className="w-4 h-4" />
              {copy.nav.home}
            </Link>
            <p className="w-fit bg-black text-white px-3 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6">
              {page.hero.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.03] mb-7">
              {page.hero.title}
              <span className="block bg-mondrian-blue text-white w-fit px-2 mt-2">
                {page.hero.highlight}
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-bold leading-relaxed max-w-2xl border-l-4 border-mondrian-red pl-5">
              {page.hero.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                className="min-h-14 px-6 bg-black text-white font-extrabold border-4 border-black hover:bg-mondrian-red transition-colors flex items-center justify-center gap-2 text-center"
                href={eventUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {page.hero.eventCta}
                <ArrowUpRight aria-hidden="true" className="w-5 h-5 shrink-0" />
              </Link>
              <Link
                className="min-h-14 px-6 bg-white text-black font-extrabold border-4 border-black hover:bg-mondrian-yellow transition-colors flex items-center justify-center gap-2"
                href={`mailto:${organization.email}`}
              >
                <Mail aria-hidden="true" className="w-5 h-5" />
                {page.hero.contactCta}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-rows-[auto_auto_280px] lg:grid-rows-[auto_1fr_280px] bg-mondrian-yellow">
            <LanguageSwitcher className="w-42 justify-self-end border-t-0 border-r-0" />
            <div className="p-7 sm:p-10 flex flex-col justify-center">
              <p className="text-xs font-extrabold uppercase tracking-widest mb-3">{page.identityCard.label}</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-5">{page.identityCard.title}</h2>
              <p className="font-bold leading-relaxed mb-6">{page.identityCard.description}</p>
              <div className="bg-white border-4 border-black p-4 font-extrabold flex items-start gap-3">
                <Check aria-hidden="true" className="w-6 h-6 shrink-0 text-mondrian-blue" strokeWidth={4} />
                <span>{page.identityCard.nonprofit}</span>
              </div>
              <p className="font-extrabold mt-5">NIF {organization.taxId}</p>
            </div>
            <div className="relative border-t-4 border-black overflow-hidden group">
              <Image
                src="/img/img2.jpg"
                alt={page.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        <section id="missio" className="grid grid-cols-1 md:grid-cols-12 border-b-4 border-black">
          <div className="md:col-span-4 bg-black text-white p-8 md:p-12 flex flex-col justify-between gap-12 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em]">{page.mission.label}</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">{page.mission.title}</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-4xl font-extrabold leading-tight p-8 md:p-12 border-b-4 border-black bg-mondrian-yellow">
              {page.mission.statement}
            </p>
            <p className="text-lg font-bold leading-relaxed p-8 md:p-12 max-w-4xl">{page.mission.body}</p>
          </div>
        </section>

        <section className="border-b-4 border-black">
          <div className="p-8 md:p-12 lg:p-16 border-b-4 border-black bg-white">
            <p className="text-sm font-extrabold text-mondrian-blue uppercase tracking-[0.2em] mb-4">{page.program.label}</p>
            <h2 className="text-3xl md:text-5xl font-extrabold max-w-4xl leading-tight mb-6">{page.program.title}</h2>
            <p className="text-lg font-bold leading-relaxed max-w-4xl">{page.program.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {page.program.steps.map((step, index) => (
              <article
                key={step.number}
                className={`p-8 md:p-10 min-h-[330px] flex flex-col justify-between border-black ${
                  index < page.program.steps.length - 1 ? 'border-b-4 md:border-b-0 md:border-r-4' : ''
                } ${index === 1 ? 'bg-mondrian-yellow' : index === 2 ? 'bg-mondrian-blue text-white' : 'bg-white'}`}
              >
                <span className="text-6xl font-extrabold leading-none" aria-hidden="true">{step.number}</span>
                <div>
                  <h3 className="text-2xl font-extrabold uppercase mb-3">{step.title}</h3>
                  <p className="font-bold leading-relaxed">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b-4 border-black bg-black p-4">
          <div className="bg-white border-4 border-black p-6 md:p-8 mb-4">
            <p className="text-sm font-extrabold text-mondrian-red uppercase tracking-[0.2em] mb-3">{page.impact.label}</p>
            <h2 className="text-3xl md:text-5xl font-extrabold">{page.impact.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {page.impact.items.map((item, index) => (
              <article
                key={item.title}
                className={`border-4 border-black p-7 md:p-9 min-h-[230px] flex flex-col justify-end ${
                  index === 0 ? 'bg-mondrian-red text-white' : index === 1 ? 'bg-white' : 'bg-mondrian-yellow'
                }`}
              >
                <h3 className="text-2xl font-extrabold uppercase mb-3">{item.title}</h3>
                <p className="font-bold leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black">
          <div className="p-8 md:p-12 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-8">
              <Users aria-hidden="true" className="w-8 h-8" />
            </div>
            <p className="text-sm font-extrabold text-mondrian-blue uppercase tracking-[0.2em] mb-3">{page.audience.label}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">{page.audience.title}</h2>
            <p className="font-bold text-lg leading-relaxed mb-6">{page.audience.body}</p>
            <p className="font-bold leading-relaxed bg-mondrian-yellow border-l-4 border-black p-5">{page.audience.note}</p>
          </div>
          <div className="bg-mondrian-blue text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] mb-3">{page.nonprofit.label}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">{page.nonprofit.title}</h2>
            <p className="font-bold text-lg leading-relaxed">{page.nonprofit.body}</p>
          </div>
        </section>

        <section id="transparencia" className="border-b-4 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-mondrian-yellow p-8 md:p-12 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] mb-3">{page.transparency.label}</p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">{page.transparency.title}</h2>
              <p className="font-bold text-lg leading-relaxed">{page.transparency.intro}</p>
            </div>
            <div className="lg:col-span-7 bg-white">
              <dl>
                {transparencyRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[minmax(150px,0.8fr)_1.7fr] border-b-4 last:border-b-0 border-black">
                    <dt className="font-extrabold uppercase text-xs tracking-widest p-5 sm:p-6 bg-mondrian-white sm:border-r-4 border-black">
                      {row.label}
                    </dt>
                    <dd className="font-extrabold p-5 sm:p-6 break-words">{row.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,0.8fr)_1.7fr] border-b-4 border-black">
                  <dt className="font-extrabold uppercase text-xs tracking-widest p-5 sm:p-6 bg-mondrian-white sm:border-r-4 border-black">
                    {page.transparency.contact}
                  </dt>
                  <dd className="font-extrabold p-5 sm:p-6">
                    <Link className="underline underline-offset-4 hover:text-mondrian-blue break-all" href={`mailto:${organization.email}`}>
                      {organization.email}
                    </Link>
                  </dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,0.8fr)_1.7fr]">
                  <dt className="font-extrabold uppercase text-xs tracking-widest p-5 sm:p-6 bg-mondrian-white sm:border-r-4 border-black">
                    {page.transparency.website}
                  </dt>
                  <dd className="font-extrabold p-5 sm:p-6">
                    <Link className="underline underline-offset-4 hover:text-mondrian-blue" href={organization.website}>
                      espaicrea.cat
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 bg-mondrian-red text-white">
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
            <CalendarDays aria-hidden="true" className="w-12 h-12 mb-8" />
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">{page.cta.title}</h2>
            <p className="text-lg font-bold leading-relaxed max-w-2xl">{page.cta.description}</p>
          </div>
          <div className="lg:col-span-4 bg-white text-black p-8 md:p-12 flex flex-col justify-center gap-4">
            <Link
              className="min-h-14 px-6 bg-black text-white font-extrabold border-4 border-black hover:bg-mondrian-blue transition-colors flex items-center justify-center gap-2 text-center"
              href={eventUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {page.cta.primary}
              <ArrowUpRight aria-hidden="true" className="w-5 h-5 shrink-0" />
            </Link>
            <Link
              className="min-h-14 px-6 bg-mondrian-yellow text-black font-extrabold border-4 border-black hover:bg-white transition-colors flex items-center justify-center text-center"
              href={`mailto:${organization.email}`}
            >
              {page.cta.secondary}
            </Link>
            <p className="flex items-start gap-2 text-sm font-bold mt-2">
              <MapPin aria-hidden="true" className="w-5 h-5 shrink-0" />
              {organization.location}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { localeLabels } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, availableLocales, copy } = useLanguage();

  return (
    <div className={cn('flex h-14 bg-mondrian-yellow border-4 border-black', className)} aria-label={copy.nav.languageLabel}>
      {availableLocales.map((language, index) => (
        <button
          key={language}
          type="button"
          aria-pressed={locale === language}
          className={cn(
            'min-w-12 flex-1 flex items-center justify-center text-xs font-extrabold uppercase transition-colors cursor-pointer',
            locale === language
              ? 'bg-white text-black'
              : 'bg-mondrian-yellow text-black hover:bg-black hover:text-white',
            index < availableLocales.length - 1 && 'border-r-4 border-black'
          )}
          onClick={() => setLocale(language)}
        >
          {localeLabels[language]}
        </button>
      ))}
    </div>
  );
}

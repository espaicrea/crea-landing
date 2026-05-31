'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getMessages, LANGUAGE_COOKIE, locales, type Locale } from '@/lib/i18n';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: ReturnType<typeof getMessages>;
  availableLocales: readonly Locale[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function persistLocale(locale: Locale) {
  document.cookie = `${LANGUAGE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function syncDocument(locale: Locale) {
  const copy = getMessages(locale);

  document.documentElement.lang = locale;
  document.title = copy.metadata.title;

  const descriptionElement = document.querySelector('meta[name="description"]');
  if (descriptionElement) {
    descriptionElement.setAttribute('content', copy.metadata.description);
  }
}

export default function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const copy = getMessages(locale);

  useEffect(() => {
    persistLocale(locale);
    syncDocument(locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, copy, availableLocales: locales }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}

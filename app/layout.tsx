import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Plus_Jakarta_Sans } from 'next/font/google';
import LanguageProvider from '@/components/LanguageProvider';
import { getMessages, LANGUAGE_COOKIE, resolveLocale } from '@/lib/i18n';
import './globals.css'; // Global styles

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const copy = getMessages(locale);

  return {
    metadataBase: new URL('https://espaicrea.cat'),
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: '/',
      type: 'website',
      siteName: '[crea]',
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const initialLocale = resolveLocale(cookieStore.get(LANGUAGE_COOKIE)?.value);

  return (
    <html lang={initialLocale} className={plusJakartaSans.variable}>
      <body suppressHydrationWarning>
        <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}

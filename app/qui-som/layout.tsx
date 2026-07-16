import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getMessages, LANGUAGE_COOKIE, resolveLocale } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const metadata = getMessages(locale).aboutPage.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: '/qui-som',
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: '/qui-som',
      type: 'website',
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

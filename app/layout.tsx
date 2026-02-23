import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '[crea] - Comunitat Creativa',
  description: 'Un espai obert per a estudiants, creatius i emprenedors on col·laborar en projectes personals i créixer junts.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ca" className={plusJakartaSans.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

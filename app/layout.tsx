import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Schrift',
  description: 'Generated by create next app',
};

const satoshi = localFont({
  src: '.././public/Satoshi-Medium.woff2',
});

const instrumentSans = Instrument_Sans({
  variable: '--instrument-sans',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={` ${satoshi.className}, ${instrumentSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

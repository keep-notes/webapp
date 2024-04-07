import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';
import Providers from '@/providers/Providers';

const font = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keep Notes',
};

export default function RootLayout(props: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}

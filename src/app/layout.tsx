import type { Metadata } from 'next';
import './globals.scss';
import { SITE_DESCRIPTION, SITE_NAME } from '@/consts/seo.consts';
import { Open_Sans } from 'next/font/google';
import React from 'react';
import { Providers } from '@/providers/providers';

const font = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={`${font.className} text-textPrimary`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

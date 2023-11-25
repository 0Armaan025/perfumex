// layout.js

import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'PerfumeX',
  description: 'You want perfumes? Come here!',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags as needed */}
      </Head>
      <html lang="en">
        <head>
          {/* Additional head elements can be added here */}
        </head>
        <body>
          {children}
        </body>
      </html>
    </>
  );
}

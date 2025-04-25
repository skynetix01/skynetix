// app/layout.jsx
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from './nav';
import Footer from './footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Skynetix - Innovative Digital Solutions',
  description: 'Skynetix offers web development, design, and digital services to empower your business.',
  openGraph: {
    title: 'Skynetix - Innovative Digital Solutions',
    description: 'Skynetix provides expert web development, design, and digital services in Patna, Bihar.',
    url: 'https://skynetix.in',
    siteName: 'Skynetix',
    images: [
      {
        url: 'https://skynetix.in/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Skynetix Digital Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skynetix - Innovative Digital Solutions',
    description: 'Skynetix provides expert web development, design, and digital services in Patna, Bihar.',
    images: ['https://skynetix.in/assets/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        {/* Optional favicon variants */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
// This file customizes the default metadata for the app, including the favicon.
import type { Metadata } from 'next';

const siteConfig = {
  title: "Wesele Oli i Marka",
  description: 'Aleksandra i Marek w radością zapraszają na ślub i wspólne świętowanie 11 lipca 2026',
  url: 'https://amwesele.pl',
  ogImage: 'https://abbifred.com/images/sunset-embrace.jpg',
};

/**
 * @const {Metadata} metadata
 * @description The global metadata configuration for the Next.js application.
 * This object defines the default title, description, keywords, author information,
 * favicon icons, and Open Graph/Twitter card settings for SEO and social sharing.
 *
 * It uses a template for page titles (`%s | Abbigayle & Frederick's Wedding`) and
 * sets a `metadataBase` to ensure all relative URLs are resolved correctly.
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Abbigayle and Frederick's wedding",
    "wedding website",
    "Plummer House wedding",
    "Rochester MN wedding",
    "October 2025 wedding",
    "Abbigayle and Frederick registry",
    "wedding details",
    "wedding ceremony",
    "wedding reception",
    "nurse wedding",
    "Abbigayle nurse wedding",
    "Doctor of Nursing Practice wedding",
    "weddings in Rochester MN",
    "Rochester wedding venues",
    "Plummer House Rochester MN",
    "Rochester MN wedding photographer",
    "things to do in Rochester MN for wedding guests",
  ],
  authors: [{ name: 'Frederick de Ruiter', url: 'https://github.com/fderuiter' }],
  creator: 'Frederick de Ruiter',
  publisher: 'Vercel',
  icons: {
    icon: '/assets/favicon.png',
    shortcut: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `A photo of Abbigayle and Frederick embracing at sunset.`,
      },
    ],
    locale: 'en_US',
    siteName: siteConfig.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@fderuiter',
  },
  metadataBase: new URL(siteConfig.url),
};

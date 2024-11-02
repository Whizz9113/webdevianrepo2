import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export function generateMetadata({ title, description, path }: SEOProps): Metadata {
  const baseUrl = 'https://webdevian.ch';

  return {
    title: `${title} | WebDevian GmbH`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: `${title} | WebDevian GmbH`,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'WebDevian GmbH',
      locale: 'de_CH',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/img/og-image.jpg`, // Erstelle dieses Bild
          width: 1200,
          height: 630,
          alt: 'WebDevian GmbH',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | WebDevian GmbH`,
      description,
      images: [`${baseUrl}/img/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
} 
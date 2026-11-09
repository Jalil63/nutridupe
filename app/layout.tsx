export const metadata: Metadata = {
  metadataBase: new URL('https://www.nutridupe.com'),
  title: {
    default: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    template: '%s | NutriDupe',
  },
  description:
    'Discover high-quality, scientifically comparable supplement alternatives (dupes) to premium brands. Compare formula match percentages, price per serving, and bio-available ingredient profiles.',
  keywords: [
    'supplement dupes',
    'Athletic Greens alternative',
    'Thorne creatine dupe',
    'supplement comparison engine',
    'chelated magnesium comparison',
    'bioavailability comparison',
  ],
  authors: [{ name: 'NutriDupe Editorial Team' }],
  creator: 'NutriDupe Platform',
  publisher: 'NutriDupe Platform',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nutridupe.com',
    siteName: 'NutriDupe',
    title: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    description:
      'Independent supplement comparison platform providing active ingredient analysis, match scoring, and value breakdowns.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NutriDupe Supplement Comparison Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutriDupe — Compare & Find Affordable Supplement Alternatives',
    description:
      'Independent supplement comparison platform providing active ingredient analysis, match scoring, and value breakdowns.',
    images: ['/og-image.jpg'],
  },
};

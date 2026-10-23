import React from 'react';

interface ProductSchemaProps {
  benchmarkName: string;
  benchmarkBrand: string;
  benchmarkPrice: number;
  dupeName: string;
  dupeBrand: string;
  dupePrice: number;
  matchPercentage: number;
  category: string;
}

export default function ProductSchema({
  benchmarkName,
  benchmarkBrand,
  benchmarkPrice,
  dupeName,
  dupeBrand,
  dupePrice,
  matchPercentage,
  category,
}: ProductSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: dupeName,
    brand: {
      '@type': 'Brand',
      name: dupeBrand,
    },
    category: category,
    description: `${dupeName} by ${dupeBrand} is a ${matchPercentage}% formulation match to ${benchmarkName} by ${benchmarkBrand}, offered at a lower price point.`,
    offers: {
      '@type': 'Offer',
      price: dupePrice,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    isSimilarTo: {
      '@type': 'Product',
      name: benchmarkName,
      brand: {
        '@type': 'Brand',
        name: benchmarkBrand,
      },
      offers: {
        '@type': 'Offer',
        price: benchmarkPrice,
        priceCurrency: 'USD',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

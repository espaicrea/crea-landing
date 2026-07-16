import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://espaicrea.cat',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://espaicrea.cat/qui-som',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}

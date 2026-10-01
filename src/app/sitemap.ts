import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://konten.ai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://konten.ai/kebijakan-privasi',
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://konten.ai/syarat-ketentuan',
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}

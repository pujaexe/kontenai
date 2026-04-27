/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },

  // Security & caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          // Cache HTML pages for 1 hour, revalidate in background
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/(.*)\\.(js|css|woff2|png|jpg|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig

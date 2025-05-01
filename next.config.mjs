import { withSentryConfig } from '@sentry/nextjs'
import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
      bufferutil: false,
      "utf-8-validate": false,
    };
    return config;
  },
  poweredByHeader: false,
  images: {
    domains: ['ipfs.io', 'gateway.ipfscdn.io'],
  },
  // Enable compression
  compress: true,
  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

// Configure PWA
const withPWAConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

// Configure Sentry
const sentryWebpackPluginOptions = {
  silent: true
}

// Export with all configurations
export default withSentryConfig(
  withPWAConfig(nextConfig),
  sentryWebpackPluginOptions
) 
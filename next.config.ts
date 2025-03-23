import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    // Enable image optimization caching
    minimumCacheTTL: 60,
    // Disable image optimization during development
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable compression
  compress: true,
  // Enable static page generation caching
  generateEtags: true,
  // Optimize bundle splitting
  webpack: (config, { dev, isServer }) => {
    // Production optimizations only
    if (!dev && !isServer) {
      // Enable aggressive code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
            priority: 20,
          },
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          // Add specific chunk for terms page
          terms: {
            test: /[\\/]pages[\\/]terms/,
            name: 'terms',
            chunks: 'all',
            enforce: true,
          },
        },
      };

      // Add terser optimization
      config.optimization.minimize = true;
    }

    // Add SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@tabler/icons-react', 'framer-motion', 'gsap', 'lucide-react'],
  },
  // Configure headers for better caching
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        },
        {
          key: 'Link',
          value: '<https://fonts.googleapis.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=preconnect; crossorigin'
        }
      ]
    },
    {
      // Cache static assets
      source: '/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    },
    {
      // Cache images
      source: '/_next/image/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    },
    {
      // Cache fonts
      source: '/fonts/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    },
    {
      // Specific caching for terms page
      source: '/terms-and-conditions',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, stale-while-revalidate=86400'
        }
      ]
    }
  ],
  // Enable page speed optimizations
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;

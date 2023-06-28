import languageMap from './src/lib/i18n/languageMap.json' assert { type: 'json' };
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.storyblok.com',
      },
    ],
  },
  i18n: {
    locales: Object.keys(languageMap),
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);

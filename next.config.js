/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  basePath: '',
  assetPrefix: 'https://webdevian.ch', // Ihre vollständige Domain
  poweredByHeader: false,
  transpilePackages: ['framer-motion']
}

module.exports = nextConfig 

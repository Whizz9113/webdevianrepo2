/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  basePath: '',
  assetPrefix: process.env.COOLIFY_URL || 'https://webdevian.ch',
  poweredByHeader: false,
  transpilePackages: ['framer-motion']
}

module.exports = nextConfig 

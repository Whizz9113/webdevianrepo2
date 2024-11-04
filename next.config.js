/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  basePath: '',
  assetPrefix: process.env.COOLIFY_URL || 'https://webdevian.ch',
  poweredByHeader: false,
  transpilePackages: ['framer-motion']
}

module.exports = nextConfig 

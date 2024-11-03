/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  poweredByHeader: false,
  transpilePackages: ['framer-motion']
}

module.exports = nextConfig 

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'erosstore.github.io',
      },
    ],
  },
  basePath: '/eros-store',
  assetPrefix: '/eros-store/',
}
export default nextConfig

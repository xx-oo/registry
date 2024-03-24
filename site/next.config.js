/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'xikuqi Technologies',
    description: 'The official store for xikuqi supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.xikuqi.com/',
    contactUrl: 'https://xikuqi.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

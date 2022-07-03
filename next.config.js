/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'api.lorem.space', 'res.cloudinary.com'],
  }
}

module.exports = nextConfig

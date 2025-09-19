/** @type {import('next').NextConfig} */
const nextConfig = {
  // (keep any other config you already have)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

module.exports = nextConfig;

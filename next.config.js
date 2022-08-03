/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost"],
  },
  pwa: {
    dest: "public",
    register: true
  },
  rewrites: async () => [
    {
      source: "/public/privacy-policy.html",
      destination: "/pages/api/privacy-policy.js",
    },
  ],
};

module.exports = withPWA(nextConfig);

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
};

module.exports = withPWA(nextConfig);

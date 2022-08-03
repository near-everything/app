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
    disable: process.env.NODE_ENV !== "production",
    register: false,
  },
};

module.exports = withPWA(nextConfig);

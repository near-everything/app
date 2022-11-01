/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["everything-1.s3.us-east-1.amazonaws.com", "localhost"],
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV !== "production",
    register: false,
  },
  rewrites: async () => [
    {
      source: "/public/privacy-policy.html",
      destination: "/pages/api/privacy-policy.js",
    },
  ],
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));

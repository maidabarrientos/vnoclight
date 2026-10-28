/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Selling, leasing, partnering and verticals live on Domain Directory.
  async redirects() {
    return [
      { source: "/sell", destination: "https://www.domaindirectory.com/sell/", permanent: false },
      { source: "/lease", destination: "https://www.domaindirectory.com/", permanent: false },
      { source: "/partner", destination: "https://www.domaindirectory.com/partner/", permanent: false },
      { source: "/verticals", destination: "https://www.domaindirectory.com/verticals/", permanent: false },
    ];
  },
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

const withNextIntl = require("next-intl/plugin")();

const imageHostFromUrl = (url) => {
  if (!url) return [];
  const urlObj = new URL(url);
  return [
    {
      protocol: urlObj.protocol.replace(":", ""),
      hostname: urlObj.hostname,
      port: urlObj.port,
    },
  ];
};

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "192.168.1.46:1337",
      },
      {
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "cms",
        port: "1337",
      },
      ...imageHostFromUrl(process.env.NEXT_PUBLIC_CDN),
      ...imageHostFromUrl(process.env.NEXT_PUBLIC_IMAGE_PROXY),
      ...imageHostFromUrl("https://icons.storyline.cloud"),
    ],
  },
};

module.exports = withNextIntl(nextConfig);

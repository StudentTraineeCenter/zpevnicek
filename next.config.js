const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  extendDefaultRuntimeCaching: true,
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  swcMinify: true,
  extendDefaultRuntimeCaching: true,
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/~offline",
  },
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // Your Next.js config
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
});

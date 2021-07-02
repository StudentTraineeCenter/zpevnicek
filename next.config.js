const withPWA = require("next-pwa");

module.exports = withPWA({
  async headers() {
    return [
      {
        source: "/song/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
    ];
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
});

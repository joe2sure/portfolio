const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          os: require.resolve("os-browserify/browser"),
          crypto: require.resolve("crypto-browserify"),
        },
      },
    },
  },
};

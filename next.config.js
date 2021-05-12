// next.config.js
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins(
  [[withImages, { fileExtensions: ["jpg", "jpeg", "png", "gif"] }]],
  {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            },
          },
          "url-loader",
        ],
      });

      return config;
    },
    future: {
      webpack5: true,
    },
  }
);

// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const TerserPlugin = require('terser-webpack-plugin')

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            // workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1845093
            ascii_only: true,
            max_line_len: 80,
          },
        },
      }),
    ],
  },
};

module.exports = () => {
  return config;
};

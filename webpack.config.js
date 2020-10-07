const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackDevConfig = require("./webpack.development");
const pugRules = require("./webpackrules/pug.preset");
const javascriptPreset = require("./webpackrules/javascript.preset");
const filesPreset = require("./webpackrules/files.preset");
const stylesPreset = require("./webpackrules/styles.preset");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ mode = "production" }) => {
  return merge(
    {
      entry: {
        app: path.resolve(__dirname, "src", "app.js"),
      },
      output: {
        filename: "[hash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
      },
      mode,
      module: {
        rules: [
          { ...pugRules },
          { ...javascriptPreset },
          { ...filesPreset },
          { ...stylesPreset },
        ],
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
    },
    mode === "development" && webpackDevConfig(),
    {
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.pug"),
        }),
        new MiniCssExtractPlugin({
          filename: "styles/bundle.[hash].css",
        }),
      ],
    }
  );
};

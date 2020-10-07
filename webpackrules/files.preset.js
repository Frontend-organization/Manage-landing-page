module.exports = {
  test: /\.(svg|png|jpg|gif|jpeg|ttf|woff)$/,
  exclude: /node_modules/,
  use: {
    loader: "file-loader",
    options: {
      outputPath: "assets",
      publicPath: "assets",
      esModule: false,
    },
  },
};

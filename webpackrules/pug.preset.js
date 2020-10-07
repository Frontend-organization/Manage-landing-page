module.exports = {
  test: /\.pug$/,
  exclude: /node_modules/,
  use: {
    loader: "pug-loader",
    options: {
      inject: true,
    },
  },
};

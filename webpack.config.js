const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    cat: "./src/Cat.jsx",
    luna: "./src/Luna.jsx",
  },
  devServer: {
    contentBase: "./dist",
    port: 9000,
  },
  output: {
    filename: "[name]/[name].bundle.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};

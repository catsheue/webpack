const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    cat: "./src/Cat.jsx",
    luna: "./src/Luna.jsx",
    index: "./src/index.js",
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
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
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
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      publicPath: "http://localhost:8080/",
    }),
  ],
};

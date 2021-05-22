const path = require("path");
const webpack = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, "src", "index.js"),
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true",
    ],
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    // [fullhash]
    publicPath: "/",
    // Con publicPath lo que hacemos es que me retorne todo los bundles de mi path principal
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   historyApiFallback: true,
  //   open: true,
  //   port: 9000,
  //   hot: true,
  // },
  resolve: {
    extensions: [".js", ".jsx"],
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebPackPlugin({
    //   template: "./public/index.html",
    //   filename: "./index.html",
    // }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};

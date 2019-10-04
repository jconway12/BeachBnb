const path = require('path');
// import css from "file.css";

module.exports = {
  context: __dirname,
  entry: "./frontend/bnb.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // test: /\.css$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
              "@babel/env",
              "@babel/react"
            ] //              "style-loader", "css-loader"
          }
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
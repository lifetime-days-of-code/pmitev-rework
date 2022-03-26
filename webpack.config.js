const path = require("path");

module.exports = {
  mode: "development",
  entry: "./assets/src/js/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, "assets/public"),
    filename: "main.js",
  },
};

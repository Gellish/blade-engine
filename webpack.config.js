const path = require("path");
// import path from 'path';
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.bjs$/,
        use: [
          {
            loader: "@tarik02/bladejs-loader",
          },
        ],
      },
    ],
  },
};

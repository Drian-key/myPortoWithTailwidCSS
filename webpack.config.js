const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "main.js",
  },
  watch: true,
  devtool: false,
  module: {
    rules: [
      {
        //   loader css
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

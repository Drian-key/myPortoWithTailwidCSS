const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "main.js",
  },
  watch: true,
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

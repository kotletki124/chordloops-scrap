const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "addChordLabelsToggle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            preamble: `// ==UserScript==
// @name         Chord Labels Toggle
// @namespace    kotletki124
// @version      0.1
// @description  Adds letter notation alongside the numeral one and some basic UI to handle it
// @author       kotletki124
// @match        https://chordloops.net/experiment-session.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chordloops.net
// @grant        none
// ==/UserScript==
`,
            comments: false,
          },
        },
      }),
    ],
  },
};

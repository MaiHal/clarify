module.exports = {
  entry: {
    app: "./src/index.js"
  },

  output: {
    path: __dirname + "/",
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js?/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
};

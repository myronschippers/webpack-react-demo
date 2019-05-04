const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const PORT = 3000;

module.exports = {
    entry: './src/App.js',
    output: {
        path: `${__dirname}/build`,
        filename: 'app-bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      port: PORT,
      hot: true,
    },

    // Loaders for JS ES5 & ES6, this will also do JSX & React conversions as needed
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: `${__dirname}/public/index.html`,
        filename: `index.html`,
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
};

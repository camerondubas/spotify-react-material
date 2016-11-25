'use strict';

// Modules
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const BUILD = Boolean((process.argv.indexOf('--production') > -1));

module.exports = buildConfig('./index.js', './public', '');

/**
 * Builds a webpack config object
 * @param {string} entry Relative path to the javascript entry file
 * @param {string} outputPath The directory to output the build result to
 * @param {string} publicPath The public url path of the app
 * @param {object} [proxy] Proxy option for webpack dev server
 * @return {object} Built webpack config object
 */
function buildConfig(entry, outputPath, publicPath, proxy) {
  let config = {
    entry: {app: entry},
    output: {
      path: outputPath,
      publicPath,
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    },
    devtool: BUILD ? 'source-map' : 'eval',
    module: {
      // Loaders: http://webpack.github.io/docs/configuration.html#module-loaders
      loaders: [
        {
          test : /\.js?/,
          loader : 'babel',
          exclude: /(node_modules)/
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }
      ]
    },

    // Plugins: http://webpack.github.io/docs/configuration.html#plugins
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin("[name].css")
    ],

    // Dev server configuration
    devServer: {
      contentBase: outputPath,
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false
      },
      proxy
    }
  };

  // Add build specific plugins
  if (BUILD) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  return config;
}

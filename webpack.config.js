const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /.js/,
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      { 
        test: /.html/, 
        loader: 'raw-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ExtractTextPlugin({
      filename: 'styles.css',  
      allChunks: true,
      publicPath: 'new.css'
    })
  ],
  mode: 'development'
};

const path = require("path");
const webpack = require ('webpack');
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');
const helpers = require ('./helpers');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

module.exports = {
	entry: {
		'app': [
		  helpers.root ('src/index.js')
		]
	},
	output: {
		path: helpers.root ('dist'),
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.json', '.css', '.scss', '.html'],
		alias: {
		  'app': 'src'
		}
	},
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                    // options: { presets: ["es2015"] }
                }
            },
			{
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        name:'[name][hash].[ext]', 
                    }
                }
            },
            {
              test: /\.scss/,
              use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader" // translates CSS into CommonJS
                },
                {
                  loader: "sass-loader" // compiles Sass to CSS
                }
              ]
              // loader: 'style-loader!css-loader!sass-loader'
          }
        ]
    },
    plugins:[
		new webpack.optimize.ModuleConcatenationPlugin (),
		new webpack.HotModuleReplacementPlugin (),
		new webpack.NoEmitOnErrorsPlugin (),
		
		new webpack.DefinePlugin ({
		  'process.env': {
			NODE_ENV: JSON.stringify (NODE_ENV)
		  }
		}),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
			inject: 'body'
        }),
		new ExtractTextPlugin({
		  filename: 'css/[name].[hash].css',
		  disable: !isProd
		}),
		
		new CopyWebpackPlugin ([{
			from: helpers.root ('public'),
			to: helpers.root ('dist/public')
		}])
    ]
};
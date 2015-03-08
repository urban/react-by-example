import webpack  from 'webpack';
import { join } from 'path';
import { reactByExampleOptions as options } from './package.json';

export default {

  devtool: 'eval',

  entry: hotSwapEntries(options.entries),

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: join(__dirname, options.contentBase, options.outputDir),
    publicPath: `/${options.outputDir}/`
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?experimental&loose=all&optional=runtime']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': join(__dirname, 'node_modules/react')
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin(options.commonChunkName + '.js')
  ]
};

function hotSwapEntries(entries) {
  let newEntries = {};
  for (let key in entries) {
    newEntries[key] = [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      entries[key]
    ];
  }

  return newEntries;
}


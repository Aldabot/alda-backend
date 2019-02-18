const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'dev-gcloud.json' },
      { from: 'prod-gcloud.json' },
      { from: '.env.dev' },
      { from: '.env.prod' }
    ])
  ]
};

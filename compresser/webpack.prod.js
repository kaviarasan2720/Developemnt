const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
//  devtool: 'source-map',
output: {
  filename: '[name].[contenthash].js',
  publicPath: '/mfp/auth/',
},
plugins: [
  new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      exposes: {
          './Login': './src/index.js'
      },
      // shared: ['react','react-dom']
  })
]
});

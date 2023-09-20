const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const hostip = Object.values(require("os").networkInterfaces())
        .flat()
        .filter((item) => !item.internal && item.family === "IPv4")
        .find(Boolean).address;

const HOST_IP = process.env.HOST_IP?process.env.HOST_IP:hostip; 

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist',
  // },
  output: {
    publicPath: 'http://' + HOST_IP + ':9050/',
},
devServer: {
    port: 9050,
    host: '0.0.0.0',
    historyApiFallback:true
},
plugins: [
  new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      exposes: {
          './Login': './src/index.js'
      },
      // shared: packageJson.dependencies,
  })
]
});
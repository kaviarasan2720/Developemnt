// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {
//     app: './src/index.js',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './global/index.html',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
// };
module.exports = {
  module: {
      rules: [
          {
              test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)/i,
              use: [
                  {loader: 'file-loader'},
              ]
          },
          {
              test: /\.scss|\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-react', '@babel/preset-env'],
                      plugins: ['@babel/plugin-transform-runtime'],
                  }
              }
          }
      ]
  },
  
  plugins: [
      new HtmlWebpackPlugin({
          template: './global/index.html'
      })
  ],
}
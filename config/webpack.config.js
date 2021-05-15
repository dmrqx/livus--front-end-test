const { join, resolve } = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const esLintConfig = require('./eslint.config')

const rootDir = resolve(__dirname, '..')
const srcDir = resolve(rootDir, 'src')

module.exports = {
  mode: 'development',
  entry: join(srcDir, 'index.js'),
  output: {
    filename: 'main.js',
    path: join(rootDir, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({ path: join(rootDir, '.env'), safe: true }),
    new ESLintPlugin({ overrideConfig: esLintConfig, fix: true }),
    new ExtractCssChunks(),
    new HtmlWebpackPlugin({ template: join(srcDir, 'index.html') })
  ],
  devServer: {
    contentBase: [join(rootDir, 'static')],
    port: 1234,
    proxy: {
      '/api': {
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        target: 'https://livus-frontend-test.s3.amazonaws.com/'
      }
    },
    publicPath: '/'
  },
  devtool: 'cheap-source-map'
}

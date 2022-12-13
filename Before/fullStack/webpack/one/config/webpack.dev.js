const os = require('os')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const threads = os.cpus().length

module.exports = {
  // 入口
  entry: './src/main.js',
  // 输出
  output: {
    path: undefined,
    filename: 'static/js/main.js'
  },
  // 加载器
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/i,
            use: [
              "style-loader", // 将css样式通过style标签加载到页面中
              "css-loader" // 将css资源编译你成commonjs的模块到js中
            ],
          },
          {
            test: /\.less$/i,
            use: [
              'style-loader',
              'css-loader',
              'less-loader',
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.styl$/i,
            use: [
              'style-loader',
              'css-loader',
              'stylus-loader',
            ],
          },
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024
              }
            },
            generator: {
              filename: 'static/images/[hash:10][ext][query]'
            }
          },
          {
            test: /\.js$/,
            // exclude: /node_modules/,
            include: path.resolve(__dirname, "../src"), // 只包含
            use: [
              {
                loader: 'thread-loader', // 开启多进程
                options: {
                  workes: threads // 进程数量
                }
              },
              {
                loader: 'babel-loader',
                options: {
                  // presets: ['@babel/preset-env']
                  cacheDirectory: true,
                  cacheCompression: false,
                  plugins: ['@babel/plugin-transform-runtime'] // 减小代码体积
                }
              }
            ] 
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, '../src'),
      exclude: "node_modules",
      threads
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true
  },
  // 模式
  mode: 'development',
  devtool: "cheap-module-source-map"
}

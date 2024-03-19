// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// webpack的所有配置信息都应该写在module.exports中
module.exports = {

  mode: 'development',

  // 指定入口文件
  entry: './src/index.ts',

  // 指定打包文件所在目录
  output: {
    // 打包之后文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包之后文件的名字
    filename: "bundle.js",
    
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
  },

  // 配置webopack打包时需要使用的文件
  module: {
    // 指定加载的规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: 'ts-loader',
        // 指定要排除的文件
        exclude: /node_modules/
      },
      // 设置less文件的处理
      {
        test: /\.less$/,
        use:[
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
                postcssOptions:{
                  plugins:[
                    [
                      "postcss-preset-env",
                      {
                        browsers: 'last 2 versions'
                      }
                    ]
                  ]
                }
            }
          },
          "less-loader"
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: "这是一个自定义title"
      template: "./src/index.html"
    }),
  ],

  // 用来设置引用模块(ts,js文件可以作为模块引用)
  resolve: {
    extensions: ['.ts', '.js']
  }

};
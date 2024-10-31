// 引入 Node.js 的内置模块 path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports用于导出 Webpack 的配置对象。
// webpack中的所有配置信息都写在 module.exports 里。
// 这个配置对象包含了诸如入口文件、输出设置、加载器规则、插件等信息，用于告诉 Webpack 如何构建项目。
module.exports = {
  mode:'development',
  // 指定入口文件
  entry: './src/main.ts',

  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件
    filename: 'bundle.js'
  },

  // 指定 webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/, // 表示匹配所有的后缀名为ts的文件
        // 要使用的loader
        use: 'ts-loader',
        // 要排除的文件夹(只要路径里有node_modules,就不编译)
        exclude: /node_modules/,
      }
    ]
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins:[
    new HtmlWebpackPlugin(
        {template:'./index.html'}
    )
  ]
}

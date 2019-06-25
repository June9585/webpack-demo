const path = require('path');

module.exports = {
  // webpack 的选项配置

  // 打包入口js文件
  entry: './src/index.js',

  // 出口配置
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // 模式，环境的配置，指定是开发环境还是生产环境
  // 开发 - development
  // 生产 - production
  mode: 'development',

  module: {
    // loader 规则配置
    rules: []
  },

  // 插件
  plugins: []
};

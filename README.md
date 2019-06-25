## 目录结构介绍

- src         需要被webpack打包的东西，都会放在这个文件夹下面（源代码文件夹）
  - index.js  当做项目的入口js文件


## 运行 webpack

1. 安装 webpack

  npm install --save-dev webpack webpack-cli

2. 运行

  webpack 命令即可

  注意： 我们的 webpack 不是全局的安装

  1. ./node_modules/.bin/webpack
  2. npx webpack  注意 npx 是在 npm 5.x.x 以上才支持的。
  3. 写 npm 脚本 （推荐）

## webpack 的配置文件

1. 默认是 项目目录下的 webpack.config.js
2. 如果运行 webpack ，但是没有 webpack.config.js 这个文件，那么 webpack 会已默认配置来运行。
  entry         src/index.js
  output        dist/main.js
  mode          production
3. 还可以使用 webpack --config <配置文件> 来指定配置文件。

## 模块化规范有哪些，对应的实现有哪些

1. commonjs       -     nodejs      同步加载
2. AMD            -     requirejs
3. CMD            -     seajs
4. ESM            -     es6

  ESM

  1. 引入的方式     import xxx from 'yyy'
  2. 暴露的方式     export default {}

                  export const msg = '张三'
                  import { msg } from 'yyy'

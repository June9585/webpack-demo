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

## webpack 中 loader 的作用

> 模块的概念是不是只存在于 js | json 这种文件中。如果需要将 图片、样式、字体等非模块的文件类型让 webpack 支持上。就需要 loader 来做处理

loader - 转换器

#### css 支持

1. 安装 css-loader    style-loader
  npm install --save-dev css-loader style-loader
2. 在 webpack.config.js 中进行配置。
3. 重新打包并看效果

#### scss | sass 支持

1. 安装 css-loader  style-loader  sass-loader  node-sass
  npm install --save-dev css-loader style-loader sass-loader node-sass
2. 在 webpack.config.js 中进行配置。
3. 重新打包并看效果

#### less 支持

1. 安装 css-loader  style-loader  less-loader  less
  npm install --save-dev css-loader style-loader less-loader less
2. 在 webpack.config.js 中进行配置。
3. 重新打包并看效果

#### 图片的支持

1. 安装 url-loader
  npm install --save-dev url-loader
2. 同上。。。。

base64的图片有什么优势？

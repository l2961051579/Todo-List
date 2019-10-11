# 在参照本例学习时请仔细阅读本文档

## 简介

这并不是一个标准的vue工程，只是为了学习和演示如何从零建立一个webpack工程并使用vue框架，所以其目录结构和入口文件写法等并不正规，不要以为这就是一个标准工程，同时，为了开发方便，本demo使用了开发模式，如果要大规模生产和上线请使用生产模式

## 相关链接

vue官方学习文档：<https://cn.vuejs.org/v2/guide/>
webpack官方学习文档：<https://webpack.js.org/guides/>
慕课地址：<https://www.imooc.com/learn/935>

## 前置准备

1.安装node.js开发环境
2.拥有编辑器，如vscode，webstorm或者HBuilderX
3.这个webpack使用的是4.41.0版本，注意版本差异
4.学会根据终端构建时所报的错误来更正代码

## 起步

1.打开编辑器并使用终端安装必要的东西
webpack，webpack-cli，vue，vue-loader，vue-loader-template-compiler，html-webpack-plugin,style-loader,css-loader,file-loader,url-loader,stylus,stylus-loader,postcss-loader,webpack-dev-server，clean-webpack-plugin等，可能不全，根据提示自己找，官方文档中有插件和加载器大全
npm install XXXXXXXXXX安装命令
2.初始化工程，npm init -y
3.根据慕课的思路走就行了，有问题代码参考本例，本例有注释的。
注：本例的webpack配置没有做那么复杂，这是可以正常并方便运行的低配置。

## demo展示

把本例拖到编辑器里，看一下如果少node_moudles就执行npm install，然后执行npm run build,接着npm start就行，有的话就直接后两条就行，终止运行就执行Ctrl+c,注意一定要有node环境

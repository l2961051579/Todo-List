const path = require('path'); //用于操作文件路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //清理dist文件夹，仅保留运行所必须的文件，由于本例的不完整，引入会清空dist导致看不到输出，可以用一次然后注释掉。

module.exports={
    entry:path.join(__dirname,'src/index.js'), //标明入口文件，__dirname(两个端下线)拼接路径
    output:{  //标明出口
        filename:'bundle.js',  //构建后的文件命名为这个存放在dist文件夹下
        path:path.resolve(__dirname,'dist'),
    },
    mode:'development',   //开发模式
    devtool: 'inline-source-map',  //使用这个可以将错误追踪到源代码而不是编译后的代码，编译后利于修改
    devServer: {    //告诉webpack-dev-server在dist文件夹下启动服务localhost：8080
        contentBase: './dist',
    },
    //使用的插件，必要的话
    plugins:[
        //new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    //由于webpack不识别js以外的语言，所以使用各类加载器来将其打包成js语言，module规定了什么类型的语言用什么加载器解析
    module:{
        rules:[
            {
                test:/\.vue$/,  //使用vue-loader来解析vue文件
                use:'vue-loader',
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif|svg)$/,
                use:[
                    'file-loader'
                ]
            },
            {  //加装了stylus，stylus-loader等其他加载器之后可以使用stylus来写CSS样式，不拘泥与固定语法，更加方便，但是在style标签中要加lang:'stylus'
                test: /\.styl/,  
                use: [
                  'vue-style-loader',
                  'css-loader',
                  { 
                    loader: 'postcss-loader', 
                    options: { sourceMap: true } 
                  },
                  'stylus-loader'
                ]  
            } 
            
        ]
    }
}
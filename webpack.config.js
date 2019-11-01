const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
 entry:"./src/main.js",
 output:{
     path:path.join(__dirname,'./dist'),
     filename:'js/bundle-[name]-[hash:5].js',
 },
devServer:{
    contentBase:path.join( __dirname,'./src'),
},


resolve:{
    alias:{
//   'vue$':'vue/dist/vue.js', //解决Vue单文件组件不能使用template的问题
        '@':path.resolve('src'),
        '@@':path.resolve('src/components'),
        '~':path.resolve('src/static/subassembly'),
        'img':path.resolve('src/action/img'),
        'APi':path.resolve('src/Api'),
    },
    extensions:['.js', '.jsx']
},

 // 加载器
 module:{
    rules:[
        {
          //正则匹配jsx文件
            test:/\.jsx?$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-react'],
                    plugins: [
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": "css" // `style: true` 会加载 less 文件
                        }], "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            include:path.resolve(__dirname,'./src')
        },

        // css,sass
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        }
            ]
        },
    plugins:[
            // 删除dist文件夹
            new CleanWebpackPlugin(),

            // 创建dist文件
            new HtmlWebpackPlugin({
                template:'./src/template.html',
                // filename:'index.html'
            })
        ]
   };


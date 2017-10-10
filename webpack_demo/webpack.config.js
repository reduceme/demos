//webpack配置
//__dirname为nodejs中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    //入口文件
    entry: __dirname + "/app/main.js",
    output: {
        //打包后的文件存放的地方
        path: __dirname + "/public",
        //打包后输出文件的文件名
        filename: "bundle.js"
    },
    devtool: "eval-source-map",
    devServer: {
        //本地服务器加载的页面所在的目录
        contentBase: "./public",
        //不跳转
        historyApiFallback: true,
        //实时刷新
        inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};
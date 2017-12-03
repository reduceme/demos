## webpack安装 
1. `npm init`——初始化npm
2. `npm install webpack --save-dev`——安装webpack

## webpack打包css
1. `npm install style-loader css-loader`，安装css的loader
2. 调用：`require("style-loader!css-loader!./style.css");`，该方法比较麻烦，需要每次在引用css的时候写上loader。其实可以在调用webpack打包的时候把该配置写入webpack的参数（`module-bundle`）里面，从而避免这种繁琐的写法。

## webpack打包项目
1. 方法一：`webpack hello.js hello.bundle.js --watch`，添加watch参数可以避免在代码改变之后重复打包
2. 方法二：在`webpack.config.js`中配置参数：
    ```
    module.exports = {
        //打包的入口文件
        entry: "./src/script/main.js",
        //打包的目标地址和打包之后生成的文件的名字
        output: {
            path: __dirname + "/dist/js",
            filename: "bundle.js"
        }
    };
    ```
3. 使用`npm`进行打包，在`package.json`中配置打包命令

    ```
    "scripts": {
        "webpack": "webpack --config webpack.config.js --progress --display-modules --colors --watch"
    },
    ```
4. 运行：`npm run webpack`
5. `webpack`生成html：  
- `npm install html-webpack-plugin --save-dev`，改插件是webpack用来生成html的插件
- 在`webpack.config.js`里配置`html-webpack-plugin`
```
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //同时打包生成多个js
    entry: {
        main: "./src/script/main.js",
        a: "./src/script/a.js"
    },
    output: {
        path: __dirname + "/dist",
        //给每个打包生成的js取得名字，name为本生的名字，chunkhash为每次打包生成的hash值，可以理解为版本号
        filename: "js/[name]-[chunkhash].js"
    },
    //webpack的插件引用
    plugins: [
        new htmlWebpackPlugin({
            filename: "index-[hash].html",
            //生成的html引用的模版
            template: "./index.html",
            //在哪个地方引用生成的js
            inject: "head"
        })
    ]
};
```
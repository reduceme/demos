### 一、require.js相对于传统js的优点
1.实现js文件的异步加载，避免网页失去响应；
2.管理模块之间的依赖性，便于代码的编写和维护。

### 二、requirejs加载
1.把```<script src="require.js"></script>```放在页面底部；
2.```<script src="require.js" defer async="true"></script>```实现异步加载，避免网页失去响应。IE不支持`async`属性，所以把`defer`也写上。
3.利用`data-main`作为入口，加载我们自己的js，`<script src="require.js" data-main="main"></script>`，`requirejs`会自动给文件加上`.js`后缀，所以可以省略

### 三、`main.js`作为入口文件的配置
  `main.js`可以称为`主模块`，也就是整个网页的入口，有点像是`C语言`的`main()`函数。
网上有很多关于`main.js`的例子，很多都是像以下这样：
```
require.config({
    paths: {
        'jquery': '../lib/jquery-1.7.2'
    }
});
require(['jquery'], function ($) {
    //do something
});
```
这样总的来说可以完成用于的需求，可是对于多页面应该怎么处理呢？难道在每个页面上都写上`require.config()`？正是基于这种原因，自己想把`config.js`单独提出来，让所有的js都去调用一个`config`，所以有了下面的操作：
##### `index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Require Demo</title>
</head>
<body>
<div>
    <h1>This is a demo of requirejs</h1>
    <button id="contentBtn">Click me</button>
    <p id="messagebox"></p>
</div>
<!--data-main里面配置require.config()-->
<script src="../js/lib/require.js" data-main="../js/src/main" type="text/javascript"></script>
</body>
</html>
```

##### `main.js`项目的主模板，作为入口
```
//两层嵌套去调用公共的config.js
require(["require.config"], function () {
    require(["index/index"])
});
```

##### `config.js`配置公共的js
```
require.config({
    paths: {
        'jquery': '../lib/jquery.min',
        //所有的api都可以写在一个js文件里面，方便后期维护
        "api": "api"
    }
});
```

#####  `api.js`所有的api都在该文件里面，在js里面直接调用，方便后期维护
```
define({
    COMMON: {
        GET_USER_LIST: "/get_user_list"
    }
});
```

##### `index.js`该页面的js
```
// define(["jquery", "api"],function ($, api) {
define(function (require) {
    var $ = require("jquery");
    var api = require("api");

    $("#contentBtn").on("click", function () {
        $("#messagebox").html("You have access jquery by using require()");
        console.log(api.COMMON.GET_USER_LIST);
    })
});
```

##### 文件目录如下

![image.png](http://upload-images.jianshu.io/upload_images/155629-57805c8c65a6f34d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

通过以上的配置，可以顺利使前端的代码更加的规范。
requirejs刚刚入门，还有很多需要学习，现在这么做需要在每个页面都写上`<script src="require.js" data-main="../js/main"></script>`，不知道在多页面应用中能否把这一句放在母版页上，如果能，那又应该做怎样的js配置呢。
参考：https://github.com/reduceme/example-multipage.git


# AMD（异步模块定义）与CMD（通用模块定义）
1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：
```
//CDM
define(function(require, exports, module){
  var a = require("./a");
  a.doSomething();
  //依赖可以就近写
  var b = require("./b");
  b.doSomething();
})

//AMD
define(["./a", "./b"], function(a, b){//依赖必须一开始就写好
  a.doSomething();
  b.doSomething();
})
```
虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。
3. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。比如 AMD 里，require 分全局 require 和局部 require，都叫 require。CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹。

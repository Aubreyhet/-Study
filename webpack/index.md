
# webpack
## 什么是webpack，为什么要用webpack
### 为什么要用webpack
- 模块化，让我们把复杂的程序细化为小的文件；
- 类似于Typescript这种在Javascript基础上拓展的开发语言：使我们能够实现目前版本的Javascript不能直接使用的特性，并且之后还能转化为Javascript文件使浏览器可以识别
- Scss, less等css预处理器
### 什么是webpack
webpack可以看作是模块打包机：它所做的事是，分析你的项目结构，找到JavaScript模块以及其他的一些浏览器不能直接运行的拓展语言（Scss Typescript等），并将其转化和打包为合适的格式供浏览器使用。
### webpack和Grunt以及Gulp相比有什么特性
其实webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而webpack是一种模块化的解决方案，不过webpack的优点使得webpack在很多场景下可以替代Gulp/Gunt类的工具
Grunt和Gulp的工作方式是：在一个配置文件中，知名对某些文件进行类似编译，组合，压缩等任务的集体步骤，工具之后可以自动替你完成这些任务。
![Grunt/gulp](img/1201.webp '1301')
webpack的工作方式是：把你的项目当作一个整体，通过一个给定的主文件（如index.js），webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理他们，最后打包为一个或多个浏览器可以识别的JavaScript文件。
![webpack](img/1202.png '1202')
如果实在要把二者进行对比，Webpack的处理速度更快更直接，能打包更多不同类型的文件。
### 开始使用Webpack
#### 安装
Webpack可以使用npm安装，新建一个空的联系文件夹，在终端中转到该文件夹后执行下边的指令进行安装
```
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
```
#### 正式使用Webpack前的准备
1.在上述练习文件夹中创建一个package.json文件,这是一个标准的npm说明文件，里边蕴含了丰富的信息，包括当前目录的依赖模块，自定义脚本任务等。在终端中使用npm init 命令可以自动创建这个package.json文件

`npm init`

这个命令输入后，终端会问你一系列的诸如项目名称，作者等信息，不过不用担心，如果你不准备在npm中发布你的模块，这戏额问题的答案都不重要，回车默认即可。

2.package.json文件已经就绪，我们在本项目中安装Webpack作为依赖包
    ```
    //安装Webpack
    npm install --save-dev webpack
    ```
3.回到之前的文件夹，并在里边创建两个文件夹，app文件夹和public文件夹，app文件夹用来存储原始数据和我们将要写的javascript模块。public文件夹用来存放之后供浏览器读取的文件，接下来我们再创建桑额文件

- `index.html` --放在public文件夹里边；
- `Greeter.js` --放在app文件夹中；
- `main.js`  --放在app文件夹里；
此时项目结构如下图：

![结构](img/1203.png '1203')

我们在index.html文件中写入最基本的html代码，他在这里的目的在于引入打包后的js文件（这里我们先把之后打包出来的文件命名为bundle.js）
```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>webpackproject</title>
</head>
<body>
    
</body>
</html>
```
我们在Greeter.js中定义一个返回包含问候的html元素的函数，并依据Commonjs规范导出这个函数为一个模块：
```
// Greeter.js
module.exports = funtion() {
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings!";
    return greet;
};
```
main.js文件中我们写入下述代码，用以把Greeter模块返回的节点插入页面。
#### 正式使用webpack
webpack可以在终端中使用，在基本的使用方法如下：
```
# {extry file}处填写入口文件的路径，本文中就是上述main.js的路径，
# {destination for bundled file}处填写打包文件的存放路径
# 填写路径的时候不用添加{}
webpack {entry file} {destination for bundled file}
```
指定入口文件后，webpack将自动识别项目所依赖的其他文件，不过需要注意的是如果你的webpack不是全局安装的，那么当你在终端中使用此命令，需要额外指定其在node_modules中的地址，继续上面的例子，在终端中输入如下命令
```
# webpack 非全局安装的情况
node_modules/.bin/webpack app/main.js public/bundle.js
```
结果如下
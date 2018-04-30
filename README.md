# mydemo
平时的一些小demo集

#express 
npm install express --save

#whatwg-fetch
whatwg-fetch 功能函数，异步请求fetch
require('whatwg-fetch') 引入fetch功能


#babel-preset-env bebel-polyfill
babel-preset-env es6+语法糖解析
babel-polyfill es6功能和函数解析
require('babel-polyfill') 引入polyfill功能


#rimraf
npx rimraf ./build/* 删除当前路径的build文件夹下的所有文件
npx rimraf ./build 删除当前路径的build文件夹及文件


#copyfiles  复制文件
npm i -D copyfiles 安装
npx copyfiles -v 查看版本号
导入：var copyfiles = require('copyfiles');
#copy 复制文件，目录结构也一同复制到输出目录下（使用中）
npm i -D copy
npx copy ./src/** ./build 将src文件夹下的所有文件复制到build文件夹下
注： ** 表示当前路径下的所有文件
命令行语法：npx copy <patterns> <dir> 
patterns: glob pattern or array of file paths(glob模式或文件路径数组,可以去了解一下glob模块包及其语法)
dir: destination directory （输入路径）
导入：let copy = require('copy');
了解glob：https://www.cnblogs.com/xinxingyu/p/5736244.html



#package.json
"clean": "rimraf dist/*"
"copy": "copyfiles -f ./src/index.html ./src/favicon.ico ./dist"
"dist": "npm run copy & webpack --env=dist"
const path = require('path');
//获取当前路径
let rootPath=path.resolve(__dirname);

//导入获取当前目录下所有文件名称
const findSync=require(rootPath+'/config/common/findFileNameSync.js');
let fileNames=findSync('./src','.js');
//配置入口和出口
let entry={},output={};
fileNames.forEach((item,index)=>{
  /*
    @param 入口
    获取到的文件数组：[ 'src\\2018\\4\\tabSlideSwitch\\index.js', 'src\\index.js' ]
    修改修改为当前路径：./src/....形式，以便webpack.config.js使用
    let entry={
      main:'./src/index.js',
      index:'./src/2018/4/tabSlideSwitch/index.js'
    }
  */
  entry[item.slice(4)]="./"+item;//item.slice(4)已经包含了文件后缀名称 .js(或者可能是其他的后缀)
});
/*
    @param 出口：统一出口形势
    let output={
      path:path.resolve(__dirname,'dist'),
      filename:'[name].js'
    }
  */
output={
  path:rootPath+'/dist',//path.resolve(__dirname,'./dist'),
  filename:'[name]'//对应entry的键，name值已经包含了后缀名
}


module.exports = {
  entry,
  output,
  mode: 'development',
  devServer: {//可以配置
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          /*
          //.babelrc配置文件详解：https://excaliburhan.com/post/babel-preset-and-plugins.html
          //配置文件重.babelrc中读取
          //在升级到了Babel6.x版本之后，所有的插件都是可插拔的。这也意味着你安装了Babel之后，是不能工作的，需要配置对应的.babelrc文件才能发挥完整的作用。下面就对Babel的presets和plugins配置做一个简单解析。


          presets: [
              [
                  "env",
                  {
                    "modules": false,
                    "targets": {
                       "browsers": ["ie >=9"]
                    },
                    "useBuiltIns": true,
                    "debug": true
                  }
              ]
          ],*/
          plugins:[]
        }
      }
    ]
  }
}
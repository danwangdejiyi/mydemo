//默认webpack.config.js配置----公共配置文件
const path = require('path');

module.exports = {
  mode:'development',
  devServer:{//可以配置
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
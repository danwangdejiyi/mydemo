const config=require('./webpack.config.js');
const path=require('path');

//导入公共config处理函数
const dealConfig=require('./webpack.common.config');
dealConfig.dealConfig('./src','.js','/dist');
for(let item in dealConfig){
    if(typeof dealConfig[item]==='object'){
        config[item]=dealConfig[item];
    }
}

console.log(config)
module.exports=config;
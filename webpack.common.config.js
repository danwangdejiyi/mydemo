const path=require('path');
//获取当前路径
let rootPath=path.resolve(__dirname);

//导入获取当前目录下所有文件名称
const findSync=require(rootPath+'/config/common/findFileNameSync.js');
//入口+出口
let entry={},output={};
//配置文件处理函数
/**
 * 
 * @param {*} entryPath 入口路径  ./src
 * @param {*} type 选择文件类型 .js
 * @param {*} outputPath 出口路径 /dist
 */
function dealConfig(entryPath,type,outputPath){
    let fileNames=findSync(entryPath,type);
    //配置入口和出口
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
   /*
    output={
        path:rootPath+outputPath,//path.resolve(__dirname,'./dist'),
        filename:'[name]'//对应entry的键，name值已经包含了后缀名
    }*/
    output.path= rootPath+outputPath;//path.resolve(__dirname,'./dist'),
    output.filename='[name]';//对应entry的键，name值已经包含了后缀名
}

//自定义配置文件
const config={
    entry,
    output,
    dealConfig
}
//添加
module.exports=config;
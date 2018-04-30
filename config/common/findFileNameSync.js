let  fs = require('fs');
let  join = require('path').join;
/**
 *  获取当前目录下所有js文件
 * @param startPath  起始目录文件夹路径
 * @param type 文件的后缀 （.js .css .html等文件后缀）
 * @returns {Array}
 */
function findSync(startPath,type='') {
    let result=[];
    function finder(path,type) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath,type);
            if(stats.isFile()) {
                if(fPath.endsWith(type)){
                    result.push(fPath);
                }
                
            }
        });
    }
    finder(startPath,type);
    return result;
}

module.exports=findSync;

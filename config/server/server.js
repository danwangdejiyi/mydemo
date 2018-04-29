/**
 * 配置本地请求node
 */


/*
    导入path，以便获取当前路径
    方法一：process.cwd()
    方法二：path.join(__dirname)
    
    console.log(process.env.PORT)
    console.log(process,process.argv)
*/
let path=require('path');


//引入公共server（服务）配置文件
var serverconfig=require(path.join(__dirname,'../common/server.js'));


//引入express中间件
var express = require('express');
var app = express();

//引入express中间件配置
//设置跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS"){
        res.send(200);/*让options请求快速返回*/
    }else{
        next();
    }
});
app.get('/', function (req, res) {
    res.send('Hello World');
});
  
 //  POST 请求
 app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
 })
  
 //  /del_user 页面响应
 app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    // 输出 JSON 格式
    /*
    var response = {
        "first_name":req.query.first_name,//查询提交的信息，键值对：first_name:req.query.first_name
        "last_name":req.query.last_name
    };*/
    let response={
        name:'li',
        value:1
    }
    console.log(response);
    res.end(JSON.stringify(response));

    res.send('删除页面');
 })
  
 //  /list_user 页面 GET 请求
 app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
 })
  
 // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
 app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
 });


var server = app.listen(serverconfig.port, function () {  
   var host = server.address().address
   var port = server.address().port
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
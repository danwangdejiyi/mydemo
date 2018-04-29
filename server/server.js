//引入express中间件
var express = require('express');
var app = express();
console.log(process.env.PORT)
/*
//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('./dist'));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");

    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
//监听端口为3000
var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(server)
    console.log('Example app listening at http://%s:%s', host, port);
});
*/
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

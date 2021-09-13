// 引入http模块
var http = require('http');
/*
    requset 获取url传过来的信息
    response 给浏览器响应信息
*/

http.createServer(function (request, response) {
    // 设置响应头
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 表示给页面输出一句话，并且结束会话
    response.end('Hello World');
}).listen(8081);//端口

console.log('Server running at http://127.0.0.1:8081/');
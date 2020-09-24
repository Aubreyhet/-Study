// 引入模块
const http = require('http')
const server = http.createServer()
server.on('request', function(req,res){
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    res.end('hell world 刚刚')
})
server.listen(3000,function(){
    console.log('Server is running... 打开 127.0.0.1:3000 进行访问')
})
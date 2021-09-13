const http = require('http');
http.createServer((req, res) => {
    console.log(req.url);//获取url

    //设置响应头
    //设置HTTp头部，状态码是200，文件类型是html 字符集是utf-8

    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" });
    res.write(`<head><meta charset = "UTF-8"></head>`)
    res.write('你好 this is nodejs');
    res.write(`<h2>你好 nodejs</h2>`);
    res.end();
}).listen(3000);
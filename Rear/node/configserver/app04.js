const url = require('url');
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" });
    res.write(`<head><meta charset = "UTF-8"></head>`)
    res.write(`nihao`)
    console.log(req.url)
    if (req.url != '/favicon.ico') {
        var userinfo = url.parse(req.url, true).query;
        console.log(`name:${userinfo.name}--age:${userinfo.age}`)
    }
    res.end();
}).listen(3000)

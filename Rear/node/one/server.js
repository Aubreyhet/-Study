// // 文件系统模块
const fs = require('fs')
const path = require('path')

const http = require('http')

const serve = http.createServer()

serve.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  fs.readFile(path.join(__dirname, './files/index.html'), 'utf-8', (err, data) => {
    if (err) return console.log('文件读取失败' + err.message)
    res.end(data)
  })
})

serve.listen(8080, () => {
  console.log('hello, world')
})

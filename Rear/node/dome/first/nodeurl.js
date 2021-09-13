let url = require('url')
console.log(url)
let httpUrl = 'https://sale.vmall.com/hwmate.html?cid=10602'
let urlObj = url.parse(httpUrl)
console.log(urlObj)


//合成地址
let targetUrl = 'http://www.taobao.com/'
httpUrl = './sxt/qianduan/aubrey.html'
let newUrl = url.resolve(targetUrl, httpUrl)
console.log(newUrl)
//http://www.taobao.com/sxt/qianduan/aubrey.html
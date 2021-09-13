const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const url = require('url')
const path = require("path")
let httpUrl = 'https://www.doutula.com/article/list/?page=1'
//获取所有总页数
async function getNum() {
    res = await axios.get(httpUrl)
    let $ = cheerio.load(res.data)
    let btnLength = $('.pagination li').length;
    let allNum = $('.pagination li').eq(btnLength - 2).find('a').text()
    // console.log(allNum)
    return allNum
}
getNum()
// axios.get(httpUrl).then((res) => {
//     // console.log(res.data)
//     //解析
//     let $ = cheerio.load(res.data)
//     $('#home .col-sm-9>a').each((i, element) => {
//         let aHref = $(element).attr('href')
//         // parsePage(aHref)
//         let title = $(element).find('.random_title').text()
//         let reg = /(.*?)[0-9]{4}\-/igs;
//         title = reg.exec(title)[1]
//         fs.mkdir('./img/' + title, function (err) {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log('成功创建目录' + './img/' + title)
//             }
//         });
//         parsePage(aHref, title)
//         console.log(title)
//     })
// })

// async function parsePage(url, title) {
//     let res = await axios.get(url)
//     let $ = cheerio.load(res.data)
//     $('.pic-content img').each((i, element) => {
//         let imgUrl = $(element).attr('src')
//         console.log(imgUrl)
//         let extName = path.extname(imgUrl)
//         //创建图片路径和名字
//         let imgPath = `./img/${title}/${title}-${i}${extName}`
//         //创建写入图片
//         let ws = fs.createWriteStream(imgPath)
//         axios.get(imgUrl, { responseType: 'stream' }).then(function (res) {
//             res.data.pipe(ws)
//             console.log('图片加载完成' + imgPath)
//             res.data.on('close', function () {
//                 ws.close()
//             })
//         })

//     })
// }
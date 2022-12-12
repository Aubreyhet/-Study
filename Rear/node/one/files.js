// 文件系统模块
const fs = require('fs')
const path = require('path')

// 读取文件
/**
 *
 */
// fs.readFile('./files/one.txt', 'utf-8', (err, data) => {
//   // 读取失败
//   if (err) {
//     // console.log('读取文件失败！' + err.message)
//   }
//   // console.log(err);
//   // 读取成功
//   // console.log(data);
// })


// 写入文件
// 三个参数 文件 内容 编码格式 回调
// fs.writeFile('./files/one.txt', 'aubrey', (err) => {
//   // 如果写入成功 err 为null
//   if (err) {
//     console.log('写入失败' + err.message)
//   } else {
//     console.log('写入成功')
//   }
// })


// fs.readFile('./files/one.txt', 'utf-8', (err, data) => {
//   // 读取失败
//   if (err) {
//     console.log('读取文件失败！' + err.message)
//   } else {
//     console.log('读取成功', data.split(' '))
//     const newArr = data.split(' ').join('\r\n')
//     console.log(newArr)
//     // 重新写进文件
//     fs.writeFile('./files/one_ok.txt', newArr, (err) => {
//       if (err) {
//         return console.log('写入失败' + err.message)
//       }
//       console.log('写入成功')
//     })
//   }
// })

// 路径动态拼接 相对路径 使用path 模块拼接完整文件路径
// fs.readFile('./files/one.txt', 'utf-8', (err, data) => {
//   console.log(err, data)
// })

// console.log(__dirname)
// fs.readFile(path.join(__dirname, './files/one.txt'), 'utf-8', (err, data) => {
//   console.log(err, data)
// })

// 获取文件名
// const full = path.basename('./files/one.txt')
// console.log(full)

// 获取文件名 去除扩展名
// const fileName = path.basename('./files/one.txt', '.txt')
// console.log(fileName);

// 获取文件扩展名
// const fext = path.extname('./files/one.txt')
// console.log(fext)


// 定义匹配style的正则
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取文件
fs.readFile(path.join(__dirname, './files/index.html'), 'utf-8', (err, data) => {
  if (err) return console.log('文件读取失败' + err.message)
  // 处理读取到的文件
  // const styleStr = regStyle.exec(data)
  // const newStyleStr = styleStr[0].replace('<style>', '').replace('</style>', '')
  // 写入css文件
  reolveCss(data)
  reolveJs(data)
})

const reolveCss = (htmlStr) => {
  const styleStr = regStyle.exec(htmlStr)
  const newStyleStr = styleStr[0].replace('<style>', '').replace('</style>', '')
  fs.writeFile(path.join(__dirname, './files/clock/index.css'), newStyleStr, (werr) => {
    if (werr) return console.log('文件写入失败')
    console.log('文件写入成功')
  })
}


const reolveJs = (htmlStr) => {
  const jsStr = regScript.exec(htmlStr)
  const newJsStr = jsStr[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './files/clock/index.js'), newJsStr, 'utf-8', (werr) => {
    if (werr) return console.log('文件写入失败')
    console.log('文件写入成功')
  })
}



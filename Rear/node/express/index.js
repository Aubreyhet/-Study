const express = require('express')

const useRouter = require('./router')

const app = express()

// 托管静态资源
// 访问需要加前缀的静态资源管理
// app.use('/public', express.static('public'))
app.use(express.static('public'))
app.use(express.static('files'))


// 路由 就是映射关系
// 请求类型 请求的url 处理函数
// 路由匹配过程
// 最简单的方式 是直接挂载在app上
// 模块化路由管理
// 注册全局中间件
// 也可以添加访问前缀
app.use('/v1_api', useRouter)


app.listen(80, () => {
  console.log('服务启动完成')
})

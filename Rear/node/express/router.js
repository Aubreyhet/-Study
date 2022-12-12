const express = require('express')

// 创建路由对象
const router = express.Router()


// app.get 监听客户端get请求
router.get('/', (req, res) => {
  console.log(req.query)
  res.send('结束吧')
})

// app.get 监听客户端get请求
router.post('/user', (req, res) => {
  console.log(req.url)
  res.send('来了结束吧')
})

// 路由匹配
router.get('/userinfo', (req, res) => {
  res.send('获取用户信息成功')
})

module.exports = router

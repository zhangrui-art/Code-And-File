const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用对象
const app = express()

// 静态资源中间件设置
app.use(express.static(path.join(__dirname, 'public')))


// 创建路由
app.get('/home', (req, res) => {

  res.send('前台首页')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
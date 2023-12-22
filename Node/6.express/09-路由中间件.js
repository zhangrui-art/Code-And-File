const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用对象
const app = express()


// 声明中间件
const checkCodeMiddleware = (req, res, next) => {
  // 判断URL中code参数是否等于521
  if(req.query.code ===   '521'){
    next()
  }else{
    res.send('<h1>暗号失误</h1>')
  }
}

// 创建路由
app.get('/home', (req, res) => {

  res.send('前台首页')
})

app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台首页')
})

app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台设置')
})


// 匹配所有的方法 404响应
app.all('*', (req, res) => {
  res.send('<h1>404</h1>')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
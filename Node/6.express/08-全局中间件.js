const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用对象
const app = express()

// 声明中间件函数
function recordMiddleware(req, res, next) {
  const { url, ip } = req
  fs.appendFileSync(path.resolve(__dirname, 'logs.txt'), `${new Date().toLocaleString()} ${ip} ${url}\r\n`)
  next()
}

app.use(recordMiddleware)


// 创建路由
app.get('/home', (req, res) => {

  res.send('前台首页')
})

app.get('/admin', (req, res) => {
  res.send('后台首页')
})


// 匹配所有的方法 404响应
app.all('*', (req, res) => {
  res.send('<h1>404</h1>')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
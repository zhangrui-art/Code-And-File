const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home', (req, res) => {
  res.end('Hello World!')
})

app.get('/', (req, res) => {
  res.end('Home')
})

app.post('/login', (req, res) => {
  res.end('Login')
})

app.all('/test', (req, res) => {
  res.end('All')
})

// 匹配所有的方法 404响应
app.all('*', (req, res) => {
  res.end('404')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
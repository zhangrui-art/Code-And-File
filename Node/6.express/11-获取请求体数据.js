const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
// 创建应用对象
const app = express()

// 解析JSON格式的请求体的中间件
const jsonParser = bodyParser.json()

// 解析 querystring 格式的请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })


// 创建路由
app.get('/login', (req, res) => {
  // 响应html内容
  res.sendFile(__dirname + '/11-form.html')
  // res.send('表单')
})

app.post('/login', urlencodedParser, (req, res) => {
  console.log(req.body)
  // 使用body-parser中间件获取请求体数据
  res.send('表单')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
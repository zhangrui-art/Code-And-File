const express = require('express')
const singers = require('./singers.json')
const find = require('lodash/find')
// 创建应用对象
const app = express()

// 创建路由
app.get('/singer/:id', (req, res) => {
  // 获取路由参数 params参数
  let { id } = req.params
  const singer = find(singers, item => item.id == id)
  if(!singer) {
    res.status(404).send('没有找到该歌手')
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end(`
    <h2>${singer.name}</h2>
    <hr/>
    <h3>${singer.album}</h3>
  `)
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
const ejs = require('ejs')
const fs =  require('fs')
const express  = require('express')
const app = express()

let isLogin = false
const html = fs.readFileSync('./03-html.html').toString()
const result = ejs.render(html, {isLogin})
app.get('/', (req, res) => {
  res.send(result)
})

app.listen(8080, () => {
  console.log('服务器启动成功')
})



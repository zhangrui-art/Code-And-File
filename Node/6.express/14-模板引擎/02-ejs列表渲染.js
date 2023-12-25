const ejs = require('ejs')
const fs =  require('fs')
const express  = require('express')
const app = express()

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']

const html = fs.readFileSync('./02-西游.html').toString() 

const result = ejs.render(html, { xiyou })

app.get('/', (req, res) => {
  res.send(result)
})

app.listen(8080, () => {
  console.log('服务器启动成功')
})






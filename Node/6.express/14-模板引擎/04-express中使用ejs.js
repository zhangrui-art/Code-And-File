const ejs = require('ejs')
const path = require('path')
const express  = require('express')
const app = express()
// 1.设置模板引擎
app.set('view engine', 'ejs')
// 2.设置模板文件存放位置
app.set('views', path.resolve(__dirname, './views'))

app.get('/home', (req, res) => {
  // 3.render 响应
  // res.render('模板的文件名','数据')
  let title = '张大炮蒸滴c'
  res.render('home',{title})
})

app.listen(8080, () => {
  console.log('服务器启动成功')
})



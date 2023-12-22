const express = require('express')
const path = require('path')
// 创建应用对象
const app = express()

// 创建路由
app.get('/other', (req, res) => {
  // 跳转响应-重定向
  // res.redirect('http://baidu.com')

  // 下载响应  (此响应后不能写res.send，不然报错)
  // res.download(path.resolve(__dirname, 'package.json'), 'test.json', err => {
  //   console.log(err);
  // })

  // Json 响应
  // res.json({
  //   name: 'zhangsan',
  //   age: 18
  // })

  // 响应文件内容
  res.sendFile(path.resolve(__dirname, 'package.json'))

})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
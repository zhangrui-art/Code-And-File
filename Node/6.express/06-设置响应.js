const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/response', (req, res) => {
  // 原生
  // res.statusCode = 404 
  // res.statusMessage = 'DIO NEE MA'
  // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  // res.setHeader("dio", ["Dio1","Dio2","Dio3"])
  // res.write('404 Not Found');
  // res.end();

  // express响应
  // res.status(500)
  // res.set('aaa','bbb')
  // res.send('500 Internal Server Error好的呢')
  res.status(200).set('DIO',"dan").send('200 OK 你的坤')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
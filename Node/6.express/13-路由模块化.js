const express = require('express')
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')
// 创建应用对象
const app = express()

app.use(homeRouter)
app.use(adminRouter)




// 匹配所有的方法 404响应
app.all('*', (req, res) => {
  res.send('<h1>404</h1>')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
const express = require('express')
// 创建应用对象
const app = express()

app.use((req, res, next) => {
  // 检测请求头中的referer 是否为127.0.0.1
  // 获取 referer
  let referer = req.get('referer')
  if (referer) {
    const url = new URL(referer)
    const { hostname } = url
    if (hostname !== '127.0.0.1') {
      res.status(404).send('图片禁止盗链')
      return
    } 
  }
  next()
})
app.use(express.static(__dirname + '/public'))

app.listen(8080, () => {
  console.log('Server is running on port')
})
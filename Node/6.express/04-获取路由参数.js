const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
// :id 占位符
app.get('/:id.html', (req, res) => {
  // 获取路由参数 params参数
  const id = req.params.id
  console.log(id);
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end('商品详情')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
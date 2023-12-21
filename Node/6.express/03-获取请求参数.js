const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/request', (req, res) => {
  // 原生参数
  console.log(req.url);
  console.log(req.method);
  console.log(req.httpVersion);
  console.log(req.headers)

  // express操作
  console.log(req.path);
  console.log(req.query);
  console.log(typeof req.query);
  console.log(req.ip);

  // 获取请求头
  console.log(req.get('host'));
  res.end('Hello World!')
})


app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
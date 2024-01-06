const express = require('express');

const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
app.use(session({
  name: 'sid', // 设置cookie的name，默认值是connect.sid
  secret: 'dapao', // 参与加密的字符串（又称签名）
  saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
  resave: true,  // 是否每次请求时都重新保存session
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/bigpaul',
    collection: 'sessions'
  }),
  cookie: {
    maxAge: 1000 * 60 * 5,  // * 60 * 24 * 7// 设置sessionId的过期时间，单位毫秒
    httpOnly: true, // 是否只用于http请求中获取，默认值是true， 开启后前端无法通过js操作

  }
}))

app.get('/', function (req, res) {
  res.send('home')
})

// 登录 // session的设置
app.get('/login', function (req, res) {
  if (req.query.username === 'admin' && req.query.password === 'admin123') {
    req.session.username = 'admin'
    req.session.uid = '454edcfds'
    res.send('登录成功')
  } else {
    res.send('登录失败')
  }
})
//session的读取
app.get('/cart', (req, res) => {
  if (req.session.username) {
    res.send(`购物车页面, 欢迎您${req.session.username}`)
  } else {
    res.send('没有登录')
  }
})
//session的销毁
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send('退出成功')
  })
})

app.listen(8080, () => {
  console.log('server is running on port 8080');
})
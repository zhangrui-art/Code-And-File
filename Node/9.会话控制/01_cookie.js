const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
  res.send('home')
})
// 设置cookie
app.get('/set-cookie', (req, res) => {
  // res.cookie('name','bigpaul') // 会在浏览器关闭的时候销毁
  res.cookie('name','haoshuai',{maxAge: 60*1000}) // 单位毫秒
  res.cookie('theme','blue') 
  res.send('set cookie')
})
// 删除cookie
app.get('/del-cookie', (req, res) => {
  // res.cookie('name','bigpaul') // 会在浏览器关闭的时候销毁
  res.clearCookie('name')
  res.send('set cookie')
})
// 获取cookie
app.get('/get-cookie', (req, res) => {
  console.log(req.cookies);
  res.send('获取cookie')
})


app.listen(8080, () => {
  console.log('server is running on port 8080');
})
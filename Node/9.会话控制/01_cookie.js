const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('home')
})
app.get('/set-cookie', (req, res) => {
  // res.cookie('name','bigpaul') // 会在浏览器关闭的时候销毁
  res.cookie('name','haoshuai',{maxAge: 60*1000}) // 单位毫秒
  res.cookie('theme','blue') 
  res.send('set cookie')
})
app.get('/del-cookie', (req, res) => {
  // res.cookie('name','bigpaul') // 会在浏览器关闭的时候销毁
  res.clearCookie('name')
  res.send('set cookie')
})



app.listen(8080, () => {
  console.log('server is running on port 8080');
})
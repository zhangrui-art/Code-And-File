const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  let htmlTxt = fs.readFileSync(__dirname+'/10.table.html')
  res.end(htmlTxt)
  // res.end(htmlTxt.toString())
})
server.listen(8080, () => {
  console.log('服务器启动成功')
})
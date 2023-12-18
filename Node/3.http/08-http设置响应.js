const http = require('http');

const server = http.createServer((req, res) => {
  // 设置响应状态码
  res.statusCode = 404 
  // 设置响应状态的描述
  res.statusMessage = 'DIO NEE MA'
  // 设置响应头  
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.setHeader("dio", ["Dio1","Dio2","Dio3"])
  // 设置响应体
  res.write('404 Not Found');
  res.write('404 Not Found');
  res.write('404 Not Found');
  res.write('404 Not Found');
  res.end();
})
server.listen(8080, () => {
  console.log('server is running at 8080');
});
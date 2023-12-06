const http = require('http');
// 使用http.createServer()方法创建一个web服务器

// const server = http.createServer((req, res) => {
//   // 监听请求事件
//   console.log(req.url);
//   // 向客户端发送响应
//   res.end('Hello World');
// });
const server = http.createServer();

//  request请求事件处理函数，需要接受两个参数： 
//  req：客户端的请求对象，包含客户端的请求信息，例如请求的url、请求头、请求体等
//  res：服务端的响应对象，用于向客户端发送响应
server.on('request', (req, res) => {
  console.log(req.url);
  console.log('收到客户端的请求了');

  // res.write()可以用来给用户发送响应数据 
  // write可以使用多次，但是一定要用end来结束响应
  res.write('nbbbbbb')
  res.end('Hello World');
});

// 绑定端口，启动服务器
server.listen(8080, () => {
  console.log('服务器启动成功');
});

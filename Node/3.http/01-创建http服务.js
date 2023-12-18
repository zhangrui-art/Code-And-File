const http = require('http'); // 引入http模块

const server = http.createServer( // 创建http服务器
  (request, response) => { // 处理请求和响应
    
    // 返回响应内容
    // response.end("Hello HTTP Server");
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.end("张大炮蒸滴c"); 
  }
);

server.listen(8080, () => { // 监听端口8080
  console.log('服务器启动成功'); // 打印服务器启动成功的消息
});

// HTTP协议的默认端口是80，HTTPS协议的默认端口是443
//如果端口被占用，则会自动寻找下一个可用端口。

const http = require('http'); // 引入http模块

const server = http.createServer( // 创建http服务器
  (request, response) => { // 处理请求和响应
    // 打印请求的方法
    // console.log(request.method);
    // 打印请求的URL
    // console.log(request.url);
    // 打印请求的HTTP版本
    // console.log(request.httpVersion);
    // 获取HTTP的请求头
    console.log(request.headers);
    response.end("http")
  }
);

server.listen(8080, () => { // 监听端口8080
  console.log('服务器启动成功'); // 打印服务器启动成功的消息
});

// HTTP协议的默认端口是80，HTTPS协议的默认端口是443
//如果端口被占用，则会自动寻找下一个可用端口。

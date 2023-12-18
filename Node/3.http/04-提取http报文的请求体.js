const http = require('http');

const server = http.createServer((req, res) => {
    // 1. 解析请求体
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
      console.log(body);
      res.end('hello http');
    })
})
server.listen(8080, () => {
  console.log('server is running at 8080');
});
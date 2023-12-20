const http = require('http');
const fs = require('fs');
const path = require('path');
let mimes = {
  'ico': 'image/x-icon',
  'html': 'text/html',
  'js': 'text/javascript',
  'json': 'application/json',
  'css': 'text/css',
  'png': 'image/png',
  'jpg': 'image/jpeg',
  'wav': 'audio/wav',
  'mp3': 'audio/mpeg',
}

const server = http.createServer((req, res) => {
  console.log(global);
  if (req.method!== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('<h2>405 Method Not Allowed</h2>');
    return;
  }
  let { pathname } = new URL(req.url, 'http://127.0.0.1');
  let filePath = __dirname + pathname
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 设置字符集
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      // 判断错误的代号
      switch (err.code) {
        case 'ENOENT': 
          res.statusCode = 404;
          res.write('<h2>404 Not Found</h2>');
          break;
        case 'EPERM': 
          res.statusCode = 403;
          res.write('<h2>403 Forbidden</h2>');
        default:
          res.statusCode = 500;
          res.write('<h2>500 Internal Server Error</h2>');
          break;
      }
    } 
    // 获取文件后缀
    let ext = path.extname(filePath).slice(1);
    // 获取对应的MIME类型
    let type = mimes[ext]
    if(type) {
      res.setHeader('Content-Type', type + ';charset=utf-8');
    } else {
      res.setHeader('Content-Type', 'application/octet-stream;charset=utf-8');
    }
    res.end(data)
  })
})

server.listen(8080, () => {
  console.log('服务器启动成功: http://127.0.0.1:8080');
})
const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req, res) => {
  const result = url.parse(req.url, true)
  const { pathname } = result
  console.log(result);
  switch (pathname) {
    case '/':
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      let htmlTxt = fs.readFileSync(__dirname+'/table.html')
      res.end(htmlTxt)
      break;
    case '/index.css':
      res.setHeader('Content-Type', 'text/css;charset=utf-8');
      let cssTxt = fs.readFileSync(__dirname+'/index.css')
      res.end(cssTxt)
      break;
    case '/index.js':
      res.setHeader('Content-Type', 'text/javascript;charset=utf-8');
      let jsTxt = fs.readFileSync(__dirname+'/index.js')
      res.end(jsTxt)
      break;
    default:
      res.statusCode = 404
      res.end('<h1>404 Not Found</h1>')
      break;
  }
  // res.end(htmlTxt.toString())
})
server.listen(8080, () => {
  console.log('服务器启动成功')
})
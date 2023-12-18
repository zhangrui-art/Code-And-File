const http = require('http');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (method === 'GET') {
    if (url === '/') {
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(`<h1>Hello World</h1>`);
    } else if (url === '/login') {
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(`<h1>Login</h1>`)
    } else if (url === '/register') {
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(`<h1>Register</h1>`)
    } else {
      res.end('404 Not Found');
    }
  }

})
server.listen(8080, () => {
  console.log('server is running at 8080');
});
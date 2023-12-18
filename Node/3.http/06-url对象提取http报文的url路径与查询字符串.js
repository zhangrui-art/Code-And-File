const http = require('http');

const server = http.createServer((req, res) => {
  let url = new URL(req.url, 'http://127.0.0.1');
  // 路径
  // console.log(url.pathname);
  console.log(url.searchParams.get('a'));
})
server.listen(8080, () => {
  console.log('server is running at 8080');
});
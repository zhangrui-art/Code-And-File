const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(req.url);
  let result  = url.parse(req.url, true);
  // console.log(result);
  // 路径
  let pathname = result.pathname;
  // 查询字符串 query
  let query = result.query;
  console.log(result);
  res.end("url")
})
server.listen(8080, () => {
  console.log('server is running at 8080');
});
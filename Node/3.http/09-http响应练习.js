const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          td {
            padding: 20px 40px
          }
          table tr:nth-child(odd) {
            background-color: #f2f2f2;
          }
          table tr:nth-child(even) {
            background-color: aquamarine;
          }
          table, td {
            border-collapse: collapse;
          }
        </style>
    </head>
    <body>
      <table border="1">
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
      </table>
      <script>
          let tds = document.querySelectorAll('td');
          console.log(tds);
          tds.forEach(td => {
            td.onclick = function () {
              this.style.background = '#ff0000'
            }
          });
      </script>
    </body>
    </html>

  
  `)
})
server.listen(8080, () => {
  console.log('服务器启动成功')
})
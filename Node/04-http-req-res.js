const http = require('http');
const server = http.createServer() 
// 响应内容只能是字符串或者二进制数据
server.on('request',(req, res) => {
    switch (req.url) {
        case "/":
            res.end("diao ni ma  meizhi ")
            break;
        case '/login': 
            res.end(JSON.stringify(["dd","ddcv"]))
            // res.end(["dd","ddcv"])
            break;
        default:
            res.end('404 Not Found')
            break;
    }
})

server.listen(8080, () => {
    console.log('server is running on port http://127.0.0.1:8080');
})
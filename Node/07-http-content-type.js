const http = require('http');
const { url } = require('inspector');
const products = [
    {
        id: 1,
        name: 'iphone',
        price: 1000
    },
    {
        id: 2,
        name:'mac',
        price: 2000
    },
    {
        id: 3,
        name: 'ipad',
        price: 3000
    }
]
const server = http.createServer() 
server.on('request', (req, res) => {
    // 服务端默认发送的数据是utf8编码的内容
    // 浏览器会默认按照当前操作系统的默认编码去解析
    // 中文操作系统默认编码是gbk
    const url = req.url
    switch (url) {
        case '/plain':
            // text/plain普通文本
            res.setHeader('Content-Type', 'text/plain;charset=utf-8')
            res.end("你好 叼毛")
        case '/html':
            // text/html html文本
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end("<h2 style='color:aquamarine'>我叼你玛德</h2>")
        default:
            break;
    }



})

server.listen(8080, () => {
    console.log('server is running on port 8080')
})
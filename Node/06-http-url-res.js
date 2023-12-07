const http = require('http');
const IP2Region = require('ip2region').default

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
const query = new IP2Region()
const server = http.createServer() 
server.on('request', (req, res) => {
    // console.log("收到了请求，请求路径是" + req.url)
    // console.log("请求我的客户端的端口号是：",req.socket.remotePort);
    // console.log("请求我的客户端的端口地址是：",req.socket.remoteAddress);
    // console.log("地址为",query.search(req.socket.remoteAddress));
    console.log("地址为",query.search("2.16.45.255"));
    let url = req.url;
    switch (url) {
        case '/':
            res.end("index page")
            break;
        case '/login':
            res.end("login page")
            break;        
        case '/products':
            res.end(JSON.stringify(products))
            break;
        default:
            break;
    }
})

server.listen(8080, () => {
    console.log('server is running on port 8080')
})
const http = require('http');
const fs = require('fs')

const server = http.createServer() 
server.on('request', (req, res) => {
    const url = req.url
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>Hello World</h1>')
        return
    }else if(url === '/img'){
        fs.readFile('./resource/敬礼.png',(err, data) => {
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("文件读取失败，稍后重试")
            }else{
                // data默认是二进制，可以通过toString()转为字符串
                // res.end()支持字符串，也可以支持二进制
                // 图片不需要指定编码，常说的编码一般指的是字符编码
                // https://tool.oschina.net/commons
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    }else{
        fs.readFile('./resource/index.html',(err, data) => {
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("文件读取失败，稍后重试")
            }else{
                // data默认是二进制，可以通过toString()转为字符串
                // res.end()支持字符串，也可以支持二进制
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }




})

server.listen(8080, () => {
    console.log('server is running on port 8080')
})
const fs = require('fs')

// 流式写入适用于大文件/大数据量的写入操作
// 创建一个写入流，将内容写入名为'./观书有感.txt'的文件
const ws = fs.createWriteStream('./观书有感.txt')
// 向文件中写入第一行诗歌
ws.write('半亩方塘一鉴开\r\n')
// 向文件中写入第二行诗歌
ws.write('天光云影共徘徊\r\n')
// 向文件中写入第三行诗歌
ws.write('问渠哪得清如许\r\n')
// 向文件中写入第四行诗歌
ws.write('为有源头活水来\r\n')
// 关闭写入流
ws.close()
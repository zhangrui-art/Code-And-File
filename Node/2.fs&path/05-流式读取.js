const fs = require('fs');

// 创建读取流对象
const rs = fs.createReadStream('./video.mp4');

// 绑定data事件 chunk 块儿（每次绑定的数据）
rs.on('data', (chunk) => {
    console.log(chunk.length); // 655636字节 =>  64KB
});

// end 可选事件
rs.on('end', () => {
    console.log('读取结束');
});
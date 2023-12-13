//fs  是filesystem的简写 ，就是文件系统的意思
//在node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API

//1. 使用require 方法加载fs核心模块
let fs = require('fs');

//2.
fs.readFile("./test.txt", (err, data) => {
    // <Buffer 77 72 72 72 77 65 72 20>
    // 文件中存储的其实是二进制数据 0 1 
    // console.log(data.toString());
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
// console.log(test);

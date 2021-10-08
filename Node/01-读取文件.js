//fs  是filesystem的简写 ，就是文件系统的意思
//在node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API

//1. 使用require 方法加载fs核心模块
let fs = require('fs');

//2.
fs.readFile("E:\teaching\teachingHC.html");
//
const fs = require('fs');

// 相对路径的参照物：命令行的工作目录

// 绝对路径 '全局变量' => 始终保存的所在文件的目录的绝对路径

console.log(__dirname);
fs.writeFileSync(__dirname + '/test.txt', '测试__dirname');
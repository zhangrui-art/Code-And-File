const fs = require('fs')

// 相对路径
// fs.readFileSync('./paopao.txt', 'utf-8')
// fs.readFileSync('paopao.txt', 'utf-8')
// fs.readFileSync('../oldVersion/00-helloWorld.js','utf-8')

// 绝对路径
// fs.readFileSync('D:/Code/Code-And-File/Node/2.fs/paopao.txt', 'utf-8')
const data = fs.readFileSync('/test.py', 'utf-8')
console.log(data);
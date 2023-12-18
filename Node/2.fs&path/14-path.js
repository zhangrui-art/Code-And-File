const fs = require('fs');
const path = require('path'); 

//resolve解决
console.log(path.resolve(__dirname,'./index.html'))
console.log(path.resolve(__dirname,'index.html'))

// sep 分隔符
console.log(path.sep);  // windows: \ ; Linux: / ;

// parse 
let str = __filename
console.log(str);
console.log(path.parse(str));

// basename 基本名称
console.log(path.basename(str));

// dirname 目录名称
console.log(path.dirname(str));

// extname 扩展名
console.log(path.extname(str));

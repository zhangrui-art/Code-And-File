const fs = require('fs')


// param1: 文件路径
// param2: 文件内容
/* param3: 回调函数
 *   error 
 *   成功：
 *      文件写入成功
 *      error 为 null
 *   失败：
 *      文件写入失败
 *      error 为错误对象
 */
fs.writeFile('./test.txt',"我是你爹",(err) => {
    console.log(err);
    console.log('写入成功')
})
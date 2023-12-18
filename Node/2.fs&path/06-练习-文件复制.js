/**
 *  需求： 
 *  复制video.mp4
 */

const fs = require('fs');
const process = require('process');

// 方式一 ：readFile
//读取文件
// const data = fs.readFileSync('./video.mp4');
// //写入文件
// fs.writeFileSync('./video-readFile.mp4', data);
// console.log(process.memoryUsage()); // rss(整个占用内存的大小) 36085760字节 => 34.5MB

// 方式二：流式操作
const rs = fs.createReadStream('./video.mp4');
const ws = fs.createWriteStream('./video-stream.mp4');
// rs.on('data', (data) => {
//     ws.write(data);
// });
// rs.on('end', () => {
//   console.log(process.memoryUsage()); // rss(整个占用内存的大小) 31555584字节 =>  30MB
// });
rs.pipe(ws);
rs.on('end', () => {
  console.log(process.memoryUsage()); // rss(整个占用内存的大小) 33341440字节 => 31.6MB
});
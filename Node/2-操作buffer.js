// buffer与字符串之间的转换
// let buf = Buffer.from([105,108,111,118,101,121,111,117])
// console.log(buf.toString())

// let buf = Buffer.from('hello')
// console.log(buf[0].toString(2)); // 01101000
// buf[0] = 98
// console.log(buf.toString());


//溢出
// let buf = Buffer.from('hello')
// buf[0] = 361 // 舍弃高位的数字 0001 0110 1001 => 0110 1001 => 0x69
// console.log(buf)

// 中文
let buf = Buffer.from('你好') // 中文在utf-8下占三个字节
console.log(buf)

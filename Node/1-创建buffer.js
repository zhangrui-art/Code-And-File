// 1. alloc
const buf = Buffer.alloc(10);
// console.log(buf);

// 2.allocUnsafe
const buf1 = Buffer.allocUnsafe(1000);
// console.log(buf1);

const buf3 = Buffer.from('hello')
console.log(buf3);

const fs = require('fs')

// 异步读取
fs.readFile('./观书有感.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log(data)
  }
})

// 同步读取
let data = fs.readFileSync('./观书有感.txt', 'utf-8') 
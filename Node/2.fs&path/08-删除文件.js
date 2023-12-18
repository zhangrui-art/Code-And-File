const fs = require('fs')

// unlink 删除 unlinkSync
fs.unlink('./paopao1.txt', (err) => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('删除成功')
  }
})

// rm 删除 rmSync
// recursive:它是一个布尔值，用于指定是否执行递归目录删除。在这种模式下，如果找不到指定的路径并且在失败时重试该操作，则不会报告错误。默认值为false
fs.rm('./paopao1.txt', { recursive: true }, (err) => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('删除成功')
  }
})
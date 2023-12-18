const fs = require('fs')

// 创建文件夹
// fs.mkdir('testMkDir',err => {
//   if(err){
//     console.log(err)
//     return
//   }else{
//     console.log('创建文件夹成功')
//   }
// })

// 递归创建文件夹
// fs.mkdir('./testMkDir/a/b/c/d',{recursive: true},err => {
//   if(err){
//     console.log(err)
//     return
//   }else{
//     console.log('创建文件夹成功')
//   }
// })

// 读取文件夹
// fs.readdir('../oldVersion',(err,files) => {
//   if(err){
//     console.log(err)
//     return
//   }else{
//     console.log(files)
//   }
// })

// 删除文件夹
// fs.rmdir('./testMkDir',{r},err => {
//   if(err){
//     console.log(err)
//     return
//   }else{
//     console.log('删除文件夹成功')
//   }
// })

// 递归删除文件夹 -> 不被推荐，推荐用fs.rm()
// fs.rmdir('./testMkDir',{recursive: true},err => {
//   if(err){
//     console.log(err)
//     return
//   }else{
//     console.log('删除文件夹成功')
//   }
// })

fs.rm('./testMkDir',{recursive: true},err => {
  if(err){
    console.log(err)
    return
  }else{
    console.log('删除文件夹成功')
  }
})
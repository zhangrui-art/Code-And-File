const fs = require('fs')

fs.stat('./video.mp4',(err, data) => {
  if(err){
    console.log(err)
    return  
  }else{
    console.log(data)
    // atime => 最后一次文件访问时间
    // mtime => 最后一次文件修改时间
    // ctime => 最后一次文件状态改变时间
    // birthtime => 文件被创建的时间
    
    // isFile
    console.log(data.isFile())
    // isDirectory
    console.log(data.isDirectory())
  }
})
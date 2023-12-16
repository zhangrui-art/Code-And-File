const fs = require('fs');

// 写入文件： 异步
fs.writeFile('./paopao.txt','大炮真帅',err => {
  // err 写入失败：错误对象  写入成功： null
  if(err){
    console.log(err);
    return 
  }else{
    console.log(err);
    console.log('写入成功');
  }
})

// 写入文件： 同步
fs.writeFileSync('./paopao1.txt','大炮真帅111')
const fs = require('fs');

fs.appendFile('./paopao.txt','，大家都帅', err => {
  // err 写入失败：错误对象  写入成功： null\
  if(err){
    console.log(err);
    return
  }else{
    console.log('写入成功');
  }
})

fs.appendFileSync('./paopao1.txt','\r\n在下叼的一')

// writeFile 实现追加写入
fs.writeFile('./paopao.txt','love love ',{flag: 'a'}, err => {
  if(err){
    console.log(err);
    return
  }else{
    console.log('写入成功');
  }
})
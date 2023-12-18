const fs = require('fs');

// 重命名
// fs.rename('./paopao.txt','./paosang.txt', err => {
//   if(err) {
//       console.log(err);
//       return
//   } else {
//       console.log('文件重命名成功');
//   }
// })

// 移动
fs.rename('../oldVersion/paopao.txt','./paosang.txt', err => {
  if(err) {
      console.log(err);
      return
  } else {
      console.log('文件移动成功');
  }
})  

// 同步
// fs.renameSync('./paosang.txt','./paopao.txt')
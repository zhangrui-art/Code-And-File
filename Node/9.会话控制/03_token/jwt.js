const jwt = require('jsonwebtoken');

// 生成token
// let token = jwt.sign(用户数据, 加密字符串, 配置对象)

// let token = jwt.sign({
//   username: '张三',
//   age: 16
// }, 'zhangdapao', {
//   expiresIn: 60 // 过期时间 单位是秒
// })

// console.log(token)

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuW8oOS4iSIsImFnZSI6MTYsImlhdCI6MTcwNDg5MTM2MiwiZXhwIjoxNzA0ODkxNDIyfQ.ymEn21xOm5FOCQ7jyA0XDQpUAoMMPx1Ig9f053_9Jwo'
// 校验token
jwt.verify(t, 'zhangdapao', (err, data) => {
  if (err) {
    console.log('校验失败')
  } else {
    console.log(data)
  }
})
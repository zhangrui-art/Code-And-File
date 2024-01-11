const jwt = require('jsonwebtoken')

const { secret } = require('../config/config') 

module.exports = (req, res, next) => {
  let token = req.get('token')
  if (!token) {
    res.json({
      code: '2003',
      data: [],
      msg: 'token缺失 '
    })
  }
  jwt.verify(token, secret, (err, data) => {
    if (err) {
      return res.json({
        code: '2004',
        data: [],
        msg: 'token错误'
      })
    }
    // 保存用户信息
    req.user = data 
    console.log(data);
    // token 校验成功
    next()
  })
}
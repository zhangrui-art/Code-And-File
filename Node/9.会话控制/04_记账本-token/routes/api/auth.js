var express = require('express');
var router = express.Router();
const UserModel = require('../../model/UserModel');
const md5 = require('md5');
const jsonwebtoken = require('jsonwebtoken');
const { secret } = require('../../config/config') 
// 登录操作
router.post('/login', (req, res) => {
  // 查询数据库
  const {username, password} = req.body;
  UserModel.findOne({username: username, password: md5(password)})
    .then((result) => {
      if (!result) {
        return res.json({
          code: '2002',
          msg: '用户名或密码错误',
          data: null
        })
      }
      let token = jsonwebtoken.sign({
        username: result.username,
      }, secret, {
        expiresIn: 60 * 60 * 24
      })
      res.json({
        code: '2000',
        msg: '登录成功', 
        data: token
      })
    }).catch((err) => { 
      res.json({
        code: '2001',
        msg: '数据库读取失败',
        data: null
      })
    });
})

// 退出登录
router.get('/logout', (req, res) => {
  // 清除session
  req.session.destroy(() => {
    res.render('success', {msg: '退出登录', url: '/login'})  
  })
})

module.exports = router;

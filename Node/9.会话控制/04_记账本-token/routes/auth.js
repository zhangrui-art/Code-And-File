var express = require('express');
var router = express.Router();
const UserModel = require('../model/UserModel');
const md5 = require('md5');
// 注册
router.get('/reg', (req, res) => {
  // 响应html
  res.render('reg', {})
})

router.post('/reg', (req, res) => {
  // 表单验证，此处不演示
  UserModel.create({...req.body, password: md5(req.body.password)} )
    .then((result) => {
      console.log(result);
      // res.status(200).send('注册成功')
      res.render('success', {msg: '注册成功', url: '/login'})
    }).catch((err) => {
      console.log(err);
      res.status(500).send('注册失败')
    });
  console.log(req.body);
})
// 登录页面
router.get('/login', (req, res) => {
  // 响应html
  res.render('login', {})
})
// 登录操作
router.post('/login', (req, res) => {
  // 查询数据库
  const {username, password} = req.body;
  UserModel.findOne({username: username, password: md5(password)})
    .then((result) => {
      if (!result) {
        return res.send('账号或密码错误')
      }
      req.session.username = result.username;
      req.session.password = result.password;
      req.session._id = result._id;
      res.render('success', {msg: '登录成功', url: '/account'})
    }).catch((err) => { 
      res.status(500).send('登录失败')
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

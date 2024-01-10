var express = require('express');
var router = express.Router();
const shortid = require('shortid')
const AccountModel = require('../model/AccountModel')
const moment = require('moment');

// 声明中间件检测登录
const checkLoginMiddleware = require('../middlewares/checkLogin')

/* GET home page. */
router.get('/account', checkLoginMiddleware, function (req, res, next) {
  AccountModel.find().sort({ amount: -1 })
    .then((result) => {
      console.log('查询成功');
      res.render('list', { listData: result, moment})
    }).catch((err) => {
      console.log('查询失败');
    });
});

// 添加页面
router.get('/account/create', checkLoginMiddleware, function(req, res, next) {
  res.render('create')
})

// 添加记录
router.post('/account', checkLoginMiddleware, function (req, res, next) {
  AccountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  })
    .then((result) => {
      console.log(result);
      res.render('success', { msg: "添加成功咯~~", url: "/account" })
    }).catch((err) => {
      console.log(err);
      res.status(403).send('添加失败')
    });
})

// 删除记录
router.get('/account/:id', checkLoginMiddleware, function (req, res, next) {
  AccountModel.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.render('success', { msg: "删除成功咯~~", url: "/account" })
    }).catch((err) => {
      res.render('删除失败')
    });
})

module.exports = router;

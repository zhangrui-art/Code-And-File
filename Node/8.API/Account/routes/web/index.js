var express = require('express');
var router = express.Router();
const shortid = require('shortid')
const moment = require('moment')
const AccountModel = require('../../model/AccountModel');
/* GET home page. */
router.get('/account',async function(req, res, next) {
  try {
    let listData = await AccountModel.find().sort({time: -1})
    res.render('list', {listData, moment})
  } catch (error) {
    console.log("失败");
  }
});

// 添加页面
router.get('/account/create', function(req, res, next) {
  res.render('create')
})

// 添加记录
router.post('/account', function(req, res, next) {
  AccountModel.create({
    ...req.body,
    time: moment(time).toDate()
  })
  .then(data => {
    console.log(data);
    res.render('success', { msg: "添加成功咯~~", url: "/account" })
  })
  .catch(err => {
    console.log(err);
    res.render('error', { msg: "添加失败咯~~" })
  })
})

// 删除记录
router.get('/account/:id',async function(req, res, next) {  await AccountModel.deleteOne({_id: req.params.id})
  res.render('success', { msg: "删除成功咯~~", url: "/account" })
})

module.exports = router;

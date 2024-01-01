var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)
 
/* GET home page. */
router.get('/account', function(req, res, next) {
  const listData = db.get('account').value()
  res.render('list',{listData})
});

router.get('/account/create', function(req, res, next) {
  res.render('create')
});

// 新增记录
router.post('/account', function(req, res, next) {
  var account = req.body;
  console.log(account);
  db.get('account').unshift({id: shortid(), ...req.body}).write()
  res.render('success',{msg: '添加成功了！',url: '/account'})
  // res.redirect('/account');
});

// 删除记录
router.get('/account/:id', function(req, res, next) {
  const id = req.params.id
  db.get('account').remove({id}).write()
  res.render('success',{msg: '删除成功了！',url: '/account'})
});

module.exports = router;

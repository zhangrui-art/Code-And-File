var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
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

router.post('/account', function(req, res, next) {
  var account = req.body;
  console.log(account);
  db.get('account').push(req.body).write()
  res.redirect('/account');
});

module.exports = router;

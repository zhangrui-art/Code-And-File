var express = require('express');
var router = express.Router();
const shortid = require('shortid')
const moment = require('moment')
const AccountModel = require('../../model/AccountModel');
/* GET home page. */
router.get('/account',async function(req, res, next) {
  try {
    let data = await AccountModel.find().sort({time: -1})
    // res.render('list', {listData, moment})
    // 响应成功的提示
    res.json({
      // 响应编号
      code: '0000',  // 表示成功: 20000  0000  000000
      // 响应的信息
      msg: '读取成功',
      // 响应的数据
      data: data,
    
    })
  } catch (error) {
    res.json({
      // 响应编号
      code: '1001',  
      // 响应的信息
      msg: '读取失败',
      // 响应的数据
      data: [],
    
    })
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
    time: moment(req.body.time).toDate()
  })
  .then(data => {
    console.log(data);
    res.json({
      // 响应编号
      code: '0000',  
      // 响应的信息
      msg: '添加成功',
      // 响应的数据
      data: data,
    })
  })
  .catch(err => {
    res.json({
      // 响应编号
      code: '1002',  
      // 响应的信息
      msg: '添加失败',
      // 响应的数据
      data: [],
    })
  })
})

// 删除记录
router.delete('/account/:id',function(req, res, next) {
  AccountModel.deleteOne({_id: req.params.id})
    .then((result) => {
      res.json({
        // 响应编号
        code: '0000',  
        // 响应的信息
        msg: '删除成功',
        // 响应的数据
        data: {},
      })
    }).catch((err) => {
      res.json({
        // 响应编号
        code: '1003',  
        // 响应的信息
        msg: '删除失败',
        // 响应的数据
        data: null,
      })
    });

})

// 获取单个账单信息
router.get('/account/:id',function(req, res, next) {
  AccountModel.findOne()
    .then((result) => {
      res.json({
        // 响应编号
        code: '0000',  
        // 响应的信息
        msg: '获取成功',
        // 响应的数据
        data: result,
      })
    }).catch((err) => {
      res.json({
        // 响应编号
        code: '1004',  
        // 响应的信息
        msg: '获取失败',
        // 响应的数据
        data: [],
      })
    });
})

// 更新单个账单信息
router.patch('/account/:id',function(req, res, next) {
  AccountModel.updateOne({_id: req.params.id}, req.body)
    .then((result) => {
      AccountModel.findById(req.params.id)
        .then((data) => {
          res.json({
            // 响应编号
            code: '0000',  
            // 响应的信息
            msg: '更新成功',
            // 响应的数据
            data: data,
          })
        })
        .catch((err) => {
          res.json({
            // 响应编号
            code: '1005',  
            // 响应的信息
            msg: '更新成功，读取失败',
            // 响应的数据
            data: null,
          })
        });
    })
    .catch((err) => {
      res.json({
        // 响应编号
        code: '1005',  
        // 响应的信息
        msg: '更新失败',
        // 响应的数据
        data: null,
    })
  });
})

module.exports = router;

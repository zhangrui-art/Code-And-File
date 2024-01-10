const express = require('express');
const moment = require('moment');
const router = express.Router();
const AccountModel = require('../../model/AccountModel');
const jwt = require('jsonwebtoken');

// 获取记录
router.get('/account', (req, res, next) => {
  let token = req.get('token')
  if (!token) {
    res.json({
      code: '2003',
      data: [],
      msg: 'token缺失 '
    })
  }
  jwt.verify(token, 'zhangdapao', (err, data) => {
    if(err) {
      return res.json({
        code: '2004',
        data: [],
        msg: 'token错误'
      })
    } 
    AccountModel.find().sort({time: -1})
    .then((result) => {
      res.json({
        code: '0000',
        data: result,
        msg: "读取成功"
      })
    }).catch((err) => {
      res.json({
        code: '1001',
        data: [],
        msg: '读取失败'
      })
    });    
  })

})

// 新增记录
router.post('/account', (req, res, next) => {
  AccountModel.create({
    time: moment(req.body.time).toDate(),
    ...req.body
  }).then((result) => {
    res.json({
      code: '0000',
      data: result,
      msg: "创建成功"
    })
  }).catch((err) => {
    res.json({
      code: '1002',
      data: null,
      msg: '创建失败'
    })
  });
})

// 删除记录
router.delete('/account/:id', (req, res, next) => {
  AccountModel.deleteOne({_id: req.params.id})
   .then((result) => {
      res.json({
        code: '0000',
        data: {},
        msg: "删除成功"
      })
    }).catch((err) => {
      res.json({
        code: '1003',
        data: null,
        msg: '删除失败'
      })
    })
})

// 更新单个记录
router.patch('/account/:id', (req, res, next) => {
  AccountModel.updateOne({_id: req.params.id}, {
   ...req.body
  }).then((result) => {
    AccountModel.findById(req.params.id)
    .then((result) => {
      res.json({
        code: '0000',
        data: result,
        msg: "更新成功"
      })
    }).catch((err) => {
      res.json({
        code: '1004',
        data: null,
        msg: '读取失败'
      })
    })
  }).catch((err) => {
    res.json({
      code: '1005',
      data: null,
      msg: '更新失败'
    })
  });
})

// 获取单个记录
router.get('/account/:id', (req, res, next) => {
  AccountModel.findOne({_id: req.params.id})
    .then((result) => {
      res.json({
        code: '0000',
        data: result,
        msg: "读取成功"
      })
    }).catch((err) => {
      res.json({
        code: '1006',
        data: null,
        msg: '读取失败'
      })
    });
})

module.exports = router
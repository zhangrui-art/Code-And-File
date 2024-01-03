/**
 * 1.导入mongoose模块
 * 2.连接mongodb 服务 (协议名称://IP地址:端口号/数据库名称)
 * 3.设置回调
 */
module.exports = function (success, error) {
// 1.导入mongoose模块
const mongoose = require('mongoose')

// 2.连接mongodb 服务 (协议名称://IP地址:端口号/数据库名称)
mongoose.connect('mongodb://127.0.0.1:27017/pao')

// 设置strictQuery 为true
mongoose.set('strictQuery', true)

// 3.设置回调
// 连接成功的回调 官方推荐使用 once
mongoose.connection.once('open', () => {
  success()
})

// 连接失败的回调
mongoose.connection.on('error', () => {
  console.log('数据库连接失败')
  error()
})
// 连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('数据库连接断开')
})


}
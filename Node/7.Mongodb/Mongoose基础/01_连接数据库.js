// 导入mongoose模块
const mongoose = require('mongoose')

// 连接mongodb 服务 (协议名称://IP地址:端口号/数据库名称)
mongoose.connect('mongodb://127.0.0.1:27017/pao')

// 设置strictQuery 为true
mongoose.set('strictQuery', true)

// 设置回调
// 连接成功的回调 官方推荐使用 once
mongoose.connection.once('open', () => {
  console.log('数据库连接成功')
})
// 连接失败的回调
mongoose.connection.on('error', () => {
  console.log('数据库连接失败')
})
// 连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('数据库连接断开')
})

// 关闭mongodb的连接
setTimeout(() => {
  mongoose.disconnect()
}, 2000);
// 1.导入mongoose模块
const mongoose = require('mongoose')

// 2.连接mongodb 服务 (协议名称://IP地址:端口号/数据库名称)
mongoose.connect('mongodb://127.0.0.1:27017/pao')

// 设置strictQuery 为true
mongoose.set('strictQuery', true)

// 3.设置回调
// 连接成功的回调 官方推荐使用 once
mongoose.connection.once('open', () => {
  // 4.创建文档的结构对象
  // 设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    isHot: Boolean,
    tags: Array,
    pub_time: Date,
    anyT: mongoose.Schema.Types.Mixed,
  })

  // 5.创建模型对象 对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema)

  // 6.新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 25.5,
    isHot: true,
    tags: ['神魔','传说'],
    pub_time: new Date(),
    anyT: {
      "one": "1",
      "two": "2"
    }
  }).then(res => {
    // 如果没有错误，则输出插入后的文档对象
    console.log(res)
    // 8. 关闭数据库连接 (项目运行过程中不会添加该代码)
    mongoose.disconnect()
  }).catch(err => {
    // 如果有错误，则输出错误信息
    console.log(err)
  })


})
// 连接失败的回调
mongoose.connection.on('error', () => {
  console.log('数据库连接失败')
})
// 连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('数据库连接断开')
})

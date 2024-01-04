const db = require('./db/db')
const mongoose = require('mongoose')
const BookModel = require('./models/BookModel')

db(
  () => {

    // 6.新增
    BookModel.create({
      name: '西游记',
      author: '吴承恩',
      price: 25.5
    }).then(res => {
      // 如果没有错误，则输出插入后的文档对象
      console.log(res)
      // 8. 关闭数据库连接 (项目运行过程中不会添加该代码)
      mongoose.disconnect()
    }).catch(err => {
      // 如果有错误，则输出错误信息
      console.log(err)
    })

  },
  () => {
  }
)




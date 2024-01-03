const db = require('./db/db')


  // 4.创建文档的结构对象
  // 设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
  })

  // 5.创建模型对象 对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema)

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


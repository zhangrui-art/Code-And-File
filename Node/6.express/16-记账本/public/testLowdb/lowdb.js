const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
// Set some defaults
// db.defaults({ usB: [] }).write()

// 写入数据
// db.get('usB').push({id: 3, title: "dio"}).write()

// 获取数据
// const data = db.get('usB').value()
// console.log(data)

// 获取单条数据
// const data = db.get('usB').find({id: 2}).value()
// console.log(data);

// 更新数据
db.get('usB').find({id: 2}).assign({title: 'dio2',id: 4}).write()


// 删除数据
// db.get('usB').remove({id: 1}).write()
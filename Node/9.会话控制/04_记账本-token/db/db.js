const mongoose = require('mongoose');
const { DBHOST, DBPORT, DBNAME } = require('../config/config');

module.exports = function (success, error) {
  if(typeof error!== 'function'){
    error = () => {
      console.log('连接失败');
    }
  }
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
  mongoose.set('strictQuery', true)
  mongoose.connection.once('open', () => {
    success()
  })
  mongoose.connection.on('error', (err) => {
    error(err)
  })
  mongoose.connection.on('close', () => {
    console.log('数据库连接断开');
  })

}
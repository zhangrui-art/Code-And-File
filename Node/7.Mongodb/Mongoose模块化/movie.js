const mongoose = require('mongoose');
const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

db(
  ()=>{
    MovieModel.create({
      name: 'The Godfather',
      director: 'Francis Ford Coppola',
    }).then((movie)=>{
      console.log(movie);
      // 8. 关闭数据库连接 (项目运行过程中不会添加该代码)
      mongoose.disconnect()      
    }).catch()
  })
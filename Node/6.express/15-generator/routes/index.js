var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const {formidable} = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', (req, res) => {
  let title = '文件上传'
  res.render('portrait',{title})
})

router.post('/portrait', (req, res, next) => {
  // 创建表单对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的上传目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true,
  });
  // const form = new formidable.IncomingForm();
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields); // text radio checkbox select
    // console.log(files);  // file
    // 服务器保存该图片的访问 URL
    let url = path.resolve(__dirname,'../public/images/'+ files.portrait[0].originalFilename)
    // 修改文件名
    fs.rename(path.resolve(__dirname,'../public/images/'+ files.portrait[0].newFilename), path.resolve(__dirname,'../public/images/'+ files.portrait[0].originalFilename), error => {
      if(error){
        console.log(error);
        return
      } 
      console.log('文件修改成功')
    })
    // res.json({ fields, files });
    res.send(url)
  });
  // res.send('上传成功')
})

module.exports = router;

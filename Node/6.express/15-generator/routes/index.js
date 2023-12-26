var express = require('express');
var router = express.Router();
const formidable = require('formidable');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', (req, res) => {
  let title = '文件上传'
  res.render('portrait',{title})
})

router.post('/portrait', (req, res) => {
  const form = formidable({});
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields);
    console.log(files);
    res.json({ fields, files });
  });
  res.send('上传成功')
})

module.exports = router;

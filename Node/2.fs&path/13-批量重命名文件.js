const fs = require('fs');

const files = fs.readdirSync('./');
files.forEach(file => {
  let data = file.split('-')
  if(!isNaN(data[0]) && (+data[0]< 10)){
    let newName = `0${data[0]}-${data[1]}`
    fs.renameSync(__dirname + '/' + file, __dirname + '/' +newName);
  }
});

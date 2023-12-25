const ejs = require('ejs');
const fs = require('fs');

let china = '中国'
let weather = '天气很好啊'

let str = fs.readFileSync('./01-html.html').toString()

let result = ejs.render(str, {china, weather})
console.log(result);
/**
 * 伪代码
 */

const path = require("path");

function require (file) {
  // 1.将相对路径转为绝对路径，定位目标文件
  let absolutePath = path.resolve(__dirname, file); 
  // 2. 缓存检测
  if (caches[absolutePath]){
    return caches[absolutePath];
  } else {
    // 3. 读取目标文件
    let code = fs.readFileSync(absolutePath, "utf-8");
    // 4.包裹为一个函数，然后执行
    let module = {} 
    let exports = module.exports = {} 
    (function (exports, require, module, __filename, __dirname) {
      const test = {
        name: 'test'
      }
      module.exports = test
      
      console.log(arguments.callee.toString());
    })(exports, require, module, __filename, __dirname)
    // 5. 缓存结果
    caches[absolutePath] = module.exports
    // 6. 返回module.exports的值
    return module.exports
  }
}
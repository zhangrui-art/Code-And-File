function tiemo() {
  console.log("贴膜....");
}
function niejiao() {
  console.log("捏脚....");
}

// 暴露数据, module.exports可以暴露任何数据
// module.exports = {
//   tiemo,
//   niejiao
// }


// exports 暴露数据
exports.tiemo = tiemo;
exports.niejiao = niejiao;
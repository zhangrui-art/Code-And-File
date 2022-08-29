function addClass(obj, cn){
    obj.className += " "+cn
}
// 定义是否含有指定class属性值
function hasClass(obj,cn){
    let reg = new RegExp("\\b"+cn+"\\b")
    return reg.test(obj.className)
}
// 删除一个元素指定的class属性
function remove(obj,cn){
    let reg = new RegExp("\\b "+cn+"\\b")
    obj.className = obj.className.replace(reg,"")
}
// toggle 用来切换一个类，有该类就删除，没有就添加
function toggleClass(obj,cn){
    hasClass(obj,cn)?remove(obj,cn):addClass(obj,cn)
}
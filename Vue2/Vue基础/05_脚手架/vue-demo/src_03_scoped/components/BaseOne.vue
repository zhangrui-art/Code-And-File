<template>
  <div>BaseOne</div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*
  scoped 原理： 
   1. 给当前组件模板的所有元素，都添加上一个自定义的属性
      data-v-hash值 区分开不同的组件
   2. css选择器后面，被自动处理，添加上属性选择器
   eg. div[data-v-hash值]
*/

div {
  border: 1px solid blue;
  padding: 10px;
}
</style>
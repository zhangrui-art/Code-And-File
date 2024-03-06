<template>
  <div class="userInfo">
    <h3>我是个人信息组件</h3>
    <p>姓名：{{ username }}</p>
    <p>年纪：{{ age }}</p>
    <p>是否单身：{{ isSingle }}</p>
    <p :style="{color: car.color}">座驾：{{ car.brand }}</p>
    <p>兴趣爱好：{{ lobby.join('、') }}</p>
  </div>
</template>

<script>
export default {
  props: ['username','age','isSingle','car','lobby']
}
</script>

<style>
.userInfo {
  width: 250px;
  height: 260px;
  border: 3px solid #000;
  padding-left: 20px;
}
</style>
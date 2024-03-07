<template>
  <div class="grandSon" :style="{ borderColor: color}">
    我是GrandSon组件 <br>
    <strong>{{ userInfo.name }}-{{ userInfo.age }}</strong>
    
  </div>
</template>

<script>
export default {
  inject: ['color', 'userInfo']
}
</script>

<style>
  .grandSon {
    width: 180px;
    height: 80px;
    border: 1px solid #000;
  }
</style>
<template>
  <div id="app">
    <div class="aquamarine">
      <div @click.stop="blue" class="blue"></div>
    </div>
  </div>
</template>
<script>
  // 导出的是当前组件的配置项
  // 里面可以提供data(特殊) methods computed watch 生命周期八大钩子
  export default {
    methods: {
      blue() {
        alert('blue')
      }
    }  
    
  }
</script>


<style lang="less">
  .aquamarine {
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    .blue {
      width: 100px;
      height: 100px;
      background-color: rgb(61, 61, 236);
    }
  }
</style>
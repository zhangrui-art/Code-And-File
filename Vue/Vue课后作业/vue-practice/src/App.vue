<template>
  <div class="app">
    <div class="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索页</router-link>
    </div>
    <router-view></router-view>
  
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .app {
    width: 100%;
    height: 100%;
    text-align: center;
    .header {
      width: 100%;
      height: 50px;
      background-color: #495150;
      text-align: left;
      a {
        height: 100%;
        width: 100px;
        box-sizing: border-box;
        border: none;
        background-color: #ad2a26;
        color: #fff;
        font: 16px sans-serif;
        display: inline-block;
        line-height: 50px;
        text-align: center;   
        text-decoration: none;     
        border-radius: 5px;
        margin-right: 10px;
      }
    }
  }
</style>
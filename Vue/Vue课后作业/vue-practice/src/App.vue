<template>
  <div class="app">
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.app {
  a {
    background-color: aquamarine;
    margin: 10px 20px;
    display: inline-block;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
  }
}
</style>
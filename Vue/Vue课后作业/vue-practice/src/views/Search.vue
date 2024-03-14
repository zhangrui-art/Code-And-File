<template>
  <div class="search">
    <div>搜索关键词:{{ $route.params.name}}</div>
    <div>搜索结果</div>
    <ul>
      <li>搜索结果1</li>
      <li>搜索结果1</li>
      <li>搜索结果1</li>
      <li>搜索结果1</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MySearch'
}
</script>

<style lang="less" scoped>
  .search {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    position: absolute;
    width: 450px;
    height: 250px;
    border: 2px solid #c4c7ce;
    border-radius: 5px;
    div, li {
      text-align: left;
      margin-left: 20px;
      margin-top: 10px;
    }
  }
</style>
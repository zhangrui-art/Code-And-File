<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      value: 3
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 300px;
  height: 100px;
  background: aquamarine;
}
</style>

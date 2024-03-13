<template>
  <div class="search">
    <p>当前搜索条件为{{ $route.query.name }}</p>
  </div>
</template>

<script>
export default {
  name: "MySearch",
  created() {
    console.log(this.$route.query.name);
  }
}
</script>

<style scoped>

</style>
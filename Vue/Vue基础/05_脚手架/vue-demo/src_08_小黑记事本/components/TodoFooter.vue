<template>
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count">合 计:<strong> {{this.list.length}} </strong></span>
    <!-- 清空 -->
    <button @click="remove" class="clear-completed">清空任务</button>
  </footer>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    remove() {
      this.$emit('removeAll', [])
    }
  }
};
</script>

<style>
</style>
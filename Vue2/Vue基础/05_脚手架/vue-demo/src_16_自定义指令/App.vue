<template>
  <div>
    <input v-focus type="text">
  </div>
</template>

<script>
export default {
  directives: {
    // 指令名： 指令的配置项
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>
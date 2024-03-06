<template>
  <div>
    <!-- 3. 渲染使用 -->
    {{ title }} 我是Son组件 
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  // 2. 通过props进行接受
  props: ['title'],
  methods: {
    changeFn() {
      this.$emit('changeTitle', '教育你，犬子')
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
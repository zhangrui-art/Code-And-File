<template>
    <header class="header">
    <h1>小黑记事本</h1>
    <input @keyup.enter="addTodo" v-model="content" placeholder="请输入任务" class="new-todo" />
    <button @click="addTodo" class="add">添加任务</button>
  </header>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      content: "",
    }
  },
  mounted() {
    document.querySelector(".new-todo").focus()
  },
  methods: {
    addTodo() {
      this.$emit("add", [
        {
          id: Math.random()*100,
          content: this.content,
        },
        ...this.list
      ])
      this.content = ""
    }
  }
}
</script>

<style>

</style>
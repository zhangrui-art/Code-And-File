<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <TodoHeader :list="list" @add="handle"></TodoHeader>
    <!-- 列表区域 -->
    <TodoMain :list="list"  @del="handle"></TodoMain>
    <!-- 统计和清空 -->
    <TodoFooter :list="list" @removeAll="handle"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  created () {
    this.list = JSON.parse(localStorage.getItem('list')) || [
        {
          id: "01",
          content: "吃饭饭",
        }
      ]
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    handle (value) {
      this.list = value
    }
  },
  watch: {
    list: {
      deep: true,
      handler (value) {
        localStorage.setItem('list', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>

</style>

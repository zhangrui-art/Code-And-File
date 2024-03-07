<template>
  <div class="app">
    我是父组件
    我给子组件的值为 {{ value }}
    <hr>
    <MyCount :nb="value"></MyCount>
  </div>
</template>

<script>
import MyCount from './components/MyCount.vue';
import Bus from './utils/EventBus'
export default {
  created() {
    Bus.$on('change', (val) => {
      this.value = val
    })
  },
  data () {
    return {
      value: "100"
    }
  },
  methods: {
  },
  components: {
    MyCount
  }
}
</script>

<style scoped>
.app {
  border: 1px solid rgb(20, 66, 194);
  padding: 20px;
}
</style>
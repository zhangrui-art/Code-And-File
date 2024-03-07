<template>
  <div class="app">
    我是父组件
    我给子组件的值为 {{ value }}
    <hr>
    <MyCount :nb="value" @changeNB="changeNBValue"></MyCount>
  </div>
</template>

<script>
import MyCount from './components/MyCount.vue';
export default {
  data () {
    return {
      value: "100"
    }
  },
  methods: {
    changeNBValue (newVal) {
      console.log(newVal);
      this.value = newVal
    }
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
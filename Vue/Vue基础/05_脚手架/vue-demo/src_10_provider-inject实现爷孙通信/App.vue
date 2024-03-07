<template>
  <div class="app">
    <p>我是App组件<button @click="changeData">修改数据</button></p>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
  provide() {
    return {
      color: this.color,
      userInfo: this.userInfo
    }
  },
  data() {
    return {
      color: 'pink',
      userInfo: {
        name: "zdp",
        age: 18
      }
    }
  },
  methods: {
    changeData() {
      // this.color = 'aquamarine'
      this.userInfo.name = 'ls'
    }
  },
  components: {
    SonA,
    SonB,
  }
}
</script>

<style>
  .app {
    width: 300px;
    height: 340px;
    border: 2px solid #000;
    text-align: center;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
</style>
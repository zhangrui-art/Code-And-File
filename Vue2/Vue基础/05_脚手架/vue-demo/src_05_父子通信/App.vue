<template>
  <div>
    我是App组件
    <span>{{ myTitle }}</span>
    <!-- 1. 给组件标签，添加属性的方式传值 -->
    <MySon :title="myTitle" @changeTitle="handleChange"></MySon>
  </div>
</template>

<script>
import MySon from './components/MySon.vue'
export default {
  components: {
    MySon,
  },
  methods: {
    handleChange(newValue) {
      this.myTitle = newValue
    }
  },
  data() {
    return {
      myTitle: 'My son 长大了'
    }
  }
}
</script>

<style>
  div{
    border: 2px solid #000;
    padding:10px
  }
</style>
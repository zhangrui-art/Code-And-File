<template>
  <div class="son">
    我是子组件 <br>
    父组件给我的值为 {{ nb }} <br>
    <button @click="changeValue">改变值</button>
  </div>
</template>

<script>
export default {
  props: ['nb'],
  methods: {
    changeValue () {
      this.$emit('changeNB', '哈哈哈哈哈不nb')
    }
  }
}
</script>

<style>
  .son {
    border: 1px solid rgb(224, 21, 92);
    padding: 10px;
  }
</style>
<template>
  <div class="app">
    <h4>父组件 -- <button>获取组件实例</button></h4>
    <BaseForm ref="baseFrom"></BaseForm>
    <button @click="getFormData">获取数据</button>
    <button @click="resetFormData">重置数据</button>    
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
    getFormData() {
      this.$refs.baseFrom.getFormData()
    },
    resetFormData() {
      this.$refs.baseFrom.resetFormData()
    }
  }
}
</script>

<style>
button{
  margin-right: 8px;
}
</style>
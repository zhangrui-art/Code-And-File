<template>
  <div class="app">
    <h4>父组件 -- <button>获取组件实例</button></h4>
    <BaseForm ref="myForm"></BaseForm>
    <div>
      <button @click="getFormData">获取数据</button>
      <button @click="resetFormData">重置数据</button>
    </div>    
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
      this.$refs.myForm.getFormData() 
    },
    resetFormData() {
      this.$refs.myForm.resetFormData() 
    },
  }
}
</script>

<style>
</style>
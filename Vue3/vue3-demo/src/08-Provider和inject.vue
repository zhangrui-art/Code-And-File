<script setup>
import CenterCom from '@/components/center-com.vue'
import { provide, ref } from 'vue';

const count = ref(100)
provide('themeColor', 'aquamarine')
provide('count', count)
provide('changeCount', (newVal) => {
  count.value = newVal
})
</script>
<template>
  <div class="pad">
    <h3>我是顶层组件 <button @click="count++">改变</button></h3>
    <CenterCom></CenterCom>
  </div>
</template>
<style scoped>
.pad {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
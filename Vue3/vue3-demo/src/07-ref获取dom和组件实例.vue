<script setup>
import TestCom from '@/components/test-com.vue'
import { onMounted, ref } from 'vue';
const inp = ref(null)
const testCom = ref(null)
onMounted(() => {
  // console.log(inp.value);
  // inp.value.focus()
})
const focusFn = () => {
  inp.value.focus()
}
const getCom = () => {
  console.log(testCom.value);
  console.log(testCom.value.count);
  console.log(testCom.value.sayHi());
}
</script>
<template>
  <div>
    <input ref="inp" type="text">
    <button @click="focusFn">点击聚焦输入框</button>
    <button @click="getCom">获取组件</button>
    <TestCom ref="testCom"></TestCom>
  </div>
</template>
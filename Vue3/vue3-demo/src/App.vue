<script setup>
import MyInput  from '@/components/my-input.vue'
import { ref, defineOptions } from 'vue'
defineOptions({
  name: 'FullApp'
})
const inpVal = ref('4789')
</script>
<template>
  <div>
    <MyInput
      v-model="inpVal"
    ></MyInput>
    <div>{{inpVal}}</div>
  </div>
</template>
<style scoped>

</style>
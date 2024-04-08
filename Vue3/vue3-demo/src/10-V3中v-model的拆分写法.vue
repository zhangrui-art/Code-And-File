<script setup>
import TestSon from '@/components/test-son.vue'
import { ref, defineOptions } from 'vue'
defineOptions({
  name: 'FullApp'
})
const inpVal = ref('123')
</script>
<template>
  <div>
    <TestSon
      v-model="inpVal"
    ></TestSon>
    <div>{{inpVal}}</div>
  </div>
</template>
<style scoped>

</style>
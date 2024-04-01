<script setup>
// import { reactive } from 'vue';
// const state = reactive({
//   count: 100
// })
import { ref } from 'vue';
const count = ref(0)
const setCount = () => {
  count.value++
}
</script>
<template>
  <div>
    <div>{{ count }}</div>
    <button @click="count++">+</button>
    <button @click="setCount">+</button>
  </div>
</template>
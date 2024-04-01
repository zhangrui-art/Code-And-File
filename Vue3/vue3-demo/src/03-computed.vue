<script setup>
import { computed, ref } from 'vue';
const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const filterArr = computed(() => {
  return arr.value.filter(item => item > 5);
})
const addArray = () => {
  arr.value = [...arr.value, 11, 12, 13];
}
</script>
<template>
  <div>
    {{ filterArr }}
    <button @click="addArray">addArray</button>
  </div>
</template>
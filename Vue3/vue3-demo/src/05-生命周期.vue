<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated,onUnmounted } from 'vue';

onBeforeMount(() => {
  console.log('onBeforeMount');
});
onMounted(() => {
  console.log('onMounted');
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});
onUpdated(() => {
  console.log('onUpdated');
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});
onUnmounted(() => {
  console.log('onUnmounted');
});
</script>
<template>
  <div>
  </div>
</template>
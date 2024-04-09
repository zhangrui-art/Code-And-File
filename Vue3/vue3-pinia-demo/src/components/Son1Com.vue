<script setup>
import { useCounterStore } from '@/store/counter';
const counterStore = useCounterStore();
useCounterStore
</script>

<template>
  <div>
    <h3>我是Son1Com- {{ counterStore.count }} - <button @click="counterStore.addCount">+</button></h3>
  </div>
</template>

<style scoped>
</style>

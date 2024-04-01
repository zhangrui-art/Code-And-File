<script setup>
import { inject } from 'vue';
const themeColor = inject('themeColor')
const count = inject('count')
const changeCount = inject('changeCount')
</script>
<template>
  <div class="pad">
    <h3 :style="{ color: themeColor }">我是底层组件--{{ count }}-- <button @click="changeCount(1000000 )">改变count</button></h3>
  </div>
</template>
<style scoped>
.pad {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
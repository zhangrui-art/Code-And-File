<script setup>
import BottomCom from '@/components/bottom-com.vue'
import { inject } from 'vue';
const themeColor = inject('themeColor')
</script>
<template>
  <div class="pad">
    <h3 :style="{ color: themeColor }">我是中间组件</h3>
    <BottomCom></BottomCom>
  </div>
</template>
<style scoped>
.pad {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
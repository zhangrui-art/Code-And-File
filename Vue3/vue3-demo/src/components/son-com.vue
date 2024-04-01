<script setup>
const props = defineProps({
  car: {
    type: String,
    default: '拉法'
  },
  money: Number
})
console.log(props);
const emit = defineEmits(['costMoney'])
const buy = () => {
  emit('costMoney', 1000)
}
</script>
<template>
  <div class="son">
    <div>son-com</div>
    <div>{{ car }}--{{ money }}</div>
    <button @click="buy">购买</button>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #999;
  padding: 30px;
}
</style>
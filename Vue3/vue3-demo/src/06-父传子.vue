<script setup>
import { ref } from 'vue'
import SonCom from '@/components/son-com.vue'
const money = ref(100_000_000)
const costMoney = (newVal) => {
  money.value = newVal
}
</script>
<template>
  <div>
    <div>Father- com </div>
    <SonCom 
      car="小米su7" 
      :money="money"
      @costMoney="costMoney"
    ></SonCom>
    <button @click="money *=100">挣钱</button>
    <div></div>

  </div>
</template>
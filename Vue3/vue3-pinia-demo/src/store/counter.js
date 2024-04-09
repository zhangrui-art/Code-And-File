import { defineStore } from "pinia";
import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  // 声明state
  const count = ref(100)
  // 声明操作数据的方法
  const addCount = () => {
    count.value++
  }
  const subCount = () => {
    count.value--
  }
  // 声明基于数据的计算属性
  const doubleCount = computed(() => count.value * 2)
  const msg = ref('我是Vu3的pinia使用')

  return {
    count,
    addCount,
    subCount,
    doubleCount,
    msg
  }
}, {
  persist: true
})
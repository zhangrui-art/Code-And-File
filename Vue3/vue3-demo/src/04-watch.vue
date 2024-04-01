<script setup>
import { ref, watch } from 'vue';
const name = ref('张三')
const age = ref(18)
const changeName = () => {
  name.value = '李四'
}
const changeAge = () => {
  age.value = 20
}
// 监视单个
// watch(name, (newVal, oldVal) => {
//   console.log('name', newVal, oldVal)
// })

// 监视多个
// watch([name, age], (newVal, oldVal) => {
//   console.log('name，age', newVal, oldVal)
// })

const userInfo = ref({
  name: 'paopao',
  age: 18
})
const changeUserInfo = () => {
  userInfo.value.age = 15
}
watch(() => userInfo.value.age, (newVal, oldVal) => {
  console.log(newVal, oldVal);
})
</script>
<template>
  <div>
    <div>姓名：{{name}}</div>
    <div>年龄：{{age}}</div>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <hr>
    <div>{{ userInfo }}</div>
    <button @click="changeUserInfo">change UserInfo</button>
  </div>
</template>
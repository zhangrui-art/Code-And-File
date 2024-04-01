<script setup>

const count = 9999
const sayHi = () => {
  console.log('hi')
  return 'wdnmd hi'
}
defineExpose({ sayHi,count })
</script>
<template>
  <div>
    我是测试组件 -{{ count }}
  </div>
</template>
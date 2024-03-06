<template>
  <div>
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 999
    }
  }
}
</script>

<style scoped>
div{
  font: 30px/40px Arial;
  line-height: 40px;
}
button {
  width: 40px;
  height: 40px;
}
span {
  vertical-align: middle;
}
</style>
<template>
  <div>
    <h3 v-color="red">指令的值a</h3>
    <h3 v-color="aqua">指令的值b</h3>
    <button @click="red='yellow'">change a</button>
    <button @click="aqua='orange'">change b</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: 'red',
      aqua: 'aqua',
    }
  },
  directives: {
    color: {
      inserted(el, binding) {
        el.style.color = binding.value
      },
      update(el, binding) {
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style>

</style>
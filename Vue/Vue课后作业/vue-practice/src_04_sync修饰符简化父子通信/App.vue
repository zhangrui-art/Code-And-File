<template>
  <div class="app">
    <MyInput :transValue.sync="inputValue"></MyInput>
  </div>
</template>

<script>
import MyInput from './components/MyInput.vue';
export default {
  components: {
    MyInput
  },
  data() {
    return {
      inputValue: "I love Hooo" 
    }
  }
}
</script>

<style>

</style>
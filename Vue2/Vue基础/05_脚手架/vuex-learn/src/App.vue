<template>
  <div class="app">
    <h2>根组件--{{ $store.state.count}}</h2>
    <input :value="$store.state.count" @input="changeFn" type="text">
    <SonOne></SonOne>
    <SonTwo></SonTwo>
  </div>
</template>

<script>
import SonOne from '@/components/Son1.vue'
import SonTwo from '@/components/Son2.vue'
export default {
  components: {
    SonOne,
    SonTwo
  },
  methods: {
    changeFn (e) {
      this.$store.commit('changeCount', +e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
  .app {
    width: 450px;
    height: auto;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>

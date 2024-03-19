<template>
  <div class="app">
    <h2>{{ $store.state.title }}</h2>
    <input :value="$store.state.count" @input="changeInput" type="text">
    <OriginMethod></OriginMethod>
    <ReflectMethod></ReflectMethod>
  </div>
</template>

<script>
import OriginMethod from './components/OriginMethod.vue'
import ReflectMethod from './components/ReflectMethod.vue'
export default {
  components: {
    OriginMethod,
    ReflectMethod
  },
  methods: {
    changeInput (e) {
      this.$store.commit('changeInput', +e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
  .app {
    width: 500px;
    height: auto;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>

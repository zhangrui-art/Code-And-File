<template>
  <div class="sonOne">
    <h2>Son1子组件--不用映射</h2>
    <p>从vuex中获取的值：{{ $store.state.count }}</p>
    <button @click="addCount(1)" type="">值+1</button>
    <button @click="addCount(5)" type="">值+5</button>
    <button @click="addCount(10)" type="">值+10</button>
    <button @click="addAsync(1)" type="">一秒后+1</button>
    <hr>
    {{ $store.getters.filterList }}
  </div>
</template>

<script>
export default {
  name: 'SonOne',
  methods: {
    addCount (n) {
      this.$store.commit('addCount', n)
    },
    addAsync (n) {
      this.$store.dispatch('addCountAsync', n)
    }
  }
}
</script>

<style lang="less" scoped>
  .sonOne {
    margin: 10px 0;
    width: 380px;
    height: auto;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>

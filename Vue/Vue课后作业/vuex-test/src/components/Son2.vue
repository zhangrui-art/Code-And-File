<template>
  <div class="sonTwo">
    <h2>Son2子组件——映射写法</h2>
    <p>从vuex中获取的值：{{ count }}</p>
    <button @click="addCount(1)" type="">值+1</button>
    <button @click="addCount(5)" type="">值+5</button>
    <button @click="addCount(10)" type="">值+10</button>
    <button @click="addCountAsync(1)" type="">一秒后+1</button>
    <hr>
    {{ filterList }}
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'SonTwo',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['filterList'])
  },
  methods: {
    ...mapMutations(['addCount']),
    ...mapActions(['addCountAsync'])
  }
}
</script>

<style lang="less" scoped>
  .sonTwo {
    margin: 10px 0;
    width: 380px;
    height: auto;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>

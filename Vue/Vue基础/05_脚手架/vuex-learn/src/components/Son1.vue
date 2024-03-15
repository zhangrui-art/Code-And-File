<template>
  <div class="sonOne">
    <h2>Son1 子组件</h2>
    <p>从vuex中获取的值：{{ count }}</p>
    <button>值+1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SonOf1',
  computed: {
    ...mapState(['title', 'count'])
  }
}
</script>

<style scoped>
  .sonOne {
    top: 0;
    left: 0;
    margin-top: 10px;
    position: relative;
    width: 300px;
    height: 140px;
    border: 1px solid #ccc;
  }
</style>

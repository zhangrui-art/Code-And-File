<template>
  <div class="app">
    <h2>根组件
      -- {{ title }}
      -- {{ count }}
    </h2>
    <input type="text">
    <Son1></Son1>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from '@/components/Son1'
import Son2 from '@/components/Son2'
import { mapState } from 'vuex'
console.log(mapState(['title', 'count']))
export default {
  components: {
    Son1,
    Son2
  },
  computed: {
    ...mapState(['title', 'count'])
  }
}
</script>

<style scoped>
  .app {
    position: absolute;
    width: 500px;
    height: 400px;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>

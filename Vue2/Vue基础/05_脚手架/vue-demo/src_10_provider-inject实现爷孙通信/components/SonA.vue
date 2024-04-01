<template>
  <div class="sonA">
    我是SonA组件
    <GrandSon></GrandSon>
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue'
export default {
  components: {
    GrandSon
  }
}
</script>

<style>
  .sonA {
    width: 260px;
    height: 120px;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
</style>
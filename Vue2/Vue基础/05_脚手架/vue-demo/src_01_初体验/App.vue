<template>
  <div class="box">
    <PaoHeader></PaoHeader>
    <PaoMain></PaoMain>
    <PaoFooter></PaoFooter>
  </div>
</template>

<script>
import PaoHeader from './components/PaoHeader.vue'
import PaoMain from './components/PaoMain.vue'
import PaoFooter from './components/PaoFooter.vue'
export default {
  components: {
    PaoHeader,
    PaoMain,
    PaoFooter
  },
}
</script>

<style>
  .box{
    width: 350px;
    height: 500px;
    background-color: aquamarine;
    padding: 10px;
    color: white;
  }
</style>
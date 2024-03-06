<template>
  <div>
    <BaseProgress :w="width"></BaseProgress>
  </div>
</template>

<script>
import BaseProgress from './components/BaseProgress.vue'
export default {
  components: {
    BaseProgress
  },
  data() {
    return {
      width: 50
    }
  }
}
</script>

<style>

</style>
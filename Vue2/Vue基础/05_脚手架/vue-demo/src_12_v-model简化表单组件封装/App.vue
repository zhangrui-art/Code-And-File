<template>
  <div class="app">
    <BaseSelect v-model="selectId"></BaseSelect>
    
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'

export default {
  components: {
    BaseSelect
  },
  data() {
    return {
      selectId: "102"
    }
  }
}
</script>

<style>

</style>
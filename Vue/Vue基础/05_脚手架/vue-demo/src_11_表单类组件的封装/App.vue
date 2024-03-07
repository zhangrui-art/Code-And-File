<template>
  <div class="app">
    <BaseSelect 
      :cityId="selectId"
      @changeId="selectId = $event"
    >
    </BaseSelect>
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
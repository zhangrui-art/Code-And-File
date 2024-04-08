<script setup>
defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const changeValue = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
<template>
  <div>
    <input :value="modelValue" @input="e => changeValue(e)" type="text">
  </div>
</template>
<style scoped>

</style>
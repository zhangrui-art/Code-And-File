<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <div class="extra"><slot name="extra"></slot></div>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

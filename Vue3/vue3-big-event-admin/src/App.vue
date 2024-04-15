<script setup>
import zhCN from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <div>
    <el-config-provider :locale="zhCN">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style scoped></style>

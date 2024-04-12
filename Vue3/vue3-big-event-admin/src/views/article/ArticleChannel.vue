<script setup>
import { artGetChannelsService } from '@/api/article'
import { ref, onMounted } from 'vue'
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  console.log(res.data)
  channelList.value = res.data.data
}
onMounted(() => {
  getChannelList()
})
</script>
<template>
  <PageContainer title="文章频道">
    <template #extra>
      <el-button type="primary">添加分类</el-button>
    </template>
    <div>
      <div v-for="item in channelList" :key="item.id">内容</div>
    </div>
  </PageContainer>
</template>

<style scoped lang="scss"></style>

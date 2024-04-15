<script setup>
import { artDeleteChannelsService, artGetChannelsService } from '@/api/article'
import { ref, onMounted } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelEdit from './components/ChannelEdit.vue'
import { ElDialog } from 'element-plus'
const channelList = ref([])
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  console.log(res.data)
  channelList.value = res.data.data
  loading.value = false
}
onMounted(() => {
  getChannelList()
})
const loading = ref(false)
const dialog = ref()
const onEditChannel = (row) => {
  dialog.value.open(row)
}
const addChannel = () => {
  dialog.value.open({})
}
const onSuccess = () => {
  getChannelList()
}
const onDeleteChannel = async (row) => {
  await ElMessageBox.confirm('确认删除吗？', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
  const res = await artDeleteChannelsService(row.id)
  console.log(res)
  getChannelList()
  ElMessage({
    type: 'success',
    message: '删除成功'
  })
}
</script>
<template>
  <PageContainer title="文章频道">
    <template #extra>
      <el-button @click="addChannel" type="primary">添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column width="100" type="index" label="序号"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column width="150" label="操作">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDeleteChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="无数据" />
      </template>
    </el-table>
    <ChannelEdit ref="dialog" @success="onSuccess" />
  </PageContainer>
</template>

<style scoped lang="scss"></style>

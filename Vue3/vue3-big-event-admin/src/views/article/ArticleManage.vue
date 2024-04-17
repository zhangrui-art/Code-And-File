<script setup>
import ChannelSelect from './components/ChannelSelect.vue'
import ArticleEdit from './components/ArticleEdit.vue'
import { formatTime } from '@/utils/format'
import { artDeleteInfoService, artGetListService } from '@/api/article'
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'

// 定义请求参数对象
const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})
const articleList = ref([])
const total = ref(0)
const loading = ref(false)
const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
getArticleList()

// 处理分页逻辑
const onSizeChange = (val) => {
  params.value.pagenum = 1
  params.value.pagesize = val
  getArticleList()
}
const onCurrentChange = (val) => {
  params.value.pagenum = val
  getArticleList()
}
const onSearch = () => {
  params.value.pagenum = 1
  getArticleList()
}
const onReset = () => {
  params.value = {
    pagenum: 1,
    cate_id: '',
    state: ''
  }
  getArticleList()
}
const articleRef = ref(null)
const onAddArticle = () => {
  articleRef.value.open({})
}

const onEditArticle = (row) => {
  articleRef.value.open(row)
}
// 删除逻辑
const onDeleteArticle = async (row) => {
  // 提示用户是否要删除
  await ElMessageBox.confirm('是否要删除该文章?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  await artDeleteInfoService(row.id)
  ElMessage.success('删除成功')
  getArticleList()
}

const onSuccess = (msg) => {
  if (msg === 'add') {
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
  }
  getArticleList()
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button @click="onAddArticle" type="primary"> 添加文章 </el-button>
    </template>
    <!-- 表单区域 -->
    <el-form inline>
      <el-form-item label="文章分类">
        <ChannelSelect v-model="params.cate_id"></ChannelSelect>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSearch" type="primary">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格区域 -->
    <el-table :data="articleList" v-loading="loading">
      <el-table-column label="文章标题" prop="title">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="cate_name"> </el-table-column>
      <el-table-column label="发表时间" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state"> </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditArticle(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDeleteArticle(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页区域 -->
    <el-pagination
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[3, 5, 10]"
      background
      layout="jumper, total, sizes, prev, pager, next "
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
    />

    <!-- 抽屉 -->
    <ArticleEdit ref="articleRef" @success="onSuccess" />
  </PageContainer>
</template>

<style scoped lang="scss">
.el-form-item {
  width: 300px;
}
.el-pagination {
  margin-top: 20px;
  justify-content: flex-end;
  ::v-deep .is-active {
    background-color: #005795 !important;
  }
}
</style>

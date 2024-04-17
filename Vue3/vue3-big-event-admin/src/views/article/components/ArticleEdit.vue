<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import ChannelSelect from './ChannelSelect.vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {
  artAddListService,
  artGetArticleInfoService,
  artUpdateListService
} from '@/api/article'
import { ElMessage } from 'element-plus'
import { baseURL } from '@/utils/request'
import { imgUrlToFile } from '@/api/imageToFile'
const visibleDrawer = ref(false)
const defaultForm = ref({
  title: '',
  cate_id: '',
  content: '',
  cover_img: '',
  state: '已发布'
})
const formModel = ref({ ...defaultForm.value })
const imgUrl = ref('')
// 组件对外暴露一个方法open
// open({}) => 表单无需渲染，是添加
// open({ id, cate_name, ...}) => 表单需要渲染，是编辑
// open 调用后需要打开弹窗
const editorRef = ref(null)
const open = (row) => {
  visibleDrawer.value = true
  if (row.id) {
    getArticleInfo(row.id)
  } else {
    formModel.value = { ...defaultForm.value }
    imgUrl.value = ''
    editorRef.value.setHTML('')
  }
}

const getArticleInfo = async (id) => {
  const res = await artGetArticleInfoService(id)
  formModel.value = res.data.data
  imgUrl.value = baseURL + res.data.data.cover_img
  formModel.value.cover_img = await imgUrlToFile(
    baseURL + res.data.data.cover_img,
    res.data.data.cover_img
  )
}
const onSelectFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
  formModel.value.cover_img = uploadFile.raw
  console.log('Request', formModel.value.cover_img)
}
const emit = defineEmits(['success'])
const onPublish = async (state) => {
  formModel.value.state = state
  const formatFormData = new FormData()
  for (const key in formModel.value) {
    formatFormData.append(key, formModel.value[key])
  }
  if (formModel.value.id) {
    await artUpdateListService(formatFormData)
    ElMessage.success('修改成功')
    visibleDrawer.value = false
    emit('success', 'edit')
  } else {
    console.log(
      '%c FormData',
      'background-color:aqua;color: white;font-size: 40px',
      formModel.value
    )
    await artAddListService(formatFormData)
    ElMessage.success('发布成功')
    visibleDrawer.value = false
    emit('success', 'add')
  }
}
defineExpose({ open })
</script>

<template>
  <el-drawer
    v-model="visibleDrawer"
    :title="formModel?.id ? '编辑文章' : '添加文章'"
    direction="rtl"
    size="50%"
    append-to-body
  >
    <el-form>
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入文章标题" />
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <ChannelSelect v-model="formModel.cate_id"></ChannelSelect>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          autoUpload="false"
          :onChange="onSelectFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <QuillEditor
            theme="snow"
            v-model:content="formModel.content"
            content-type="html"
            ref="editorRef"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="onPublish('已发布')" type="primary">发布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
      background-color: white;
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>

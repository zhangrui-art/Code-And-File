<script setup>
import { userUpdateAvatarService } from '@/api/user'
import PageContainer from '@/components/PageContainer.vue'
import { useUserStore } from '@/stores'
import { Plus, Upload } from '@element-plus/icons-vue'
import { ref } from 'vue'
const userStore = useUserStore()
const {
  user: { user_pic }
} = userStore
const imgUrl = ref(user_pic)
const isForbid = ref(true)
const uploadRef = ref(null)
const onSelectFile = (uploadFile) => {
  // blob
  // imgUrl.value = URL.createObjectURL(uploadFile.raw)
  // isForbid.value = false
  // 通过FileReader读取文件
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imgUrl.value = reader.result
    isForbid.value = false
  }
}
const onUpload = async () => {
  await userUpdateAvatarService({
    avatar: imgUrl.value
  })
  await userStore.getUser()
  // 提示用户
  ElMessage({
    type: 'success',
    message: '头像更换成功'
  })
}
</script>

<template>
  <PageContainer title="更换头像">
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      autoUpload="false"
      :onChange="onSelectFile"
      ref="uploadRef"
    >
      <img v-if="imgUrl" :src="imgUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <div class="btn-group">
      <el-button
        type="primary"
        @click="uploadRef.$el.querySelector('input').click()"
      >
        <el-icon><Plus /></el-icon>
        选择图片
      </el-button>
      <el-button type="success" @click="onUpload" :disabled="isForbid">
        <el-icon><Upload /></el-icon>
        上传头像
      </el-button>
    </div>
  </PageContainer>
</template>

<style scoped lang="scss">
.btn-group {
  width: 278px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>

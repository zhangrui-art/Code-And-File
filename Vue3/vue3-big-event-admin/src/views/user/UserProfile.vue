<script setup>
import { userUpdateInfoService } from '@/api/user'
import PageContainer from '@/components/PageContainer.vue'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const userModel = ref({
  id: '',
  username: '',
  nickname: '',
  email: ''
})
const userRules = {
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ]
}
const userStore = useUserStore()
userModel.value = userStore.user
const userFormRef = ref(null)
const submitForm = async () => {
  await userFormRef.value.validate()
  await userUpdateInfoService(userModel.value)
  userStore.getUser()
  // userModel.value = userStore.user
  ElMessage.success('修改成功')
}
</script>

<template>
  <PageContainer title="基本资料">
    <!-- 表单部分 -->
    <template #default>
      <el-form
        :model="userModel"
        :rules="userRules"
        ref="userFormRef"
        label-width="100px"
        size="large"
        scroll-to-error
      >
        <el-form-item label="登录名称">
          <el-input v-model="userModel.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="userModel.nickname"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="userModel.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交修改</el-button>
        </el-form-item>
      </el-form>
    </template>
  </PageContainer>
</template>

<style scoped lang="scss">
.el-form {
  width: 500px;
}
</style>

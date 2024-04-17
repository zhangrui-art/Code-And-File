<script setup>
import { ref } from 'vue'
import PageContainer from '@/components/PageContainer.vue'
import { userUpdatePasswordService } from '@/api/user'
import { ElMessage } from 'element-plus'
const resetForm = ref({
  originPassword: '',
  password: '',
  rePassword: ''
})
const resetFormRules = ref({
  originPassword: [
    { required: true, message: '请输入原密码', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        if (value === resetForm.value.originPassword) {
          callback(new Error('新密码不能与原密码相同'))
        } else {
          callback()
        }
      }
    }
  ],
  rePassword: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        // 验证两次密码是否一致
        if (value !== resetForm.value.password) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
})
const resetFormRef = ref()
const updatePwd = async () => {
  await resetFormRef.value.validate()
  await userUpdatePasswordService({
    old_pwd: resetForm.value.originPassword,
    new_pwd: resetForm.value.password,
    re_pwd: resetForm.value.rePassword
  })
  ElMessage.success('更新密码成功')
}
const onResetForm = () => {
  resetFormRef.value.resetFields()
}
</script>

<template>
  <PageContainer title="重置密码">
    <div class="form">
      <el-form
        :model="resetForm"
        :rules="resetFormRules"
        label-width="100px"
        size="large"
        ref="resetFormRef"
      >
        <el-form-item label="原密码" prop="originPassword">
          <el-input
            v-model="resetForm.originPassword"
            type="password"
            placeholder="请输入原密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input
            v-model="resetForm.password"
            type="password"
            placeholder="请输入新密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            v-model="resetForm.rePassword"
            type="password"
            placeholder="请再次输入新密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updatePwd">修改密码</el-button>
          <el-button @click="onResetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </PageContainer>
</template>

<style scoped lang="scss">
.form {
  width: 500px;
}
</style>

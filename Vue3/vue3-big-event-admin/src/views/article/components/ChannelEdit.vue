<script setup>
import { ref } from 'vue'
import { artAddChannelsService, artUpdateChannelsService } from '@/api/article'
import { ElMessage } from 'element-plus'
const dialogVisible = ref(false)
// 组件对外暴露一个方法open
// open({}) => 表单无需渲染，是添加
// open({ id, cate_name, ...}) => 表单需要渲染，是编辑
// open 调用后需要打开弹窗
const open = (row) => {
  console.log(row)
  dialogVisible.value = true
  formModel.value = { ...row }
  if (row.id) {
    formTitle.value = '编辑分类'
  } else {
    formTitle.value = '添加分类'
  }
}
const formTitle = ref('添加分类')
defineExpose({
  open
})
const formRef = ref()
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const formRules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    { pattern: /^\S{1,10}$/, message: '长度在 1 到 10 个字符', trigger: 'blur' }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_-]{1,10}$/,
      message: '长度在 1 到 10 的字母或数字',
      trigger: 'blur'
    }
  ]
}
const emit = defineEmits(['success'])
const handleChannel = async () => {
  await formRef.value.validate()
  if (formTitle.value === '添加分类') {
    const res = await artAddChannelsService(formModel.value)
    console.log('添加', res)
    ElMessage.success('添加成功')
    emit('success')
  } else {
    const res = await artUpdateChannelsService(formModel.value)
    console.log('编辑', res)
    ElMessage.success('编辑成功')
  }
  dialogVisible.value = false
  emit('success')
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formTitle"
    width="500"
    :before-close="handleClose"
  >
    <el-form :model="formModel" :rules="formRules" ref="formRef">
      <el-form-item prop="cate_name">
        <template #label>
          <span>分类名称</span>
        </template>
        <el-input
          v-model="formModel.cate_name"
          placeholder="请输入分类名称"
        ></el-input>
      </el-form-item>
      <el-form-item prop="cate_alias">
        <template #label>
          <span>分类别名</span>
        </template>
        <el-input
          v-model="formModel.cate_alias"
          placeholder="请输入分类别名"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleChannel"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>

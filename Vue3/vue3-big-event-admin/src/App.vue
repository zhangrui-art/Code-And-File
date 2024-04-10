<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from './stores/user'
import { storeToRefs } from 'pinia'
const router = useRouter()
const route = useRoute()
const goList = () => {
  router.push('/list?id=123&name=zdp')
}
console.log(route)

const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const { setToken, removeToken } = userStore

const login = () => {
  setToken('admin', '123456')
}
const logout = () => {
  removeToken()
}
</script>

<template>
  <div>
    <el-button @click="router.push('/home')">去首页</el-button>
    <el-button @click="goList">列表页</el-button>
    {{ token }}
    <el-button @click="login">登录</el-button>
    <el-button @click="logout">退出</el-button>
  </div>
</template>

<style scoped></style>

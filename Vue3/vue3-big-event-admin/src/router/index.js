import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例
// 配置history模式
// 1. history模式 createWebHistory
// 2. hash模式 createWebHashHistory
const router = createRouter({
  //vite中的环境变量 import.meta.env.BASE_URL  就是vite.config.js中的base配置项
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router

import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例
// 配置history模式
// 1. history模式 createWebHistory
// 2. hash模式 createWebHashHistory
const router = createRouter({
  //vite中的环境变量 import.meta.env.BASE_URL  就是vite.config.js中的base配置项
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/channel',
      children: [
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue')
    }
  ]
})

// 登录访问拦截 => 默认直接放行
// 返回值：
// 1. undefined / true 放行
// 2. false 拦截回from的地址页面
// 3. 具体路径或者路径对象，拦截到对应的地址
//    eg. '/login'  { name: 'login' }  { path: '/login' } 后面两种可以传参
router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') return '/login'
})

export default router

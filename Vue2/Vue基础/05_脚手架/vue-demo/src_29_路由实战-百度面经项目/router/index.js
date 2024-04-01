import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'
import Article from '@/views/Article.vue'

Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: '/article',
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/detail/:id',
      component: ArticleDetail,
    }
  ],
  // 一旦使用history模式，必须要后台配置访问规则
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { name: 'search', path: '/search/:name?', component: Search },
    { path: '*', component: NotFound }
  ],
  // 一旦使用history模式，必须要后台配置访问规则
  mode: 'history'
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import MyOrder from '@/views/myorder'
import Pay from '@/views/pay'
import ProDetail from '@/views/prodetail'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/category',
          name: 'category',
          component: Category
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/user',
          name: 'user',
          component: User
        }
      ]
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: MyOrder
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/prodetail/:id',
      name: 'prodetail',
      component: ProDetail
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/searchlist',
      name: 'serachlist',
      component: SearchList
    }
  ]
})

// 定义一个数组，专门用户存放所有需要权限访问的页面
const authUrls = ['/myorder', '/pay']
// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  if (authUrls.includes(to.path) && !store.getters.token) {
    next('/login')
  }
  next()
})

export default router

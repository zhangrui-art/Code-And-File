import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/search',
      component: Search,
    }
  ]
})
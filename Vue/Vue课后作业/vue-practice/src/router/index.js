import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search/:name?',
      component: Search
    },
    {
      path: "*",
      component: NotFound
    }
  ],
  mode: 'history'

})
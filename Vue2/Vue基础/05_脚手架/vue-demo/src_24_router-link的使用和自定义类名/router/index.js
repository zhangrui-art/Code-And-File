import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'
import My from '../views/My.vue'
import Friend from '../views/Friend.vue'

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: '/find', 
      component: Find,
    },
    {
      path: '/my', 
      component: My,
    },
    {
      path: '/friend', 
      component: Friend,
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
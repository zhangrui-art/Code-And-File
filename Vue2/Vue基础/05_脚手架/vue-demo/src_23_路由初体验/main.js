import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  // routes 路由规则表
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
    },
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

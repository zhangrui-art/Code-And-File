import Vue from 'vue'
import App from './App.vue'
import PaoButton from './components/PaoButton '

Vue.config.productionTip = false
Vue.component('PaoButton', PaoButton)

new Vue({
  render: h => h(App),
}).$mount('#app')

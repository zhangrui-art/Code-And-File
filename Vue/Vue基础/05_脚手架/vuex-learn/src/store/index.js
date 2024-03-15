import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 开启严格模式
  state: {
    count: 100,
    title: '仓库标题'
  }
})

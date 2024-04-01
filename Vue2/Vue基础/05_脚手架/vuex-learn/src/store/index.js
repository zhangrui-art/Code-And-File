import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 开启严格模式
  // 1. 通过state可以提供数据（所有组件共享的数据）
  state: {
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 2. 通过mutations可以修改数据（所有组件共享的数据）
  mutations: {
    // 所有mutations的第一个参数都是state
    addCount (state, payload) {
      state.count += payload
    },
    changeCount (state, payload) {
      state.count = payload
    }
  },
  // 3.actions 处理异步 注：不能直接操作state，还是需要commit mutation
  actions: {
    addCountAsync (context, n) {
      setTimeout(() => {
        context.commit('addCount', n)
      }, 1000)
    }
  },
  // 4. 通过getters 类似于计算属性
  getters: {
    // 1. 形参第一个参数为state
    // 2. 比如有返回值，返回值就是getters的值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  // 5. modules 模块
  modules: {
    user,
    setting
  }
})

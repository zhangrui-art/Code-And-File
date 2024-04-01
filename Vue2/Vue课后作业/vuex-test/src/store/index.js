import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100,
    title: '标题',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    changeInput (state, payload) {
      state.count = payload
    },
    addCount (state, payload) {
      state.count += payload
    }
  },
  actions: {
    addCountAsync (context, payload) {
      setTimeout(() => {
        context.commit('addCount', payload)
      }, 1000)
    }
  },
  getters: {
    bigThanFive (state) {
      return state.list.filter(item => item > 5)
    }
  },
  modules: {
    user,
    setting
  }
})

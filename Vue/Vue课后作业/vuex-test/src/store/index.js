import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    addCount (state, payload) {
      state.count += payload
    },
    changeCount (state, payload) {
      state.count = payload
    }
  },
  actions: {
    addCountAsync (context, n) {
      setTimeout(() => {
        context.commit('addCount', n)
      }, 1000)
    }
  },
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  }
})

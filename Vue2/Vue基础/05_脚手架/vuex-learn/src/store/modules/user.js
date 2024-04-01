export default {
  namespaced: true,
  state: {
    userInfo: {
      name: 'paopao',
      age: 18
    },
    score: 90
  },
  mutations: {
    setUser (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    setUserAsync (context, payload) {
      setTimeout(() => {
        context.commit('setUser', payload)
      }, 1000)
    }
  },
  getters: {
    upperCaseName (state) {
      return state.userInfo.name.toUpperCase()
    }
  }
}

export default {
  namespaced: true,
  state: {
    userInfo: {
      name: 'zhangpao',
      age: 18
    }
  },
  mutations: {
    changeUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    changeAsync (context, payload) {
      setTimeout(() => {
        context.commit('changeUserInfo', payload)
      }, 1000)
    }
  },
  getters: {
    upperCaseName (state) {
      return state.userInfo.name.toUpperCase()
    }
  }
}

export default {
  namespaced: true,
  state: {
    theme: 'dark'
  },
  mutations: {
    changeTheme (state, payload) {
      state.theme = payload
    }
  },
  actions: {

  },
  getters: {

  }
}

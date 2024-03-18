export default {
  namespaced: true,
  state: {
    theme: 'light',
    desc: '测试demo'
  },
  mutations: {
    setTheme (state, payload) {
      state.theme = payload
    }
  },
  actions: {

  },
  getters: {

  }
}

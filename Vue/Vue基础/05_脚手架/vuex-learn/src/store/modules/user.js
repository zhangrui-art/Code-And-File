export default {
  namespaced: true,
  state: {
    userInfo: {
      name: 'paopao',
      age: 18,
      feature: 'handsome'
    },
    score: 90
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    upperCaseName (state) {
      return state.userInfo.name.toUpperCase()
    }
  }
}

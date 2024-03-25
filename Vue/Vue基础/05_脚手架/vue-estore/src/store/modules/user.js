import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      // 个人权证相关
      userInfo: getInfo()
    }
  },
  getters: {
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
      setInfo(data)
    }
  },
  actions: {
  }
}

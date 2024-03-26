import { getCartList } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {
  },
  mutations: {
    getCartList (state, payload) {
      state.cartList = payload
    }
  },
  actions: {
    async getCartAction (context, payload) {
      const res = await getCartList()
      const newList = res.data.list.map(item => {
        return {
          ...item,
          isChecked: true
        }
      })
      context.commit('getCartList', newList)
    }
  }
}

import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    getCart (state, payload) {
      state.cartList = payload
    },
    changeCart (state, payload) {
      state.cartList = state.cartList.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            count: payload.count
          }
        }
        return item
      })
    }
  },
  actions: {
    async getCartAsync (context) {
      const resp = await axios.get('http://localhost:3001/cartlist')
      context.commit('getCart', resp.data)
    },
    async changeCartAsync (context, payload) {
      console.log(payload.count)
      context.commit('changeCart', payload)
      await axios.patch(`http://localhost:3001/cartList/${payload.id}`, { count: payload.count })
    }
  },
  getters: {
    totalAmount (state) {
      return state.cartList.reduce((total, item) => {
        return total + item.count
      }, 0)
    },
    totalPrice (state) {
      return state.cartList.reduce((total, item) => {
        return total + item.count * item.price
      }, 0)
    }
  }
}

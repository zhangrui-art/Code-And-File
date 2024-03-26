import { getCartList } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((pre, cur) => {
        return pre + cur.goods_num
      }, 0)
    },
    selCarList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCount (state, getters) {
      return getters.selCarList.reduce((pre, cur) => {
        return pre + cur.goods_num
      }, 0)
    },
    selPrice (state, getters) {
      return getters.selCarList.reduce((pre, cur) => {
        return pre + cur.goods_num * cur.goods.goods_price_min
      }, 0)
    },
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  },
  mutations: {
    getCartList (state, payload) {
      state.cartList = payload
    },
    updateCartList (state, payload) {
      state.cartList = state.cartList.map(item => {
        if (item.goods_id === payload) {
          return {
            ...item,
            isChecked: !item.isChecked
          }
        }
        return item
      })
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

import { getCartList, changeCount, delSelect } from '@/api/cart'
import { Toast } from 'vant'

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
    },
    handleAllCheck (state, payload) {
      state.cartList = state.cartList.map(item => {
        return {
          ...item,
          isChecked: payload
        }
      })
    },
    changeCount (state, payload) {
      const goods = state.cartList.find(item => item.goods_id === payload.goodsId)
      goods.goods_num = payload.goodsNum
    },
    delSelect (state, payload) {
      console.log(payload)
      state.cartList = state.cartList.filter(item => !payload.includes(item.id))
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
    },
    async changeCountAction (context, payload) {
      context.commit('changeCount', payload)
      await changeCount(payload.goodsId, payload.goodsNum, payload.goodsSkuId)
    },
    async delSelectAction (context, payload) {
      console.log(context)
      context.commit('delSelect', payload)
      await delSelect(payload)
      Toast.success('删除成功')
    }
  }
}

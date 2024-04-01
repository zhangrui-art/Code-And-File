<template>
  <div class="app-container">
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 -->
    <cart-item v-for="item in cartList" :key="item.id" :item="item"></cart-item>

    <!-- Foote 区域 -->
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import CartHeader from '@/components/cart-header.vue'
import CartFooter from '@/components/cart-footer.vue'
import CartItem from '@/components/cart-item.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    CartHeader,
    CartFooter,
    CartItem
  },
  methods: {
    ...mapActions('cart', ['getCartAsync'])
  },
  computed: {
    ...mapState('cart', ['cartList'])
  },
  created () {
    this.getCartAsync()
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 50px 0;
  font-size: 14px;
}
</style>

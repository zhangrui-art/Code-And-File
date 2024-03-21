<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <img :src="item.imgUrl" class="avatar" alt="">
    </div>
    <!-- 右侧商品区域 -->
    <div class="right">
      <!-- 标题 -->
      <div class="title">{{ item.title }}</div>
      <div class="info">
        <!-- 单价 -->
        <span class="price">￥{{ item.price }}</span>
        <div class="btns">
          <!-- 按钮区域 -->
          <button @click="changeCartAsync({ id: item.id, count: item.count -1 })" class="btn btn-light">-</button>
          <span class="count">{{ item.count }}</span>
          <button @click="changeCartAsync({ id: item.id, count: item.count + 1 })" class="btn btn-light">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default () {
        return {

        }
      }
    }
  },
  methods: {
    ...mapActions('cart', ['changeCartAsync'])
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;
  + .goods-container {
    border-top: 1px solid #f8f8f8;
  }
  .left {
    .avatar {
      width: 100px;
      height: 100px;
    }
    margin-right: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .title {
      font-weight: bold;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
      .btns {
        .count {
          display: inline-block;
          width: 30px;
          text-align: center;
        }
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.6rem;
}
</style>

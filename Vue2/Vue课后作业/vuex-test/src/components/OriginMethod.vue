<template>
  <div class="origin">
    <h4>原生写法 —— {{ $store.state.title }}</h4>
    <div>App组件中的count为：{{ $store.state.count }}</div>
    <div>
      <button @click="addCount(1)">+1</button>
      <button @click="addCount(5)">+5</button>
      <button @click="addAsync(1)">异步+1</button>
    </div>
    <div>list中大于5的 {{ $store.getters.bigThanFive }}</div>
    <div>用户信息为：{{ $store.state.user.userInfo.name }} - {{ $store.state.user.userInfo.age }}</div>
    <div>主题色为： {{ $store.state.setting.theme }}</div>
    <div>
      <button @click="changeUserInfo">更改用户信息</button>
      <button @click="changeAsync">异步修改用户信息</button>
      <button @click="changeTheme">更改主题色</button>
    </div>
    <div>用户名大写：{{ $store.getters['user/upperCaseName'] }}</div>
  </div>
</template>

<script>
export default {
  name: 'OriginMethod',
  methods: {
    addCount (n) {
      this.$store.commit('addCount', n)
    },
    addAsync (n) {
      this.$store.dispatch('addCountAsync', n)
    },
    changeUserInfo () {
      this.$store.commit('user/changeUserInfo', {
        name: 'zhangxiaopaopao',
        age: 30
      })
    },
    changeAsync () {
      this.$store.dispatch('user/changeAsync', {
        name: 'zhangxiaopaopao',
        age: 30
      })
    },
    changeTheme () {
      this.$store.commit('setting/changeTheme', 'Aqua')
    }
  }
}
</script>

<style lang="less" scoped>
.origin {
  margin: 10px 0;
  padding: 10px;
  width: 480px;
  height: auto;
  border: 1px solid #ccc;
  div {
    margin: 10px 0;
    button {
      margin: 0 10px 0 0;
    }
  }
}
</style>

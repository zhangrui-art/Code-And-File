<template>
  <div class="reflect">
    <h4>映射写法 —— {{ title }}</h4>
    <div>App组件中的count为：{{ count }}</div>
    <div>
      <button @click="addCount(1)">+1</button>
      <button @click="addCount(5)">+5</button>
      <button @click="addCountAsync(1)">异步+1</button>
    </div>
    <div>list中大于5的 {{ bigThanFive }}</div>
    <div>用户信息为：{{ userInfo.name }} - {{ userInfo.age }}</div>
    <div>主题色为： {{ theme }}</div>
    <div>
      <button @click="changeUserInfo({ name: 'zhangdapaopao', age: 3 })">更改用户信息</button>
      <button @click="changeAsync({ name: 'zhangdapaopao', age: 3 })">异步修改用户信息</button>
      <button @click="changeTheme('Blue')">更改主题色</button>
    </div>
    <div>用户名大写：{{ upperCaseName }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count', 'title']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme']),
    ...mapGetters(['bigThanFive']),
    ...mapGetters('user', ['upperCaseName'])
  },
  methods: {
    ...mapMutations(['addCount']),
    ...mapMutations('user', ['changeUserInfo']),
    ...mapMutations('setting', ['changeTheme']),
    ...mapActions(['addCountAsync']),
    ...mapActions('user', ['changeAsync'])
  }
}
</script>

<style lang="less" scoped>
.reflect {
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

<template>
  <div class="sonOne">
    <h2>Son1子组件--不用映射</h2>
    <p>从vuex中获取的值：{{ $store.state.count }}-{{ $store.state.user.userInfo.name }}</p>
    <button @click="addCount(1)" type="">值+1</button>
    <button @click="addCount(5)" type="">值+5</button>
    <button @click="addCount(10)" type="">值+10</button>
    <button @click="addAsync(1)" type="">一秒后+1</button>
    <hr>
    {{ $store.getters.filterList }}
    <hr>
    <!-- 测试访问模块中的state - 原生-->
    <p>访问模块中的state数据--原生: {{ $store.state.user.userInfo.name }} </p>
    <button @click="updateUserInfo">更新个人信息</button>
    <button @click="updateUserInfoAsync">一秒后更新个人信息</button>
    <p>{{ $store.state.setting.theme }}</p>
    <button @click="updateTheme">更新主题色</button>
    <hr>
    <!-- 测试访问模块中的getters - 原生-->
    <p>访问模块中的getters数据--原生: {{ $store.getters['user/upperCaseName'] }} </p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'SonOne',
  created () {
    console.log(this.$store.state)
    console.log(this.$store.getters)
    console.log(this.$store)
  },
  methods: {
    addCount (n) {
      this.$store.commit('addCount', n)
    },
    addAsync (n) {
      this.$store.dispatch('addCountAsync', n)
    },
    updateUserInfo () {
      this.$store.commit('user/setUser', { name: 'BaoBao', age: 35 })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'blue')
    },
    updateUserInfoAsync () {
      this.$store.dispatch('user/setUserAsync', { name: 'BaoBao', age: 35 })
    }
  }
}
</script>

<style lang="less" scoped>
  .sonOne {
    margin: 10px 0;
    width: 430px;
    height: auto;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>

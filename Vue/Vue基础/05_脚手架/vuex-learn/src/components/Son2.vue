<template>
  <div class="sonTwo">
    <h2>Son2子组件——映射写法</h2>
    <p>从vuex中获取的值：{{ count }}</p>
    <button @click="addCount(1)" type="">值+1</button>
    <button @click="addCount(5)" type="">值+5</button>
    <button @click="addCount(10)" type="">值+10</button>
    <button @click="addCountAsync(1)" type="">一秒后+1</button>
    <hr>
    {{ filterList }}
    <hr>
    <!-- 访问模块中的state数据 ——根级别映射 -->
    <div>访问模块中的state数据:根级别映射---{{ user.userInfo.name }} - {{ setting.theme }}</div>
    <!-- 访问模块中的state数据 ——子模块的映射 -->
    <div>访问模块中的state数据:子模块的映射---{{ userInfo.name }} - {{ theme }}</div>
    <button @click="setUser({name: 'BaoBao', age: 35})">更新用户信息</button> <button @click="setTheme('blue')">更新主题</button>
    <button @click="setUserAsync({name: 'BaoBao', age: 35})">一秒后更新用户信息</button>
    <hr>
    <!-- 访问模块中的getters数据 ——子模块的映射 -->
    <div>访问模块中的getters数据:根级别映射---{{ upperCaseName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'SonTwo',
  computed: {
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['upperCaseName'])
  },
  methods: {
    ...mapMutations(['addCount']),
    ...mapMutations('user', ['setUser']),
    ...mapMutations('setting', ['setTheme']),
    ...mapActions(['addCountAsync']),
    ...mapActions('user', ['setUserAsync'])
  }
}
</script>

<style lang="less" scoped>
  .sonTwo {
    margin: 10px 0;
    width: 430px;
    height: auto;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>

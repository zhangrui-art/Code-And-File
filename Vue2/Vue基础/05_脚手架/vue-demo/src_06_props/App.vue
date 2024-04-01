<template>
  <div class="app">
    <UserInfo
      :username="username"
      :age="age"
      :isSingle="isSingle"
      :car="car"
      :lobby="lobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo'
export default {
  components: {
    UserInfo
  },
  data() {
    return {
      username: "张大炮",
      age: 18,
      isSingle: true,
      car: {
        brand: "BMW",
        color: "red",
        price: 100000
      },
      lobby: ['麻将', '台球', '游戏']
    }
  }  
}
</script>

<style>

</style>
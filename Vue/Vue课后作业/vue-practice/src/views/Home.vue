<template>
  <div class="home">
    <div class="imgView">
    </div>
    <div class="search">
      <div class="search-wrapper">
        <input v-model="name" class="inputBox" type="text" placeholder="请输入搜索内容" />
        <button @click="goSearch">搜索一下</button>
      </div>
    </div>
    <div class="hot">
      <span>热门搜索:</span>
      <router-link to="/search/黑马程序员" >黑马程序员</router-link>
      <router-link to="/search/前端培训" >前端培训</router-link>
      <router-link to="/search/如何成为前端大牛" >如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  data () {
    return {
      name: "" 
    }
  },
  methods: {
    goSearch () {
      this.$router.push(`/search/${this.name}`)
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    text-align: center;
    .imgView {
      margin-top: 150px;
      width: 100%;
      height: 100px;
      background: url('https://ts1.cn.mm.bing.net/th/id/R-C.387518e21a96c9c4ab5bfa5deb021123?rik=92RJttOawDb82Q&riu=http%3a%2f%2fgo.itheima.com%2fimages%2flogo.png&ehk=hbPrHXiTGCAGV8ZVCRlOgug9xvaRzMnSga558a12qG0%3d&risl=&pid=ImgRaw&r=0')
      no-repeat center;
    }
    .search-wrapper {
      margin: auto;
      height: 40px;
      .inputBox {
        border: 2px solid #c4c7ce;
        border-right: none;
        display: inline-block;
        vertical-align: middle;
        width: 400px;
        height: 40px;     
        box-sizing: border-box;   
        border-radius: 5px 0 0 5px;
        text-indent: 10px;
      }
      input {
        outline: none;
      }
      button {
        display: inline-block;
        height: 100%;
        box-sizing: border-box;   
        border:none;
        background-color: #ad2a26;
        vertical-align: middle;
        width: 100px;
        border-radius: 0 5px 5px 0;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
      }
    }
    .hot {
      width: 500px;
      margin: 20px auto;
      text-align: left;
      a {
        margin: 0 10px;
      }
    }
    .hot :nth-child(2) {
      margin-left: 20px;
    }
  }
</style>>
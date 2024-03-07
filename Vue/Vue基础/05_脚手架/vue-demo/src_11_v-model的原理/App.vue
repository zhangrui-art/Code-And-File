<template>
  <div class="app">
    <!-- v-model是语法糖，
        底层远离都是双向绑定
          input的原理就是:value和@input的双向绑定 
          :value是数据驱动视图
          @input是视图改变数据
    -->
    <input v-model="msg1" type="text"> <br>
    <input :value="msg2" @input="msg2 = $event.target.value" type="text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: "",
      msg2: "" 
    }
  }
}
</script>

<style>
input{
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #bcbcbc;
  margin-top: 20px;
  font-size: 18px;
}
input:focus{
  outline: 0;
}
</style>
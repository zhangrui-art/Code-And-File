<template>
  <div>
    <MyDialog></MyDialog>
    <MyDialog>
      <div>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
      </div>  
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>
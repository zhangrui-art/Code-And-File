<template>
  <div>
    <MyDialog>
      <template #footer>      
        <button>收到</button>
      </template>      
    </MyDialog>
    <MyDialog>
      <template #head>友情提示</template>
      <template #content>确认要删除吗？</template>
      <template #footer>      
        <button>取消</button>
        <button>确认</button>
      </template>
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
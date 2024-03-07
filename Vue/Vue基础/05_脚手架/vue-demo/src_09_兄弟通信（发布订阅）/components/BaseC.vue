<template>
  <div class="boxA">
    我是C组件（接收方）
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  data () {
    return {
      msg: ""
    }
  },
  created () {
    Bus.$on('sendMsg', (value) => {
      console.log('我收到了消息,我是C组件',value);
      this.msg = value
    })
  }
}
</script>

<style>
.boxA { 
  width: 200px;
  height: 200px;
  border: 3px solid #000;
}
</style>
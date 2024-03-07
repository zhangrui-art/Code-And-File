<template>
  <div class="boxB">
    我是B组件（发布方）
    <button @click="publish">发布通知</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  methods: {
    publish () {
      Bus.$emit('sendMsg', '我是B组件发的通知') 
    }
  }
}
</script>

<style>
.boxB { 
  width: 200px;
  height: 200px;
  border: 3px solid #000;
}
</style>
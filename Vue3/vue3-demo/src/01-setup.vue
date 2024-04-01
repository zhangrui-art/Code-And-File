<script>
// 执行时机，早于beforeCreate
// set up函数中，获取不到this
export default {
  setup() {
    const msg = 'hello vue3';
    const logMsg = () => {
      console.log(msg);
    }
    return {
      msg,
      logMsg,
    }
  },
  beforeCreate() {
    console.log('before create');
  },
}
</script>
<template>
  <div>学习V3</div>
  <div>{{ msg }} <button @click="logMsg">Click</button></div>
</template>
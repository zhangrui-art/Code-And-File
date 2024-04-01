<template>
  <div class="son">
    我是子组件 <br>
    父组件给我的值为 {{ nb }} <br>
    <button @click="changeValue">改变值</button>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus';

export default {
  props: ['nb'],
  methods: {
    changeValue () {
      Bus.$emit('change', 400)
    }
  }
}
</script>

<style>
  .son {
    border: 1px solid rgb(224, 21, 92);
    padding: 10px;
  }
</style>
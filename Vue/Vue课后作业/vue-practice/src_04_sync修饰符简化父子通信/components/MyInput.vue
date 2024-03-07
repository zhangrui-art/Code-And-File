<template>
  <input :value="transValue" @input="updateValue" type="text">
</template>

<script>
export default {
  props: {
    transValue: String
  },
  methods: {
    updateValue(e) {
      console.log(e.target.value);
      this.$emit('update:transValue', e.target.value)
    }
  }
}
</script>

<style lang="less">
input{
  width: 300px;
  height: 35px;
  box-sizing: border-box;
  border: 2px solid #000;
  border-radius: 5px;
  font-size: 18px;
  &:focus{
    outline: none;
  }
}
</style>
<template>
  <div class="countBox">
    <button @click="handleClick(value-1)" class="minus">-</button>
    <input :value="value" @change="handleInp" class="inp" type="text">
    <button @click="handleClick(value+1)" class="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleClick (value) {
      if (this.value < 1) return
      this.$emit('input', value)
    },
    handleInp (e) {
      if (isNaN(+e.target.value) || +e.target.value < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', +e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.countBox {
  width: 110px;
  display: flex;
  .add, .minus {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    border: none;
    outline: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>

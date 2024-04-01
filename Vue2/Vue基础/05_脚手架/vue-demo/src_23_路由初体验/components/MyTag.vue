<template>
  <div class="my-tag">
    <input 
        class="input"
        type="text"
        placeholder="输入标签"
        v-if="isEdit"
        :value="value"
        v-focus
        @blur="isEdit = false"
        @keyup.enter="handleEnter"
      />
    <div 
      class="text"
      v-else
      @dblclick="isEdit = true"
    >{{ value }}</div>
  </div>  
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    handleEnter(e) {
      if(!e.target.value) {
        alert('请输入标签')
        return
      }
      this.$emit('input', e.target.value)
      this.isEdit = false
    }
  }
}
</script>

<style lang="less" scoped>
  .my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>
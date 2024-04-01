<template>
  <div class="baseSelect">
    <select :value="value" @change="handleChange">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">深圳</option>
      <option value="105">广州</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  }
}
</script>

<style>
select {
  width:100px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  border: 2px solid #000;
  border-radius: 5px;
}
</style>
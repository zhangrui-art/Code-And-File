<template>
  <tbody>
    <tr v-for="(item, index) in dataArray" :key="index">
      <td>{{ item.date  }}</td>
      <td>{{ item.doctor  }}</td>
      <td>{{ item.diagnosis  }}</td>
      <td>{{ item.prescription  }}</td>
      <td class="detail-btn" @click="showDetails(item)">详情</td>
    </tr>
  </tbody>
</template>

<script>
import Bus from '../EventBus'
export default {
  props: {
    dataArray: Array,
  },
  methods: {
    showDetails(item) {
      Bus.$emit('showPop', true)
      Bus.$emit('showDetails',item)
    }
  }
};
</script>

<style scoped>
tbody {
  width: 100%;
}
td {
  border: 1px solid #ccc;
  height: 30px;
  text-align: center;
}
.detail-btn {
  cursor: pointer;
}
</style>>
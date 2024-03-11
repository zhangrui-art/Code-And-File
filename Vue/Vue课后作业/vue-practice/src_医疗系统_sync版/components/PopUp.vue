<template>
  <div class="pop">
    <div class="wrapper">
      <div class="header">
        <div><B>就诊详情</B></div>
        <div class="close-btn" @click="close">X</div>
      </div>
      <div class="content">
        <div class="content-item">
          <div><b>就诊日期:</b></div>
          <div class="dataKey">{{ curItem.date }}</div>
        </div>
        <div class="content-item">
          <div><b>医生姓名:</b></div>
          <div class="dataKey">{{ curItem.doctor }}</div>
        </div>
        <div class="content-item">
          <div><b>诊断结果:</b></div>
          <div class="dataKey">{{ curItem.diagnosis }}</div>
        </div>
        <div class="content-item">
          <div><b>处方信息:</b></div>
          <div class="dataKey">{{ curItem.prescription }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curItem: Object,
    controlPop: Boolean
  },
  methods: {
    close() {
      this.$emit('update:controlPop', false)
    }
  }
}
</script>

<style scoped>
  .pop{
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(102, 102, 102,0.4);
  }
  .pop .wrapper {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    width: 250px;
    height: 300px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
  .pop .wrapper .header{
    margin: auto;
    margin-top: 30px;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
  .pop .wrapper .content{ 
    margin: auto;
    margin-top: 40px;
    width: 200px;
  }
  .pop .wrapper .content .content-item {
    display: flex;
    margin-top: 20px;
  }
  .pop .wrapper .content .content-item .dataKey{ 
    margin-left: 10px;
  }
  .close-btn {
    cursor: pointer;
  }
</style>
<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-wrapper">
        <slot name="header"> </slot>
      </div>
    </div>
    <div class="content">
      <slot name="content" :dataArray="dataArray"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataArray: Array
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  margin-top: 20px;
  position: relative;
  width: 360px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  font: 16px sans-serif;
  .header {
    width: 100%;
    height: 50px;
    background: linear-gradient(to right, #0077ff, #49d3ff);
    .header-wrapper {
      margin: 0 auto;
      width: 300px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    }
  }
  .content {
    margin: 0 auto;
    width: 300px;
    height: auto;
    .tag-wrapper {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: 16px sans-serif;
      color: #000;      
      border-bottom: 1px solid #ddd;
      .tag {
        width: auto;
        padding: 5px 10px;
        background-color: #f5f6fa;
      }
    }
    .human-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font: 16px sans-serif;
      color: #000;
      border-bottom: 1px solid #ddd;
      padding: 20px 0;
      box-sizing: border-box;
      .human {
        width: 200px;
        height: auto;
        text-align: left;
        div:not(:first-child) {
          margin-top: 5px;
        }
      }
      .lookup {
        width: 60px;
        height: 30px;
        border: none;
        border-radius: 50px;
        background-color: #0077ff;
        text-align: center;
        color: white;
      }
    }
  }
  .content :last-child{
    border: none;
  }
}
</style>>
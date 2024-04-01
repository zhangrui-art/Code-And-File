<template>
  <div class="box">
    <div 
      class="inner"
      :style="{width:w+'%'}"
    >
      <span>{{ w }} %</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    w: {
      type: Number,
      default: 0,
      // required: true,
      validator (value) {
        if(value < 0 || value > 100){
          alert('请输入正确的百分比')
          return false
        }
        return true
      }

    },
  },
}
</script>

<style>
  .box {
    width: 400px;
    height: 40px;
    background-color: #352d2d;
    border-radius: 50px;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
  }
  .inner {
    position: relative;
    width: 390px;
    height: 30px;
    background-color: #19995f;
    box-sizing: border-box;
    border-radius: 50px;
  }
  .inner span {
    position: absolute;
    right: 0;
    top: 35px;
  }  
</style>
<template>
  <div>
    <!-- header -->
    <!-- container -->
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>
      <div class="form">
        <div class="form-inp">
          <input type="text" placeholder="请输入手机号码">
        </div>
        <div class="form-inp">
          <input type="text" placeholder="请输入图形验证码">
          <img src="" alt="">
        </div>
        <div class="form-inp">
          <input type="text" placeholder="请输入短信验证码">
          <button>获取验证码</button>
        </div>
      </div>
      <div class="btn">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex'
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  padding: 10vw 6vw;
  .title {
    margin-top: 3vw;
    h3 {
      font-size: 7vw;
      font-weight: 500;
    }
    p {
      color: #666;
      margin-top: 2.8vw;
      font-size: 3.8vw;
    }
  }
  .form {
    margin-top: 10vw;
    padding: 0 2vw;
    .form-inp {
      display: flex;
      margin-top: 6vw;
      line-height: 11vw;
      border-bottom: 1px solid #eee;
      justify-content: space-between;
      input {
        // width: 100%;
        border: none;
      }
      img {
        width: 26vw;
        height: fit-content;
      }
      button {
        background-color: #fff;
        border: none;
        width: 23vw;
        color: #f7af30;
      }
    }
  }
  .btn {
    margin-top: 10vw;
    padding: 0 2vw;
    button {
      width: 100%;
      height: 11vw;
      background: linear-gradient(to right ,#e8b44d ,#fd960a);
      border: none;
      border-radius: 50px;
      color: #fff;
      font-size: 4vw;
    }
  }

}
</style>

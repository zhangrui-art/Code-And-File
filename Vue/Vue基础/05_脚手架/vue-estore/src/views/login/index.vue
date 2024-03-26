<template>
  <div>
    <van-nav-bar
      title="会员登录"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>
      <div class="form">
        <div class="form-inp">
          <input v-model="mobile" type="text" placeholder="请输入手机号码">
        </div>
        <div class="form-inp">
          <input v-model="picCode" type="text" placeholder="请输入图形验证码">
          <img @click="getPicCode" v-show="picUrl" :src="picUrl" alt="">
        </div>
        <div class="form-inp">
          <input v-model="smsCode" type="text" placeholder="请输入短信验证码">
          <button @click="getCode">{{ totalSecond === second ? '获取验证码' : second + 's后重新发送' }}</button>
        </div>
      </div>
      <div class="btn">
        <button @click="codeLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode, getPicCode, codeLogin } from '@/api/login'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'LoginIndex',
  data () {
    return {
      picUrl: '',
      picCode: '',
      picKey: '',
      totalSecond: 60,
      second: 60,
      timer: null,
      mobile: '',
      smsCode: ''
    }
  },
  methods: {
    ...mapMutations('user', ['setUserInfo']),
    // 获取图形验证码
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.picUrl = base64
      this.picKey = key
      this.$toast.success('获取图形验证码成功')
    },
    // 获取短信验证码
    async getCode () {
      if (!this.validFn()) {
        return
      }
      if (!this.timer && this.totalSecond === this.second) {
        await getCode(this.picCode, this.picKey, this.mobile)
        this.$toast('短信发送成功，注意查收')
        this.timer = setInterval(() => {
          this.second--
          if (this.second === 0) {
            this.second = this.totalSecond
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    // 验证图形验证码和短信验证码
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('手机号不正确')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('图形验证码错误')
        return false
      }
      return true
    },
    // 登录
    async codeLogin () {
      if (!this.validFn()) {
        return
      }
      if (!/^[0-9]{6}$/.test(this.smsCode)) {
        this.$toast('短信验证码错误')
        return
      }
      const res = await codeLogin(this.mobile, this.smsCode)
      this.setUserInfo({ token: res.data.token, userId: res.data.userId })

      this.$toast.success('登录成功')
      // 判断地址栏有无回跳地址
      // 如果有 => 说明是其他页面拦截到登录来的，需要回跳
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
    }
  },
  computed: {
    ...mapState('user', ['userInfo'])
  },
  created () {
    this.getPicCode()
  },
  destroyed () {
    clearInterval(this.timer)
  }
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
        width: auto;
        color: #f7af30;
        text-align: right;
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

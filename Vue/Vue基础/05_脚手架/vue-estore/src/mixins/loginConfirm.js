export default {
  // 此处编写的就是 Vue组件实例的配置项，通过一定语法，可以直接混入到组件内部
  // data methods computed 生命周期函数
  // 注意点： 如果此处和组件内，提供了同名的data或methods， 则组件内优先级更高
  data () {
    return {
      title: '标题'
    }
  },
  methods: {
    loginConfirm () {
      // 判断token是否存在
      if (!this.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作',
          confirmButtonText: '先登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            // 如果希望跳转登录后能跳回来，需要在跳转去携带参数（当前路径地址）
            // this.$route.fullPath （会包含查询参数）
            this.$router.replace({
              path: '/login',
              query: { backUrl: this.$route.fullPath }
            })
          })
          .catch(() => {
          })
        return true
      }
      return false
    }
  }
}

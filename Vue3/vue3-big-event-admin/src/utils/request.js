import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 10000
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === 0) {
      return response
    }
    // 处理业务失败
    ElMessage({
      message: response.data.message || '服务异常',
      type: 'error',
      plain: true
    })
    return Promise.reject(response.data)
  },
  function (error) {
    // 错误的特殊情况：401 情况 => 权限不足，或token过期 => 拦截到登录页面
    if (error.response.status === 401) {
      // 跳转到登录页面
      router.push('/login')
    }
    // 错误的默认情况
    ElMessage({
      message: error.response.data.message || '服务异常',
      type: 'error',
      plain: true
    })
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }

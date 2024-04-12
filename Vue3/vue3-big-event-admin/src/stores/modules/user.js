import { userGetInfoService } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }
    const clearUser = () => {
      token.value = ''
      user.value = {}
    }
    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      clearUser
    }
  },
  {
    persist: true
  }
)

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia().use(persist)
export default pinia

export * from './modules/user'
//  等价于 且更简洁
// import { useUserStore } from '@/stores/modules/user'
// export { useUserStore }

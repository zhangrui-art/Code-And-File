#### 1. V3的优势

> 1. 更易维护
>     undefined组合式api
>     undefined更好的ts支持
> 2. 更快的速度
>     1. 重写diff算法
>     2. 模板编译优化
>     3. 更高效的组件初始化
> 3. 更小的体积
>     1.  良好的treeshaking
>     2.  按需引入
> 4. 更优的数据响应式
>     1. Proxy

#### 2. 脚手架

> 1. 使用``npm init vue@latest` 创建脚手架 （需要nodejs为16.0.0以上版本）
>
>    `npm create vue@latest`
>
> 2. 数据中需要响应式
>
>    > reactive 处理对象类型的
>    >
>    > ref 处理简单类型的或对象类型的（本质，是在原有传入的数据的基础上，外层包了一层对象。包成了复杂类型。底层实现是包成复杂类型后，再借助reactive实现的响应式）
>    >
>    > 注意： ref在脚本中访问数据需要.value ;在template中， .value不需要加
>
>    推荐：以后声明数据，统一用ref
>
> 3. computed
>
>    ```vue
>    import { computed } from vue;
>    const test = computed(() => {
>    	return 内容
>    })
>
>    const test = computed({
>      get() {
>          return 内容
>      }
>      set(newVal){
>          内容
>      }
>    })
>    ```
>
> 4. watch
>
>    默认是浅层监视，如果是对象，除非修改对象地址，否则浅层监视监视不到内部
>
>    ```vue
>    // 单个
>    watch(val, (newVal, oldVal) => {
>      
>    })
>    // 多个
>    watch([val1,val2], (newValList, oldValList) => {
>      
>    })
>    // 深层和立即执行
>    watch(valObj, (newVal, oldVal) => {
>
>    }, {
>    	deep: true,
>    	immediate: true
>    })
>
>    // 监视对象里的属性
>    watch(() => valObj.value.key, (newVal, oldVal) => {
>
>    })
>    ```
>
> 5. 父子通信
>
>    通过defineProps和defineEmits
>
>    ```vue
>    // 父组件
>    const money = ref(100_000_000)
>    const costMoney = (newVal) => {
>      money.value = newVal
>    }
>        <SonCom 
>          car="小米su7" 
>          :money="money"
>          @costMoney="costMoney"
>        ></SonCom>
>
>    // 子组件
>    const props = defineProps({
>      car: {
>        type: String,
>        default: '拉法'
>      },
>      money: Number
>    })
>    console.log(props);
>    const emit = defineEmits(['costMoney'])
>    const buy = () => {
>      emit('costMoney', 1000)
>    }
>    ```
>
>    ​
>
> 6. 通过ref绑定拿到dom和组件实例
>
>    ref对象必须在渲染完成后才能拿到，所以要放入onMounted中
>
>    访问dom:
>
>    ```vue
>    const inp = ref(null)
>
>    onMounted(() => {
>    	console.log(inp.value)
>    })
>
>    <input ref='inp' type='text'>
>    ```
>
>    访问组件：
>
>    ```vue
>    // 父组件
>    const testRef = ref(null)
>    const getCom = ()=>{
>    	console.log(testRef.value.count)
>    }
>    <TestCom ref='testRef'></TestCom>
>    <button @click='getCom'>获取组件</button>
>
>    // Test Com组件内
>    const count = 9999
>    const sayHi = ()=> {
>    	console.log('hi')
>    }
>    defineExpose({
>    	count,
>    	sayHi
>    })
>    ```
>
> 7. provider 和inject
>
>    骚的是可以传函数，然后操纵数据
>
>    ```vue
>    // 祖先组件
>    provider('keyName', 'value')
>    provider('changeKeyValue', (newVal)=> {
>    	value = newValue
>    })
>
>    // 子孙组件
>    const value = inject('keyName')
>    const changeKeyValue = injuect('changeKeyValue')
>    ```
>
> 8. 写其他配置项
>
>    ```vue
>    defineOptions({
>    	name: 'FullName'
>    })
>    ```
>
> 9. defineModel
>
>    ```vue
>    v2中v-model 相当于 :value 和 @input的组合
>    v3中v-model 相当于 :modelValue 和 @update:modelValue=""的组合
>
>    defineModel可以大大减轻v-model的工作量
>    // 父组件
>        <MyInput
>          v-model="inpVal"
>        ></MyInput>
>        <div>{{inpVal}}</div>
>    // 子组件
>    const modelValue = defineModel()
>      <div>
>        <input type="text" :value="modelValue" @input="e => modelValue = e.target.value">
>      </div>
>    ```
>

#### 3. Pinia

> 使用组合式
>
> ```vue
> 在main.js中注册pinia
>
> import { createPinia } from 'pinia'
> const pinia = createPinia() 
> app.use(pinia).mount('#app')
> ```
>
> 使用：
>
> 1.声明注册对应模块
>
> ```vue
> import { defineStore } from "pinia";
> import { ref, computed } from 'vue'
> export const useCounterStore = defineStore('counter', () => {
>   // 声明state
>   const count = ref(100)
>   // 声明操作数据的方法
>   const addCount = () => {
>     count.value++
>   }
>   const subCount = () => {
>     count.value--
>   }
>   // 声明基于数据的计算属性
>   const doubleCount = computed(() => count.value * 2)
>   const msg = ref('我是Vu3的pinia使用')
>
>   return {
>     count,
>     addCount,
>     subCount,
>     doubleCount,
>     msg
>   }
> })
> ```
>
> 2.在组件中使用
>
> ```vue
> import { useCounterStore } from '@/store/counter';
> const counterStore = useCounterStore();
>
> <h3>App.vue根 - {{ counterStore.msg }} -- {{ counterStore.count }}</h3>
> ```
>
> 3.在使用store的时候不可直接进行结构赋值，可调用storeToRefs()函数
>
> 但是store里的函数可以直接结构
>
> ```vue
> import { useCounterStore } from '@/store/counter';
> import { storeToRefs } from 'pinia';
>
> const counterStore = useCounterStore();
> const { msg, count } = storeToRefs(counterStore)
> <h3>App.vue根 - {{ msg }} -- {{ count }}</h3>
> ```
>
> 
>
> 4.pinia持久化
>
> 安装插件`npm i pinia-plugin-persistedstate`
>
> 将插件添加到pinia实例上
>
> ```
> import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
>
> app.use(pinia.use(piniaPluginPersistedstate)).mount('#app')
> ```
>
> 使用时需要在store模块中defineStore的第三个参数中添加` {persist: true}`
>
> defineStore('模块名',() => {}, {persist: true})
>
> `https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/`

#### 4. 大事件管理系统

> pnpm 包管理升级
>
> Eslint + prettier 更规范的配置
>
> husky (Git hooks工具) 代码提交之前，进行校验

> 在线演示： https://fe-bigevent-web.itheima.net/login
>
> 接口文档：https://apifox.com/apidoc/shared-26c67aee-0233-4d23-aab7-08448fdf95ff/api-93850835
>
> 基地址：http://big-event-vue-api-t.itheima.net

> 1. 修改项目中eslint+prettier规范
>
> ```vue
> 在.eslintrc.cjs文件中添加
>
>   rules: {
>     // 1. 禁用格式化插件prettier  format on save 关闭
>     // 2. 安装eslint 插件，并配置保存时自动修复
>     'prettier/prettier': [
>       'warn',
>       {
>         singleQuote: true, // 单引号
>         semi: false, // 无分号
>         printWidth: 80, // 每行宽度至多80字符
>         trailingComma: 'none', // 不加对象|数组最后逗号
>         endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
>       }
>     ],
>     'vue/multi-word-component-names': [
>       'warn',
>       {
>         ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
>       }
>     ],
>     'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
>     // 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭，这里加上是为了支持下一个章节演示。
>     'no-undef': 'error'
>   }
>
> ```
>
> 2. 提交前做代码检查
>
> ```vue
> 1. git初始化 git init
> 2. 初始化 husky 工具配置  https://typicode.github.io/husky/
> pnpm dlx husky-init && pnpm install
> 3. 修改 .husky/pre-commit 文件
> pnpm lint
> ```
>
> 但是全局做检查耗时还可能会有问题
>
> 3. 暂存区eslint校验
>
> ```vue
> 1. 安装 pnpm i lint-staged -D
> 2. 配置package.json
> {
>   // ... 省略 ...
>   "lint-staged": {
>     "*.{js,ts,vue}": [
>       "eslint --fix"
>     ]
>   }
> }
>
> {
>   "scripts": {
>     // ... 省略 ...
>     "lint-staged": "lint-staged"
>   }
> }
> 3. 修改.husky/pre-commit文件
> pnpm lint-staged
> ```

Vue-router 4 

> ```vue
> import { createRouter, createWebHistory } from 'vue-router'
>
> // createRouter 创建路由实例
> // 配置history模式
> // 1. history模式 createWebHistory
> // 2. hash模式 createWebHashHistory
> const router = createRouter({
>   //vite中的环境变量 import.meta.env.BASE_URL  就是vite.config.js中的base配置项
>   history: createWebHistory(import.meta.env.BASE_URL),
>   routes: []
> })
>
> export default router
>
> ```
>
> 
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
>     2. 按需引入
> 4. 更优的数据响应式
>     1. Proxy

#### 2. 脚手架

> 1. 使用``npm init vue@latest` 创建脚手架 （需要nodejs为16.0.0以上版本）
>
> 2. 数据中需要响应式
>
>    > reactive 处理对象类型的
>    >
>    > ref 处理简单类型的或对象类型的（本质，是在原有传入的数据的基础上，外层包了一层对象。包成了复杂类型。底层实现是包成复杂类型后，再借助reactive实现的响应式）
>    >
>    > 注意： ref在脚本中访问数据需要.value 在template中， .value不需要加
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
> 5. 通过ref绑定拿到dom和组件实例
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
> 6. provider 和inject
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
> 7. 写其他配置项
>
>    ```vue
>    defineOptions({
>    	name: 'FullName'
>    })
>    ```
>
>    ​
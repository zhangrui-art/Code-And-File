#### 1. 基础（指令+计算属性+侦听器+生命周期）

> 1. v-html="" 可以动态加载html标签
>
> 2. v-show和v-if都可以控制元素显示或者隐藏
>
>    v-show是通过css控制的；v-if是根据条件判断来控制元素的创建和移除，条件渲染
>
> 3. v-else和v-else-if 辅助v-if使用的
>
> 4. v-on用来注册事件
>
>    v-on:click=""注册事件，可以简写为@click=""
>
>    注册事件可以@click="函数名"，在methods里定义的函数名，函数可以传参。方法中的this指向实例。
>
> 5. v-bind 动态的设置html的标签属性 -> src url title等
>    v-bind:属性名="表达式"， 可以简写为:属性名="表达式" eg.  :src="url"
>
> 6. v-for 基于数据循环，多次渲染整个元素 -> 数组、对象、数字...
>    v-for="(item,index) in 数组"  // 数组循环
>
> 7. v-modell给表单元素使用，双向数据绑定（数据和视图无论谁变化，另外一个都会自动更新），-> 可以快速获取或设置表单元素内容 
>
>    v-model="变量"
>
>    v-model会根据控件类型自动选取正确的方法来更新元素
>
>    > 输入框 input:text  -> value
>    >
>    > 文本域 textarea    -> value
>    >
>    > 复选框input:checkbox -> checked
>    >
>    > 单选框input:radio -> checked
>    >
>    > 下拉菜单 select -> value
>
> 8. 指令修饰符
>
>    1. 按键修饰符 
>
>       @keyup.enter -> 键盘回车监听
>
>    2. v-model修饰符
>
>       v-model.trim  -> 去除首尾空格
>
>       v-model.number -> 转数字
>
>    3. 事件修饰符
>
>       @事件名.stop -> 阻止冒泡
>
>       @事件名.prevent -> 阻止默认行为
>
> 9. v-bind对于样式的增强
>
>    1. 操作class `:class="对象/数组"`
>
>       1. 对象 -> 键就是类名，值是布尔值。值为true，有这个类，否则没有这个类
>
>          `<div class="box" :class="{ 类名1: 布尔值, 类名2: 布尔值}"></div>`
>
>       2. 数组 -> 数组中的所有类都会被添加到盒子上，本质就是一个class列表
>
>          `<div class="box" :class="[ '类名1', '类名2', '类名3' ]"></div>`
>
>    2. 操作style `:style="{属性名：'属性值'}"`
>
>       需要注意的是，如果是类似background-color这种需要用驼峰改一下，或者用 ' '包一下
>
> 10. 计算属性computed
>
>     ```vue
>     computed: {
>     	计算属性名(){
>     		return 计算值    
>     	}
>     }
>
>     调用 {{计算属性名}}
>     ```
>
>     计算属性： 有缓存的，一旦计算出来结果，就会立刻缓存 
>
>     下一次读取 -> 直接读缓存就行 -> 性能很高
>
>     ```vue
>     computed: {
>     	计算属性名(){
>           get() {
>     		计算逻辑
>     		return 结果
>           }
>           set(修改的值) {
>     		修改逻辑
>           }  
>     	}
>     }
>
>     ```
>
> 11. watch侦听器
>
>     ```vue
>           watch: {
>             'obj.words' (newValue){
>
>             }
>           }
>     ```
>
> 12. 生命周期
>
>     四大阶段八个钩子
>
>     创建阶段（beforeCreate/created）
>
>     挂载阶段（beforeMount/mounted）
>
>     更新阶段（beforeUpdate/updated）
>
>     卸载阶段（beforeDestory/destoryed）
>
>     常用：created // 可以开始发送初始化渲染的请求了 
>
>     ​	    mounted // 可以操作dom

#### 2. 脚手架

> 1. 修改端口号的方式，在vue.config.js文件中
>
>    ```vue
>    const { defineConfig } = require('@vue/cli-service')
>    module.exports = defineConfig({
>      transpileDependencies: true,
>      // 添加该对象即可
>      devServer: {
>        port: 5000
>      }
>    })
>    ```
>
> 2. 每个组件只能有一个根标签，模板中获取事件的形参 -> $event 获取
>
> 3. 注册全局组件需要在main.js中注册
>
> 4. 组件中的style需要加上scoped属性，不然会全局生效互相影响
>
> 5. 父子组件通信： 
>
>    1. 父组件传值给子组件是需要用props，简写可以是数组
>
>       ```vue
>       props: ['value1','value2',...]
>
>       props: {
>       	value1: Number,
>       }
>
>       props: {
>         value1: {
>       	type: Number,
>       	default: 12,
>       	required: true,
>       	// 自定义验证
>           validator() {
>       		return true
>           }
>         }
>
>       }
>       ```
>
>    2. 自己的数据自己操作，如果子组件需要操作，需要用this.$emit('消息名', 修改的内容)去发送给父组件，从而父组件调用@'消息名'='方法' 去操作自己的数据
>
> 6. 兄弟通信
>
>    使用发布-订阅的模式，一个发布，多个订阅都可以接受到信息
>
>    ```vue
>    import Vue from "vue";
>    const Bus = new Vue();
>    export default Bus;
>    ```
>
> 7. provider-inject
>
>    值得注意的是，传递的值中，简单类型是非响应式的，而复杂类型是响应式的
>
>    ```vue
>    // 爷爷  
>    provide() {
>        return {
>          color: this.color, // 简单类型
>          userInfo: this.userInfo // 复杂类型
>        }
>      },
>    // 孙子
>    inject: ['color', 'userInfo']
>    ```
>
> 8. 表单类组件的封装
>
>    父传子： 通过props传递，v-model拆解（拆解）绑定数据
>
>    子传父：监听输入，子传父传值给父组件修改
>
> 9. 获取dom元素
>
>    设置ref属性，通过this.$refs.myChart来获取dom元素或者组件实例
>
> 10. $nextTick
>
>     vue中的dom更新是异步的。会等所有的操作结束后再操作dom。所以如果需要同步更新，则需要用$nextTick
>
>     ```vue
>     $nextTick(()=>{
>
>     })
>     ```
>
>     ​
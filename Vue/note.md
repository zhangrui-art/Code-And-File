版本  Vue2 -> VueRouter3.x -> Vuex 3.x

​	  Vue3 -> VueRouter3.x -> Vuex 4.x

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
> 11. 自定义指令
>
>     全局注册------main.js中定义
>
>     ```vue
>     Vue.directive('focus', {
>       // inserted会在 指令所在的元素，被插入到页面中时触发
>       inserted (el) {
>         // el就是指令绑定的元素
>         el.focus()
>       }
>     })
>     ```
>
>     局部注册-----每个组件内部定义
>
>     ```vue
>       directives: {
>         // 指令名： 指令的配置项
>         focus: {
>           inserted(el) {
>             el.focus()
>           }
>         }
>       }
>     ```
>
>     自定义指令还可以传值，使用的时候通过=去拿到，也可以通过update函数去更新
>
>     ```vue
>     // 使用 v-color='变量'
>       directives: {
>         color: {
>           inserted(el, binding) {
>             console.log(binding)
>             el.style.color = binding.value
>           },
>           update(el, binding) {
>             el.style.color = binding.value
>           }
>         }
>       }
>     ```
>
> 12. 插槽
>
>     可以使用插槽占位，从而在传入的时候传入对应的结构或内容
>
>     同时<slot></slot>标签内可以写内容，会被当做后备内容（默认值）
>     具名插槽： v-slot:head  -> 简写成 #head
>
>     eg.
>
>     ```vue
>     父组件： 
>         <MyDialog>
>           <template #head>友情提示</template>
>           <template #content>确认要删除吗？</template>
>           <template #footer>      
>             <button>取消</button>
>             <button>确认</button>
>           </template>
>         </MyDialog>
>     子组件：
>         <div class="dialog-header">
>           <h3><slot name="head">警告</slot></h3>
>           <span class="close">✖️</span>
>         </div>
>         <div class="dialog-content">
>           <slot name="content">
>             <p>这是一段内容</p>
>           </slot>
>         </div>
>         <div class="dialog-footer">
>           <slot name="footer">
>             <button>取消</button>
>             <button>确认</button>
>           </slot>
>         </div>
>
>     ```
>
>     作用域插槽：可以通过给slot标签添加属性的方式传值，且所有的属性会收集到一个对象中。可以通过插槽名值去使用
>
>     eg. 
>
>     ```vue
>     父组件： 
>         <MyTable :data="list2">
>           <template #default="{ curItem }">
>             <button @click="show(curItem)">查看</button>
>           </template>
>         </MyTable>
>     子组件： 
>               <slot :curItem="item" msg="测试"></slot>
>
>     ```
>
> 13. 路由
>
>     1. 路由使用步骤 5+2
>
>        > Vue2下载 3.6.5
>        >
>        > 引入包
>        >
>        > 安装注册 Vue.use
>        >
>        > 创建路由对象
>        >
>        > 注入到new Vue中，建立关联
>
>        > 创建组件，配置规则（路由规则表）
>        >
>        > 配置导航（a标签记得路由前加#/），配置路由出口，router-view(组件展示的位置)
>
>     2. router-link取代a标签，可以直接设置高亮样式。 to属性指定路径
>
>        > router-link-exact-active  精确匹配   仅仅可以匹配/my
>        >
>        > router-link-active  模糊匹配（用的多） eg.可以匹配 /my   /my/a  /my/b..
>
>        可以在router里自己定制上述两个类名： linkActiveClass / linkExactActiveClass
>
>     3. 路由传参
>
>        1. 查询参数（常用传多个参数）
>
>           to='/path?参数名=值&参数名1=值1'
>
>           template内使用：$route.query.参数名
>
>           created中使用：this.$route.query.参数名
>
>        2. 动态路由传参（常用传单个参数）
>
>           首先配置路由表中动态路由 `path: '/search/:参数`加？可以表示可选`path: '/search/:参数?'`
>
>           配置导航链接： to='/path/参数值'
>
>           使用： $route.params.参数名​
>     
>     4. redirect重定向
>     
>        在路由规则表里用redirect可以默认匹配一个
>     
>     5. 404
>     
>        当路径找不到匹配时，可以在路由配置的最后添加
>     
>        `path: '*', component: NotFound`
>     
>     6. 路由的模式设置
>     
>        默认是hash路由 即有#的
>     
>        可以通过在router的配置中设置mode: "history" 来改成history路由 
>     
>     7. 两种路由跳转
>     
>        `this.$router.push('路由路径')`


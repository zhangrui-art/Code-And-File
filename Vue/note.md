#### 1. 指令

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
> 5. v-bind 动态的设置html的标签属性 -> src url title等
>    v-bind:属性名="表达式"， 可以简写为:属性名="表达式" eg.  :src="url"
> 6. v-for 基于数据循环，多次渲染整个元素 -> 数组、对象、数字...
>    v-for="(item,index) in 数组"  // 数组循环

### 关于虚拟DOM

1. 本质Object类型的对象（一般对象）
2. 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部再用，无需真实DOM那么多的属性
3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上


### jsx语法规则：

1. 定义虚拟DOM时，不要用引号；
2.  标签中混入js表达式时要用{}
3.  样式的类名指定不要用class,要用className
4. 内联样式，要用style={{key: "value"}}的形式去写
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母

   a. 若小写字母开头，则将该标签转为html同名元素，若html中无该标签对应的同名元素，则报错

   b. 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错

### JS 表达式和JS语句的区别

1. 表达式： 一个表达式会产生一个值，可以放在任何一个需要值的地方

   下面这些都是表达式： 

   ​	(1). a

   ​	(2). a+b

   ​	(3). demo(1)

   ​	(4). arr.map()

   ​	(5). function test(){}

2. 语句（代码）：

   下面这些都是语句（代码）

   ​	(1). if(){}

   ​	(2). for(){}

   ​	(3). switch(){} 


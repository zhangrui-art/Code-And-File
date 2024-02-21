#### 1. less的注释 

> /**/ 是暴露出去的注释
>
> // 后是不会暴露的注释

#### 2. less定义变量

> less中的变量的加载是具有延迟的。同一个块内会加载完成后使用变量

`@color: aquamarine`  -> `@color`

`@m:margin` -> `@{m}`

#### 3. 嵌套规则

> 后代使用{}， 同级用&

```javascript
#wrap {
  width: 600px;
  height: 400px;
  border: 1px solid;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  #inner {
    margin: 100px auto;
    position: relative;
    width: 400px;
    height: 200px;
    background-color: aquamarine;
    &:hover{
      background-color: antiquewhite;
    }
  }
}
```

#### 4. 混合

> 普通混合是显示在css文件中
>
> .setCenter()是不显示在css文件中，并且可以传参，参数可以指定默认值，同时可以指定对应参数
>
> less中导入用`@import './triangle.less';`
>
> 在使用混合的时候会优先找同名的`@_`
>
> ````javascript
> .triangle(@_){
>   width: 0;
>   height: 0;
>   border-style: solid;
> }
>
> .triangle(T,@w,@c){
>   border-width: @w;
>   border-color: @c transparent transparent  transparent;
> }
> .triangle(R,@w,@c){
>   border-width: @w;
>   border-color: transparent  @c transparent transparent;
> }
> .triangle(B,@w,@c){
>   border-width: @w;
>   border-color: transparent transparent @c transparent;
> }
> .triangle(L,@w,@c){
>   border-width: @w;
>   border-color: transparent transparent transparent @c ;
> }
> ````
>
> 

#### 5. 计算

> `border-width: (100 + 50px);` 计算的双方只需要一方带单位也可以进行

#### 6. 继承

> 继承的效率要比混合高，继承是定义一个类，调用时使用extend函数进行`&:extend(.setCenter all)` 加上all可以把该类的相关伪类都携带，比如hover等。但是对于hover时，子元素有相同属性时需要加权重，不然可能会造成不生效的问题

#### 7. 避免预编译

> less会直接进行计算，对于想让浏览器进行计算的时候，需要进行避免预编译，如`cacl(100+100px)` 想要进行预编译改成`~"cacl(100+100px)"`即可
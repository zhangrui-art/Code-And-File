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
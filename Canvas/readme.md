#### canvas 基础

###### 1. canvas绘制

> 首先需要找到画布对象
>
> let cas = document.querySelector("#canvas1");
>
> 找到画笔对象
>
> var ctx = cas.getContext("2d");

###### 2. 绘制

> 分为stroke和fill两种方式
>
> 可以在设置绘制方式之前进行相应的修改
>
> ctx.fillStyle = "black";
>
> ctx.fill();
>
> > 绘制矩形三种方式，strokeRect或者arc或者lineTo
> >
> > > ctx.strokeRect(100,100,200,100)
> > >
> > > ct.arc(300, 300, 100, 0, Math.PI);
> > >
> > > ctx.lineTo(...)

###### 3. 设置相关style

> miterLimit 设置lineTo的拐点样式
>
> lineCap设置线段端点样式
>
> lineJoin 设置线段连接处的样式
>
> lineWidth 设置线宽
>
> 设置全局透明度： ct.globalAlpha = 0.3 （要放在最前面）
>
> ```js
>         ct.moveTo(380,200)
>         ct.lineTo(400,300)
>         ct.lineTo(420,200)
>         ct.strokeStyle = "#fcd"
>         // 设置粗细，默认1px
>         ct.lineWidth = "40"
>         // 设置线条端点样式,butt平齐，round半圆,square正方形
>         ct.lineCap = "square"
>         // 设置2个线段连接处样式,miter外侧相连的角，round角被磨圆了，bevel角被磨平了
>         ct.lineJoin = "miter"
>         // 对衔接面进行设置
>         ct.miterLimit = 5
>         ct.stroke()
> ```
>
> 

###### 4. 贝塞尔曲线

> 二次贝塞尔曲线：
>
> ct.quadraticCurveTo(cpx,cpy,x,y)
>
> cpx,cpy-> 中间点的位置
>
> xy-> 终止点的位置

> 三次贝塞尔曲线
>
> ct.bezierCurveTo(400,200,600,350,300,550)
>
> 两个中间点，一个终止点-> 可用来画爱心

###### 5. path2d

> 可以封装路径

###### 6. 线性渐变和径向渐变

> 线性渐变-> 渐变动画
>
> ​        // let lineGradient = ct.createLinearGradient(100,100,300,250)
>
> ​        // lineGradient.addColorStop(0,"red")
>
> ​        // lineGradient.addColorStop(0.5,"#ffcccc")
>
> ​        // lineGradient.addColorStop(1,"blue")
>
> ​        // ct.fillStyle = lineGradient
>
> ​        // ct.fillRect(100,100,200,150)
>
> > 一个小的渐变动画效果->通过调用requestAnimationFrame去渐变动画
> >
> > ```js
> >     var canvas1 = document.querySelector("#canvas1");
> >     var ct = canvas1.getContext("2d");
> >     // let lineGradient = ct.createLinearGradient(100,100,300,250)
> >     // lineGradient.addColorStop(0,"red")
> >     // lineGradient.addColorStop(0.5,"#ffcccc")
> >     // lineGradient.addColorStop(1,"blue")
> >     // ct.fillStyle = lineGradient
> >     // ct.fillRect(100,100,200,150)
> >     let index = 0
> >     function render() {
> >         ct.clearRect(100,100,200,150)
> >         index += 0.005
> >         if(index>1){
> >             index = 0
> >         }
> >         let lineGradient = ct.createLinearGradient(100,100,300,250)
> >         lineGradient.addColorStop(0,"red")
> >         lineGradient.addColorStop(index,"#ffcccc")
> >         lineGradient.addColorStop(1,"blue")
> >         ct.fillStyle = lineGradient
> >         ct.fillRect(100,100,200,150)
> >         console.error("index",index);
> >         requestAnimationFrame(render)
> >     }
> >     requestAnimationFrame(render)
> > ```

> 径向渐变
>
> ​        // let radGradient = ct.createRadialGradient(300,200,0,300,200,200)
>
> ​        // radGradient.addColorStop(0,"red")
>
> ​        // radGradient.addColorStop(0.5,"#ffcccc")
>
> ​        // radGradient.addColorStop(1,"blue")        
>
> ​        // ct.fillStyle = radGradient
>
> ​        // ct.fillRect(0,0,600,400)
>
> > 径向渐变小动画-> 
> >
> > ```js
> >     let index = 0 
> >     function render(){
> >         ct.clearRect(0,0,600,400)
> >         index += 0.005
> >         if(index>1){
> >             index = 0
> >         }
> >         let radGradient = ct.createRadialGradient(300,200,0,300,200,200)
> >         radGradient.addColorStop(0,"red")
> >         radGradient.addColorStop(index,"#ffcccc")
> >         radGradient.addColorStop(1,"blue")        
> >         ct.fillStyle = radGradient
> >         ct.fillRect(0,0,600,400)
> >         requestAnimationFrame(render)
> >     }
> >     requestAnimationFrame(render)
> > ```
> >
> >
> > 径向渐变模拟3D小球
> >
> > ```js
> >     let radGradient = ct.createRadialGradient(250,150,20,300,200,100)
> >     radGradient.addColorStop(0,"#ffcccc")
> >     // radGradient.addColorStop(0.4,"#ffcccc")
> >     radGradient.addColorStop(1,"red")
> >     ct.fillStyle = radGradient
> >     ct.arc(300,200,100,0,Math.PI*2)
> >     ct.fill()
> > ```

###### 7. 圆锥渐变

> ​        // 角度， 位置x， 位置y 
>
> ​        let coneGradient = ct.createConicGradient(0, 300, 200)
>
> ​        coneGradient.addColorStop(0,"red")
>
> ​        coneGradient.addColorStop(1,"blue")
>
> ​        ct.fillStyle = coneGradient
>
> ​        ct.fillRect(0,0,600,400)

###### 8. 印章——pattern

> 通过印章可以填充图案
>
> ```js
>         let img = new Image() 
>         img.src = './forPattern.svg'
>         img.onload = function() {
>             //(图片对象-可以是Canvas对象也可以是image对象，重复方式repeat/no-repeat/repeat-x/repeat-y)
>             let pattern = ct.createPattern(img,"repeat-x")
>             ct.fillStyle = pattern
>             ct.fillRect(0,0,600,400)
>         }
> ```

###### 9.虚线设置 

> 两个参数，实线长，虚线长
> setLineDash([])
>
> lineDashOffset虚线偏移量
>
> > 动态虚线实例
> >
> > ```js
> >         let index = 0
> >         function render(){
> >             ct.clearRect(0,0,800,600)
> >             index += 1
> >             index = index>100 ? 0 : index
> >             ct.moveTo(300,200)
> >             ct.lineTo(400,300)
> >             ct.lineTo(500,200)
> >             ct.strokeStyle = "#fcd"
> >             // 设置粗细，默认1px
> >             ct.lineWidth = "1"
> >             // 设置线条端点样式,butt平齐，round半圆,square正方形
> >             ct.lineCap = "square"
> >             // 设置2个线段连接处样式,miter外侧相连的角，round角被磨圆了，bevel角被磨平了
> >             ct.lineJoin = "miter"
> >             // 对衔接面进行设置
> >             ct.miterLimit = 5
> >             // 设置虚线
> >             ct.setLineDash([40,5])
> >             ct.lineDashOffset = index
> >             ct.stroke()
> >             requestAnimationFrame(render)
> >         }
> >         requestAnimationFrame(render)
> > ```

###### 10. 阴影设置

> ```js
>         ct.beginPath()
>         ct.moveTo(300,300)
>         ct.bezierCurveTo(400,200,600,350,300,550)
>         ct.bezierCurveTo(0,350,200,200,300,300)
>         ct.shadowOffsetX = 40 
>         ct.shadowOffsetY = 5 
>         ct.shadowBlur = 5
>         ct.shadowColor = "#fcd"        
>         ct.strokeStyle = "#f00"
>         ct.stroke();
>         ct.fillStyle = "#f00"
>         ct.fill()
>         ct.closePath()
> ```

###### 11. 绘制图片

> 通过传入drawImage的参数个数不同，进行对应的设置
>
> 1. 图片对象，水平位置，垂直位置
>
>    ct.drawImage(img, 0, 0)
>
> 2. 图片对象，水平位置，垂直位置，长度，高度
>
>    ct.drawImage(img,0,0,600,580)
>
> 3. 图片对象，裁剪起始点x，裁剪起始点y，裁剪长度，裁剪高度，水平位置，垂直位置，长度，高度
>
>    ct.drawImage(img,100,0,100,200,0,0,100,200)
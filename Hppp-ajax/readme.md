#### 1. 启动rest api 接口
> json-server --watch db.json
#### 2. get请求参数的两种方式
> param 方式 以及query 方式

#### 3. 区别一般http请求与ajax请求

> 1. ajax是特别的http请求，对服务端没有区别，区别在浏览器端
>
> 2. 浏览器发送请求：只有XHR和fetch发出的才是ajax请求，其他的都是非ajax请求
>
> 3. 浏览器端接到响应：
>
>    （1） 一般请求： 浏览器一般会直接显示响应体数据，也就是我们常说的刷新/跳转页面
>
>    （2） ajax请求：浏览器不会对界面进行任何操作，只是调用监视的回调函数并传入响应相关数据

#### 4. 创建一个ajax请求

> 1. 创建xhr对象
>
>    const xhrRequest = new XMLHttpRequest()
>
> 2. 打开连接（初始化请求，没有请求）
>
>    xhrRequest.open(method,url,true)
>
> 3. 发送请求
>
>    > ​        if(method === "GET") {
>    >
>    > ​          xhrRequest.send()
>    >
>    > ​        }else if(method === "POST"){
>    >
>    > ​          // 如果发送json格式的请求体参数， 必须加请求头
>    >
>    > ​          xhrRequest.setRequestHeader('Content-Type','application/json;charset=utf-8')
>    >
>    > ​          xhrRequest.send(JSON.stringify(data))   // 发送json格式的请求体参数 
>    >
>    > ​        }
>
> 4. 绑定状态改变的监听
>
>    > ​         xhrRequest.onreadystatechange = function () {
>    >
>    > ​          // 如果请求没有完成，直接结束
>    >
>    > ​          if (xhrRequest.readyState !== 4) return
>    >
>    > ​          // 如果响应状态码在 [200, 300) 代表成功，否则失败
>    >
>    > ​          const { status, statusText } = xhrRequest
>    >
>    > ​          console.error(status);
>    >
>    > ​          // 如果请求成功了，resolve
>    >
>    > ​          if (status >= 200 && status <= 299) {
>    >
>    > ​            // 准备结果数据对象response
>    >
>    > ​            const response = {
>    >
>    > ​              data: JSON.parse(xhrRequest.response),
>    >
>    > ​              status,
>    >
>    > ​              statusText
>    >
>    > ​            }
>    >
>    > ​            resolve(response)
>    >
>    > ​          } else {  // 如果请求失败了，reject
>    >
>    > ​            reject(new Error('request error status is ' + status))
>    >
>    > ​          }
>    >
>    > ​        }
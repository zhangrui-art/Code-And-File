const express  = require('express')
// const cors = require('cors')
const app = express() 

// app.use(cors())


app.use((request,response,next)=>{
    console.log("有人请求了服务器2");
    console.log("请求来自于",request.get('Host'));
    console.log("请求的地址是",request.url);
    next() 
})

app.get('/cars',(request,response) => {
    const cars = [
        {id:001, name: '奔驰',price:199},
        {id:002, name: '马自达',price:109},
        {id:003, name: '捷达',price:120}
    ]
    response.send(cars)
})

app.listen(5001, (err)=>{
    if(!err) console.log('服务器2启动成功了，请求学生信息地址为： http://localhost:5001/cars');
})
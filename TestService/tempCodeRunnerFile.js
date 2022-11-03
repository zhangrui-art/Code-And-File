
app.get('/cars',(request,response) => {
    const cars = [
        {id:001, name: '奔驰',price:199},
        {id:002, name: '马自达',price:109},
        {id:003, name: '捷达',price:120}
    ]
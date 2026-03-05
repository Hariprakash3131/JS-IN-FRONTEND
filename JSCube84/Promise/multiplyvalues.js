let mul=new Promise((resolve)=>{
    resolve(10)
})

mul.then((data)=>{
    return data*2
})

.then((ans)=>{
    console.log(ans)
})


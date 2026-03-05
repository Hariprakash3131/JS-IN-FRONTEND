let promiseChain=new Promise((resolve)=>{
    resolve(5)
})

promiseChain.then((data)=>{
    return data+5
})
.then((data)=>{
    return data*2
})
.then((ans)=>{
    console.log(ans)
})
let a=new Promise((resolve)=>{
    resolve("Task Completed")
})

a.then((value)=>{
    return value
})

console.log(a)
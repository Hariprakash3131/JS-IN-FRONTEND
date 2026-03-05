let a =new Promise((resolve,reject)=>{
    reject("Something went wrong")
})

a.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

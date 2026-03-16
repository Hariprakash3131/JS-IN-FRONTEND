const promiseState=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let user={Name:"James"}
        resolve(user)
    },5000)
})
console.log(promiseState)
promiseState.then((data)=>{
    console.log("After 5 sec ",data)
})


       
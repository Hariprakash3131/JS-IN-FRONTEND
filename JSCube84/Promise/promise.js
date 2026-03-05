let ex=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let user={name:"Hari"}
        resolve('Completed')
    },5000)
})

ex.then((result)=>{
    console.log(result)
})
console.log(ex)
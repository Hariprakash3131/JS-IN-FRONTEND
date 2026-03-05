// let ex=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let user={name:"Hari"}
//         resolve('Completed')
//     },5000)
// })

// ex.then((result)=>{
//     console.log(result)
// })
// console.log(ex)

let p = new Promise((resolve)=>{
    resolve(5)
})

p.then((num)=>{
    return num * 2
})
.then((result)=>{
    console.log(result)
})
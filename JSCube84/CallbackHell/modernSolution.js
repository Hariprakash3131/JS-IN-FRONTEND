function step1(){
 return Promise.resolve("Step 1 completed")
}

function step2(){
 return Promise.resolve("Step 2 completed")
}

function step3(){
 return Promise.resolve("Step 3 completed")
}

step1()
.then((data)=>{
    console.log(data)
    return step2()
})
.then((data)=>{
    console.log(data)
    return step3()
})
.then((data)=>{
    console.log(data)
})



// async function runSteps(){
//     console.log(await step1())
//     console.log(await step2())
//     console.log(await step3())
// }

// runSteps()
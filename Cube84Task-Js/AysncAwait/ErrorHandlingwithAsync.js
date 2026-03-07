function errorHandling(){
   return new Promise((resolve,reject)=>{
    let a=9
    
    if(a===5){
        resolve('Success')
    }
    else{
        reject('Something Went Wrong')
    }
})
}




async function errorNoticed(){
    try
    {           
        let output=await errorHandling()
        console.log(output)
    }

    catch(error){
        console.log(error)
    }
}

errorNoticed()
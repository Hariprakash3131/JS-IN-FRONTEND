let arr=[
    {name:"Sarath",Age:29,isActive:true},
     {name:"sathish",Age:29,isActive:true},
      {name:"kumar",Age:29,isActive:false},

]
function users(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          arr.forEach((array)=>{
            if(array.isActive===true){
            console.log(array)
           }
           else{
            console.log('Not Fetch')
           }
          })
        
        
        },2000)
    })
}

async function userShow(){
    try{
        let usersList=await users()
        console.log(usersList)
    }
    catch(error){
        console.log(error)
    }
}

userShow()
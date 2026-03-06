api=false

function apiCalls(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(api===true){
                console.log('Data Fetch')
            }
            else{
                console.log('Data not fetch')
            }
        },2000)
    })
}

async function apiShow(){
    try{
    let show=await apiCalls()
    console.log(show)
    }

    catch(error){
        console.log(error)
    }
}

apiShow()

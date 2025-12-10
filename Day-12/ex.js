let count=0
setInterval(()=>{
    console.log(count++)

    if(count==5){
        clearInterval(count)
        console.log('Stopped')
    }
},2000)
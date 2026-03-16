let result=0
function add(a,b){
    return a*b
}
try{
    result=add(10,30)
    console.log(result)
}
catch(e){
    console.log({name:e.name,message:e.message})
}
finally{
    console.log({result})
}
console.log('Bye')

// 300
// { result: 300 }
// Bye

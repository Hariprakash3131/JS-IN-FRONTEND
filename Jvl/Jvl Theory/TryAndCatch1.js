function add(a,b){
    return a*b
}
try {
    let result=add(10,20)
    console.log(result)
}
catch(e){
    console.log({name:e.name,message:e.message})
}
console.log("Bye")

// 200
// Bye
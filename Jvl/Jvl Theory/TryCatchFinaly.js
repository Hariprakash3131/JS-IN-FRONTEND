let result=0;
try{
    result=add(10,20)
    console.log(result)
}
catch(e){
    console.log({name:e.name,message:e.message})
}
finally{
    console.log({result})
}
console.log('Bye')

// { name: 'ReferenceError', message: 'add is not defined' }
// { result: 0 }
// Bye
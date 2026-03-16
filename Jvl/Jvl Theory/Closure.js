
//A closure gives access to parent function scope from inside inner 
//function an inner function 
//even after the parent function has returned
function outer(){
    var a=10
    function inner(){
        var b=25
        return a+b
    }
    return inner()
}
let add=outer()
console.log(add)  //35

// function add1(){
//     let q=12
//     function add1(){
//         let w=13
//         return q+w
//     }
//     return add2()
// }
// let plus=add1()
// console.log(plus)   if you let use that time error can show

function personName(name){
    console.log("FirstName",name)
    function personPhone(phone){
        console.log("PhoneNumber",phone)
    }
    return personPhone("6382947727")
}
personName("Hari")

function out(Name){

    console.log(Name)
    function inn(phone)
    {
        
        console.log(phone)
    }
    return inn("6382947727")
}
let output=out("James")
console.log(output)
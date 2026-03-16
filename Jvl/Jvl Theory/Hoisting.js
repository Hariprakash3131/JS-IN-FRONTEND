//Hoisting:Js moves declaration (not initialization ) 
// to the top of scope
function codeHoist(){
    a=10;
    let b=20;
}
codeHoist();
console.log(a);  //10
//console.log(b);  //ReferenceError: b is not defined



hello();
 function hello(){
    console.log("Hi Hello Joker")
 }

console.log(name);
var name="Prakash";  //undefined

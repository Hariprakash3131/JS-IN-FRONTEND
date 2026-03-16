//If a variable is declared outside any function or block, it has global scope.
//Variables declared inside a function are only accessible inside that function.
const name="Hari,From global scope";
function variableScope(){
    const name="James,From variable,function scope"
    console.log(name)
}
console.log(name);  //Hari,From global scope
variableScope();    //James,From variable,function scope

//Trail
function msg(){
    let greet="Hi,Prakash"
    console.log(greet)
}
msg();  
//console.log(greet)
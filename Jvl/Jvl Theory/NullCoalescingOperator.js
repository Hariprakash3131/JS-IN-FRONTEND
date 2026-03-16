// The nullish coalescing operator (??) is used 
// to provide a default value when a variable
//  is either null or undefined.
// It helps avoid false defaults caused by 
// falsy values like 0, false, or an empty string.

//Try the console

let personName;
personName=personName ?? "Prakash";
console.log(personName)    //Prakash

let name=null;
name=name ?? "James" 
console.log(name)  //James

let a=100
a=a ?? 500
console.log(a)  //100